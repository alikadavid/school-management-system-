import mammoth from "mammoth";
import {join,dirname} from 'node:path';
import { fileURLToPath } from "node:url";


async function ss3(question) {
    const result=await mammoth.convertToHtml({path:question})
    console.log(result.messages)
    return result.value;
};

export default ss3
