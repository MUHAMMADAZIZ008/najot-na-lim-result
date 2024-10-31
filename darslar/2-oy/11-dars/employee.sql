CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    name varchar(50),
    role varchar(50) not null,
    salary real,
    birthday date
);


INSERT INTO employees (name, role, salary, birthday) VALUES
    ('rahimov sardor', 'direktor', 5000, '1985-09-21'),
    ('kalimov mansur', 'buxgalter', 2000, '1994-02-16'),
    ('salimov botir', 'dizayner', 22000, '1996-06-13'),
    ('davron sobir', 'marketolog', 21000, '1994-06-04'),
    ('olimov shokir', 'dasturchi', 24000, '1988-02-13'),
    ('vohid zohid', 'dasturchi', 24000, '1992-03-12');

select * from employees;
alter TABLE employees add column active boolean;

alter TABLE employees drop column active;

alter TABLE employees alter column name type text;
alter TABLE employees alter name set default 'noname';

-- distinct// uniklarni chiqrish
-- avg// qiymat lar o'rtachasi
-- offset//limit bilan ishlaydi


