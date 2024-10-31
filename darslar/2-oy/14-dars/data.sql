create database dars14;
\c dars14
create table departments(
    id serial primary key,
    name varchar(50)
);

INSERT INTO departments (name)
VALUES 
    ('Engineering'),
    ('Human Resources'),
    ('Marketing'),
    ('Sales');


create table workers(
    id serial primary key,
    role varchar(50),
    salary int,
    department_id int,
    foreign key(department_id) references departments(id)
);

INSERT INTO workers (role, salary, department_id)
VALUES
    ('Software Engineer', 80000, 1),
    ('Data Analyst', 75000, 1),
    ('HR Specialist', 50000, 2),
    ('Recruiter', 55000, 2),
    ('Marketing Coordinator', 60000, 3),
    ('SEO Specialist', 62000, 3),
    ('Sales Associate', 45000, 4),
    ('Sales Manager', 90000, 4);

select * 
from workers
where salary >= (
    select avg(salary) from workers
);

select * 
from workers
where department_id = (
    select department_id
    from workers
    where salary = (
        select max(salary) from workers
    )
);


select * 
from workers
where id in (
    select department_id, count(*)
    from workers
    group by department_id
    having count(*) > 1
);
--//------------------------------------------------------------------------
create table if not exists products(
    id serial primary key,
    name varchar(50) not null,
    price decimal(10, 2) not null,
    quantity int not null check(quantity >= 0)
);

create table if not exists sales(
    id serial primary key,
    product_id int not null references products(id) on delete cascade,
    price decimal(10, 2) not null,
    quantity int not null check(quantity >= 0),
    sale_date timestamp default current_timestamp
);


INSERT INTO products (name, price, quantity) VALUES
('Apple iPhone 13', 799.99, 50),
('Samsung Galaxy S21', 699.99, 35),
('Xiaomi Redmi Note 10', 199.99, 100),
('OnePlus 9 Pro', 899.99, 20),
('Google Pixel 6', 599.99, 45);

INSERT INTO sales (product_id, price, quantity) VALUES
(1, 799.99, 2),
(2, 699.99, 1),
(3, 199.99, 5),
(4, 899.99, 1),
(5, 599.99, 3);


update products set quantity = quantity - 10 where id = 1;
INSERT INTO sales(product_id, price, quantity) VALUES(99, 999.99, 10);

begin transaction;
    update products set quantity = quantity - 10 where id = 1;
    INSERT INTO sales(product_id, price, quantity) VALUES(99, 999.99, 10);
commit;

begin transaction;
    update products set quantity = quantity - 10 where id = 1;
    INSERT INTO sales(product_id, price, quantity) VALUES(1, 999.99, 10);
rollback;


create type transaction_status as enum ('pending', 'completed', 'failed');

create table if not exists Transaction (
    id serial primary key,
    from_account int,
    to_account int,
    amout decimal(15, 2) not null check (amout > 0),
    transaction_date timestamp default current_timestamp,
    status transaction_status not null default 'pending'
);


INSERT INTO Transaction(from_account, to_account, amout, status) VALUES
(1, 2, 15000, 'completed');