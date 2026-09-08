import {readFileSync} from 'node:fs';
import JSZip from 'jszip';
import { DOMParser,XMLSerializer } from '@xmldom/xmldom';
import omml2mathml from 'omml2mathml';
import mammoth from 'mammoth';

async function furthermath(question) {
    const buffer=readFileSync(question);
    const zip=await JSZip.loadAsync(buffer);
    const docxml= await zip.file('word/document.xml').async('string');
    const xml= new DOMParser().parseFromString(docxml,'application/xml');
    const eqn=xml.getElementsByTagName('m:oMath');
    const placeholder='math_placeholder'

    const replacement=[];
    const equations=Array.from(eqn);
    // console.log(equations)
    for (let i = 0; i < equations.length; i++) {
        const element = equations[i];
        const mathml=omml2mathml(element);
        if (mathml.outerHTML.includes('<mtable>')) {
        const mtable = mathml.getElementsByTagName('mtable')[0];
            // console.log(mathml.outerHTML.includes('<w:drawing>'))
        const mrow = mathml.ownerDocument.createElement('mrow');

        const left = mathml.ownerDocument.createElement('mo');
        // left.appendChild(
        //     mathml.ownerDocument.createTextNode('(')
        // );
        left.setAttribute('style','font-size:2em;');
        left.setAttribute('stretchy','true')
        const right = mathml.ownerDocument.createElement('mo');
        // right.appendChild(
        //     mathml.ownerDocument.createTextNode(')')
        // );
        right.setAttribute('style','font-size:2em;');
        right.setAttribute('stretchy','true')

        mrow.appendChild(left);
        mrow.appendChild(mtable.cloneNode(true));
        mrow.appendChild(right);

        // mathml.replaceChild(mrow, mtable);
        }
        // mathml.setAttribute('display','block')
        const placeholder=`math_placeholder_${i}`;
        replacement.push({
            placeholder:placeholder,
            mathml:mathml.outerHTML
        })
        const parent=element.parentNode;
        const run=xml.createElement('w:r');
        const text=xml.createElement('w:t');
        text.appendChild(xml.createTextNode(placeholder));
        run.appendChild(text);
        parent.replaceChild(run,element)
        // console.log(omml2mathml(eqn[2]).outerHTML)
    }
    const serialize= new XMLSerializer()
    const modified=serialize.serializeToString(xml);
    zip.file('word/document.xml',modified);

    const modifiedBuffer=await zip.generateAsync({
        type:'nodebuffer'
    });
    const result=await mammoth.convertToHtml({buffer:modifiedBuffer})
    let html=result.value;
    for(let i=0;i<replacement.length;i++){
        html=html.replace(replacement[i].placeholder,replacement[i].mathml)
    }   
    
    return html;
}

export default furthermath;
