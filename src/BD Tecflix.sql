create database tecflix;
use tecflix;

create table Multimedia (
id_video varchar(12) primary key,
link varchar(300),
titulo varchar(32) not null,
emisor varchar(32) not null
);

create table ListaReproduccion (
nombre varchar(32) primary key
);

create table ColaReproduccion ( 
nombre varchar(32) primary key
);

create table Lista_Video(
id_video varchar(12),
nombre varchar(32),
posicion_video int auto_increment,
foreign key (id_video) references Multimedia(id_video)
on delete cascade
on update cascade,
foreign key (nombre) references ListaReproduccion(nombre)
on delete cascade
on update cascade
);

create table Cola_Video(
id_video varchar(12),
nombre varchar(32),
foreign key (id_video) references Multimedia(id_video)
on delete cascade
on update cascade,
foreign key (nombre) references ColaReproduccion(nombre)
on delete cascade
on update cascade
);

insert into Multimedia values('eIjbSH3Imb8','https://www.youtube.com/watch?v=eIjbSH3Imb8','Prueba','Pablo');
insert into Multimedia values('jqBuXibX9CM','https://www.youtube.com/watch?v=jqBuXibX9CM','Prueba','Randall');

select * from Multimedia;


insert into ListaReproduccion values ('prueba1');
insert into ListaReproduccion values ('prueba2');

insert into Lista_Video values ('jqBuXibX9CM', 1);
insert into Lista_Video values ('eIjbSH3Imb8', 2);

select * from Lista_Video;

Select LV.id_video, titulo from Lista_Video as LV JOIN ListaReproduccion as LR on LV.id_lista = LR.id_lista JOIN Multimedia as M on M.id_video = LV.id_video WHERE nombre = 'prueba2';

