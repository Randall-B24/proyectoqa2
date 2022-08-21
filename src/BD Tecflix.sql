create database tecflix;
use tecflix;

create table Multimedia (
id_video int auto_increment primary key,
link varchar(300),
titulo varchar(32) not null,
emisor varchar(32) not null,
duracion varchar(32) not null

);

create table ListaReproduccion (
id_lista int primary key auto_increment,
nombre varchar(32)
);

create table ColaReproduccion ( 
id_cola int primary key auto_increment,
nombre varchar(32)
);

create table Lista_Video(
id_video int,
id_lista int,
foreign key (id_video) references Multimedia(id_video)
on delete cascade
on update cascade,
foreign key (id_lista) references ListaReproduccion(id_lista)
on delete cascade
on update cascade
);

create table Cola_Video(
id_video int,
id_cola int,
foreign key (id_video) references Multimedia(id_video)
on delete cascade
on update cascade,
foreign key (id_cola) references ColaReproduccion(id_cola)
on delete cascade
on update cascade
);

insert into values;


