create database crudcontactos;

use crudcontactos;

create table contactos(
    id int(6) unsigned auto_increment primary key,
    nombre varchar(30) not null,
    apellido varchar(30) not null,
    email varchar(50) not null,
    nombre_usuario varchar(40) not null,
    clave varchar(40) not null
);

show tables;

describe contactos;