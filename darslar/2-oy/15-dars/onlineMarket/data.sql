create database onlineMarket;
\c onlineMarket

create table users (
    id serial primary key,
    username varchar(100) unique,
    password varchar(100),
    firstname varchar(100),
    lastname varchar(100),
    email varchar(100) unique,
    role varchar(100) default "user"
)