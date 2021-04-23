DROP DATABASE paginaAhJijo;
CREATE DATABASE paginaAhJijo;
Use paginaAhJijo;


CREATE TABLE Usuario(
	
	Usuario_id VARCHAR(30) NOT NULL,
	Contrasena VARCHAR(30) NOT NULL,

	PRIMARY KEY(Usuario_id)

);


INSERT INTO Usuario(Usuario_id, Contrasena) VALUES("Admin", "123");

CREATE TABLE Tipo(

	Tipo_id INT NOT NULL auto_increment,
	Descr VARCHAR(15) NOT NULL,
	Foto VARCHAR(50) NOT NULL,

	PRIMARY KEY(Tipo_id)

);


INSERT INTO Tipo (Descr, Foto) VALUES('Salsa', 'salsa.jpg');
INSERT INTO Tipo (Descr, Foto) VALUES('Frutos', 'frutos.jpg');
INSERT INTO Tipo (Descr, Foto) VALUES('Grano', 'grano+.jpg');
INSERT INTO Tipo (Descr, Foto) VALUES('Café', 'cafe.jpg');
INSERT INTO Tipo (Descr, Foto) VALUES('Chile', 'chile.jpg');
INSERT INTO Tipo (Descr, Foto) VALUES('Dulces', 'dulces.jpg');
INSERT INTO Tipo (Descr, Foto) VALUES('Semilla', 'semilla.jpg');
INSERT INTO Tipo (Descr, Foto) VALUES('Empaquetados', 'empaquetados.jpg');


CREATE TABLE Receta(

	Receta_id INT NOT NULL auto_increment,
	Titulo VARCHAR(50) NOT NULL,
	Descr VARCHAR(80) NOT NULL,
	Ingredientes VARCHAR(1000) NOT NULL,
	Preparacion VARCHAR(1000),
	TiempoPreparacion INT NOT NULL,
	Likes INT NOT NULL,

	Foto VARCHAR(50) NOT NULL,
	Tipo_id INT NOT NULL REFERENCES Tipo(Tipo_id),

	Creado DATETIME NOT NULL,

	PRIMARY KEY(Receta_id)

);


CREATE TABLE Producto(

	Producto_id INT NOT NULL auto_increment,
	Nombre VARCHAR(40) NOT NULL,
	Descr VARCHAR(40) NOT NULL,
	Codigo VARCHAR(10) NOT NULL,
	Precio DECIMAL(8,2) NOT NULL,

	Foto VARCHAR(50) NOT NULL,

	Creado DATETIME NOT NULL,

	PRIMARY KEY(Producto_id)

);

INSERT INTO Producto(Nombre, Descr, Codigo, Precio, Foto, Creado) VALUES("Salsa Picosita 150 gr", "Salsa Picosita AhJijo de 150 Gramos", "COD", 35.00, "Inventario_SalsaPicosita150gr.jpeg", '2021-03-26 02:43:19');
INSERT INTO Producto(Nombre, Descr, Codigo, Precio, Foto, Creado) VALUES("Salsa Picosita 250 gr", "Salsa Picosita AhJijo de 250 Gramos", "COD", 60.00, "Inventario_SalsaPicosita250gr.jpeg", '2021-03-26 02:47:05');
INSERT INTO Producto(Nombre, Descr, Codigo, Precio, Foto, Creado) VALUES("Salsa Picosota 150 gr", "Salsa Picosa AhJijo de 150 Gramos", "COD", 35.00, "Inventario_SalsaPicosota150gr.jpeg", '2021-03-26 02:48:05');
INSERT INTO Producto(Nombre, Descr, Codigo, Precio, Foto, Creado) VALUES("Salsa Picosota 250 gr", "Salsa Picosa AhJijo de 250 Gramos", "COD", 60.00, "Inventario_SalsaPicosota250hr.jpeg", '2021-03-26 02:50:05');
INSERT INTO Producto(Nombre, Descr, Codigo, Precio, Foto, Creado) VALUES("Chipotles en conserva", "Deliciosos Chiles chipotles en conserva", "COD", 55.00, "Inventario_ChipotlesenConserva.jpeg", '2021-03-26 02:54:05');


CREATE TABLE Producto_Tipo(
	
	Producto_id INT NOT NULL REFERENCES Producto(Producto_id),
	Tipo_id INT NOT NULL REFERENCES Tipo(Tipo_id),
	
	PRIMARY KEY(Producto_id, Tipo_id)
);

INSERT INTO Producto_Tipo VALUES(1, 1);
INSERT INTO Producto_Tipo VALUES(2, 1);
INSERT INTO Producto_Tipo VALUES(3, 1);
INSERT INTO Producto_Tipo VALUES(4, 1);
INSERT INTO Producto_Tipo VALUES(5, 7);

CREATE TABLE Receta_Producto(

	Receta_id INT NOT NULL REFERENCES Receta(Receta_id),
	Producto_id INT NOT NULL REFERENCES Producto(Producto_id),

	PRIMARY KEY(Receta_id, Producto_id)

);


CREATE TABLE Info(
	
	Info_id INT NOT NULL auto_increment,	
	TituloPagina VARCHAR(50) NOT NULL,
	Direccion VARCHAR(200) NOT NULL,
	LinkUbicacion VARCHAR(200) NOT NULL,
	Telefono VARCHAR(15) NOT NULL,
	Correo VARCHAR(50) NOT NULL,

	PRIMARY	KEY(Info_id)

);

INSERT INTO Info VALUES(1, "Ésta es la buena | AhJijo!", 
"Blvd. las Reinas 1007 - 1, Las Reynas, 36720 Salamanca, Gto.", 
"https://goo.gl/maps/Y6ycbBMr7SA8Lm4D7",
"464 126 98 55",
 "ahjijo@outlook.com");







