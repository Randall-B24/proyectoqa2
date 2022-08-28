create database tecflix;
use tecflix;

create table Multimedia (
id_video varchar(12) primary key,
link varchar(300),
titulo varchar(200) not null,
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
nombre_lista varchar(32),
foreign key (id_video) references Multimedia(id_video)
on delete cascade
on update cascade,
foreign key (nombre_lista) references ListaReproduccion(nombre)
on delete cascade
on update cascade
);

create table Cola_Video(
id_video varchar(12),
nombre_cola varchar(32),
foreign key (id_video) references Multimedia(id_video)
on delete cascade
on update cascade,
foreign key (nombre_cola) references ColaReproduccion(nombre)
on delete cascade
on update cascade
);

insert into Multimedia values('eIjbSH3Imb8','https://www.youtube.com/watch?v=eIjbSH3Imb8','Prueba','Pablo');
insert into Multimedia values('jqBuXibX9CM','https://www.youtube.com/watch?v=jqBuXibX9CM','Prueba','Randall');

select * from Multimedia;


insert into ListaReproduccion values ('prueba1');
insert into ListaReproduccion values ('prueba2');

insert into Lista_Video values ('jqBuXibX9CM', 'prueba1');
insert into Lista_Video values ('eIjbSH3Imb8', 'prueba2');

select * from Lista_Video;

Select LV.id_video, titulo from Lista_Video as LV JOIN ListaReproduccion as LR on LV.nombre_lista = LR.nombre JOIN Multimedia as M on M.id_video = LV.id_video WHERE nombre = 'prueba4';
insert into ListaReproduccion values ('prueba3');

insert into Multimedia values (?, ?, ?, ?);
insert into Lista_Video values ('ID_VIDEO', 'NOMBRE_PLAYLIST');

alter table Multimedia 
modify link varchar(100);