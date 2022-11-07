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

#Usar contraseña de MySQL
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;