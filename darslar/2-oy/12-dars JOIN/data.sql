select length('hello worled')

select concat('hello', ' ', 'world');

select substring('hello world', 1, 5)
select lower('HELLO');
select upper('hello');
select trim('    hello       ');

select replace('hello world', 'world', 'postgres');
select position('world' in 'hello world');
--//-----------------------------------------------------------------------------

-- abs - musbatga o'tkazadi
-- sqrt - musbatga o'tkazadi
-- exp - musbatga o'tkazadi

select abs(-8888); -- faqat modul

select round(15.2); -- 50/50
select round(15.5);

select ceil(15.2); -- faqat tepag

select floor(15.8); -- faqat pastga

select power(2, 3); -- 1 dataja, 2 daraja

select sqrt(16); --ildiz
select exp(1);

--//-----------------------------------------------------------------------------

select ln(10) -- 
select log(100);
select mod(10, 3) -- qoldig'

select random();

--//-----------------------------------------------------------------------------
select current_date; -- joriy yili
select current_time; -- joriy vaqt
select current_timestamp; -- joriy yil va sana

select age('2001-04-10', '1957-06-16'); -- yoshni hisoblaydi

select date_trunc('month', timestamp, '2001-04-10');

select extract(year from timestamp '2001-04-10'); -- yilni oberadi
--//--------------------------------------------------------------------------
create table supplier(
    id serial primary key,
    supplier_name varchar(50)
);

insert into supplier(supplier_name) values
('John'),
('Anna'),
('Robert'),
('Jerry'),
('Time');

create table product(
    id serial primary key,
    product_name varchar(100),
    supplier_id int,
    FOREIGN key(supplier_id) references supplier(id) 
);

insert into product(product_name, supplier_id) values
('milk', 1),
('honey', 2),
('tub', 5),
('sour', 3),
('eggs', 4);


select  product_name, supplier_name
from product
inner join supplier on product.id = supplier.id;


select  product_name, supplier_name
from product
inner join supplier on product.id = supplier.id;


--//--------------------------------------------------------------------------
create table costomer(
    id serial primary key,
    first_name varchar(50)
);

insert into costomer(first_name) values
('John'),
('Anna'),
('Robert'),
('Jerry'),
('Time');


create table orders (
    id serial primary key,
    amout int,
    costomer_id int
);

insert into orders(amout, costomer_id) values
(200, 10), 
(500, 3),
(300, 6),
(800, 5),
(150, 8);

select costomer_id, first_name, amout
from costomer
left join orders  
on costomer.id = orders.costomer_id;



select costomer_id, first_name, amout
from costomer
right join orders  
on costomer.id = orders.costomer_id;


select costomer_id, first_name, amout
from costomer
full join orders  
on costomer.id = orders.costomer_id;
--//--------------------------------------------------------------------------

create table worker(
    id serial primary key,
    first_name varchar(50),
    age int,
    country varchar(50)
);
insert into worker (first_name, age, country) values
('John', 31, 'use'),
('Anna', 22, 'use'),
('Robert', 22, 'uk'),
('Jerry', 25, 'uk'),
('Time', 28, 'uae');


select country, count(*) as number
from worker
group by country;

--//--------------------------------------------------------------------------
create table salesman(
    id serial primary key,
    name varchar(50),
    city varchar(50),
    commission float
)

insert into salesman(name, city, commission) values
('james hog', 'new york', 0.15),
('nail knite', 'paris', 0.13),
('pit alex', 'london', 0.14),
('mc lvon', 'paris', 0.14),
('paul adam', 'rome', 0.13),
('lauson', 'san', 0.12);

create table customer(
    id serial primary key,
    name varchar(50),
    city varchar(50),
    grade int,
    salesman_id int,
    FOREIGN key(salesman_id) references salesman(id)
);
INSERT INTO customer (name, city, grade, salesman_id)
VALUES
('Nick Rimando', 'New York', 100, 1),
('Brad Davis', 'New York', 200, 1),
('Graham Zusi', 'California', 200, 2),
('Julian Green', 'London', 300, 2),
('Fabian Johnson', 'Paris', 300, 6),
('Geoff Cameron', 'Berlin', 100, 3),
('Jozy Altidore', 'Moscow', 200, 3),
('Brad Guzan', 'London', 300, 5);

select * 
from salesman
inner join customer on salesman.id = customer.id;

--//-----------------------------------------------------------------------------------------
extra


select *
from salesman
inner join customer on salesman.id = customer.salesman_id;


select *
from salesman
left join customer on salesman.id = customer.salesman_id;


select city, count(*)
from salesman
group by city;


select city, count(*)
from salesman
group by city
having count(*) != 1;


select city
from salesman
where city like 'n%';

select city
from salesman
where city like 'n%';

select *
from salesman
where grade in (100);

alter table customer add age int;

alter table customer rename to customers;

alter table customers rename age to ages;


update
 customers set ages=16 where salesman_id = 3;