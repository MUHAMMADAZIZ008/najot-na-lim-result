create table companiya(
    id_companiya serial primary key,
    name varchar(50)
);

insert into companiya(name) values
('yandex'), 
('uzum'), 
('google'), 
('aliepress'), 
('facebook'); 

create table employer(
    id serial primary key,
    name varchar(50),
    salary real,
    level int,
    companiya_id int,
    constraint fk_department
        foreign key(companiya_id) references companiya(id_companiya)
        on update cascade
);

insert into employer(name, salary, level, companiya_id) values
('Ali', 1000, 1, 2),
('Vali', 1500, 4, 2),
('Gani', 500, 1, 3),
('Gani', 700, 3, 4);

alter table employer
add constraint fk_department_cascade
foreign key(companiya_id)
ON UPDATE CASCADE;





update companiya set id_companiya = 9 where id_companiya = 4;

select *
from employer;

update employer set salary = salary + 2 where id = 2;
delete from employer;



delete from companiya where id_companiya = 1;


select *
from employer;
drop table employer;

select companiya_id, count(*)
from employer 
group by companiya_id
having count(*) = 2;

select name, count(*) as name_count, companiya_id, count(*) as count_id
from employer
group by name, companiya_i
--///-----------------------------
create table student(
    id serial primary key,
    name varchar(50)
);

insert into student (name) values
('ali'),
('vali'),
('gani');



create table grades(
    id serial primary key,
    student_id int,
    subject varchar(50),
    grade int,
    foreign key(student_id) references student(id)
);
insert into grades(student_id, subject, grade) values
(1, 'math', 85),
(2, 'physic', 90),
(3, 'computer', 95);


select name
from student
where id in (select student_id from grades where grade >= 90);


select name 
from student
where id in (
    select student_id from grades where grade > (
        select avg(grade) from grades
    )
)



create table employee (
    id serial primary key,
    name varchar(50),
    salary int
);

INSERT INTO employee (name, salary)
VALUES 
    ('Alice', 50000),
    ('Bob', 60000),
    ('Carol', 55000),
    ('David', 70000),
    ('Eve', 65000),
    ('Frank', 80000),
    ('Grace', 45000),
    ('Heidi', 90000),
    ('Ivan', 40000),
    ('Judy', 85000);


select name, salary
from employee
where salary > (
    select avg(salary)
    from employee
);

create index name_idx on employee(name);

select name from employee;