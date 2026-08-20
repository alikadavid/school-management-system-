School Management App- An app for registering students into a school

Pre-Requisites needed to run the app
- Node.js installed
- postgreSQL/pgAdmin installed
- a code editor
- a functional browser
- internet connection

 Get started 
1. Clone the repository.
2. Open the project in your preferred code editor.
3. Install the required dependencies:

```bash
npm install
```
``` bash
npm i -D nodemon
```
```sql
create table junior_students(
id serial primary key,
first_name text not null,
last_name text not null,
class_id int not null
)
create table senior_students(
id serial primary key,
first_name text not null,
last_name text not null,
class_id int not null,
department_id int not null
)
create table contact_detail(
id serial primary key,
junior_student_id int references junior_students(id) on delete cascade,
senior_student_id int references senior_students(id) on delete cascade,
email text not null,
telephone text not null,
address text not null
)
create table junior_enrollment(
student_id int references junior_students(id) on delete cascade,
subject_id int references junior_subjects(id) on delete cascade,
primary key(student_id,subject_id)
)
create table senior_enrollment(
student_id int references senior_students(id) on delete cascade,
subject_id int references senior_subjects(id) on delete cascade,
primary key(student_id,subject_id)
)
create table junior_subjects(
id serial primary key,
subject text
)
insert into junior_subjects(subject)
select 
unnest(array['Mathematics', 'English', 'History', 'NVE', 'BST', 'CCA/MUSIC', 'CRS', 'Business Studies', 'Yoruba', 'French', 'Pre-Vocational Studies'])

create table senior_subjects(
id serial primary key,
subject text
)
insert into senior_subjects(subject)
select 
unnest(array['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'ICT', 'Data Processing', 'Further Mathematics', 'Commerce', 'Accounting',  'Civic', 'Literature', 'Geography',  'Visual Art', 'Government',  'Economics', 'Food and Nutrition', 'Yoruba', 'Agricultural Science'])

create table classes(
id serial primary key,
name text
)
insert into classes(name)
select 
unnest(array['Junior Secondary School 1','Junior Secondary School 2','Junior Secondary School 3','Senior Secondary School 1','Senior Secondary School 2','Senior Secondary School 3'])

create table departments(
id serial primary key,
name text
)
insert into departments(name)
select unnest(array['Arts','Commercial','Science'])


``` once all tables are created, head over to your code editor and run nodemon index.js  in your terminal
open your browser and visit http://localhost:3000 to use the app

