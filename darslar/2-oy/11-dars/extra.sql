-- Markets jadvali
CREATE TABLE markets(
    id SERIAL PRIMARY KEY,
    name varchar(50)
);

INSERT INTO markets(name) VALUES
    ('Makro'),
    ('Korzinka'),
    ('Inbazar');

-- Branches jadvali
CREATE TABLE branches(
    id SERIAL PRIMARY KEY,
    name varchar(50),
    address varchar(100),
    market_id INT,  -- market_id foreign key uchun
    FOREIGN KEY (market_id) REFERENCES markets(id)  -- foreign key to'g'ri belgilanmoqda
);

INSERT INTO branches(name, address, market_id) VALUES
    ('Makro', 'Chorsu', 1),
    ('Makro', 'Chilonzor', 1),
    ('Korzinka', 'Hadra', 2),
    ('Korzinka', 'Yashnabod', 2),
    ('Inbazar', 'Yunusobod', 3),
    ('Inbazar', 'Sergili', 3);

-- Products jadvali
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    title varchar(50),
    price int,
    branch_id INT,  -- branch_id foreign key uchun
    FOREIGN KEY (branch_id) REFERENCES branches(id)  -- foreign key to'g'ri belgilanmoqda
);

INSERT INTO products (title, price, branch_id) VALUES
    ('Product A1', 100, 1),
    ('Product A2', 120, 1),
    ('Product A3', 130, 1),
    ('Product A4', 140, 1),
    ('Product A5', 150, 1),

    ('Product B1', 200, 2),
    ('Product B2', 220, 2),
    ('Product B3', 230, 2),
    ('Product B4', 240, 2),
    ('Product B5', 250, 2),

    ('Product C1', 300, 3),
    ('Product C2', 320, 3),
    ('Product C3', 330, 3),
    ('Product C4', 340, 3),
    ('Product C5', 350, 3);

-- Workers jadvali
CREATE TABLE workers(
    id SERIAL PRIMARY KEY,
    name varchar(50),
    phone varchar(50),
    branch_id INT,  -- branch_id foreign key uchun
    FOREIGN KEY (branch_id) REFERENCES branches(id)  -- foreign key to'g'ri belgilanmoqda
);

INSERT INTO workers (name, phone, branch_id) VALUES
    ('John Doe', '1234567890', 1),
    ('Jane Smith', '2345678901', 1),
    ('Alice Johnson', '3456789012', 1),
    ('Bob Williams', '4567890123', 1),
    ('Charlie Brown', '5678901234', 1),

    ('David Lee', '6789012345', 2),
    ('Eve Kim', '7890123456', 2),
    ('Frank Harris', '8901234567', 2),
    ('Grace Clark', '9012345678', 2),
    ('Hank Lewis', '0123456789', 2),

    ('Isaac White', '1123456789', 3),
    ('Jessica Moore', '2234567890', 3),
    ('Kevin Thompson', '3345678901', 3),
    ('Laura Scott', '4456789012', 3),
    ('Mark Davis', '5567890123', 3);
