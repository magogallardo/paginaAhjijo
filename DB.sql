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

	PRIMARY KEY(Tipo_id)

);

INSERT INTO Tipo(Descr) VALUES("Salsa");
INSERT INTO Tipo(Descr) VALUES("Semilla");
INSERT INTO Tipo(Descr) VALUES("Grano");
INSERT INTO Tipo(Descr) VALUES("Frutos");
INSERT INTO Tipo(Descr) VALUES("Café");
INSERT INTO Tipo(Descr) VALUES("Dulces");
INSERT INTO Tipo(Descr) VALUES("Chile");
INSERT INTO Tipo(Descr) VALUES("Empaquetados");


CREATE TABLE Receta(

	Receta_id INT NOT NULL auto_increment,
	Titulo VARCHAR(50) NOT NULL,
	Descr VARCHAR(80) NOT NULL,
	Preparacion VARCHAR(1000),
	TiempoPreparacion INT NOT NULL,
	Likes INT NOT NULL,

	Foto VARCHAR(50) NOT NULL,
	Tipo_id INT NOT NULL REFERENCES Tipo(Tipo_id),

	Creado DATETIME NOT NULL,

	PRIMARY KEY(Receta_id)

);

INSERT INTO Receta(Titulo, Descr, Preparacion, TiempoPreparacion, Likes, Foto, Tipo_id, Creado)
VALUES(	"Alitas Ah Jijo",
 		"Ps unas alitas con la salsa esa jsja",
"Agarras las alitas
les pones la salsa ah jijo
Despues las sirves en un plato
Y te las comes",
		120,
		1,
		"MyPhotoAlitas.jpg",
		1,
		'2021-03-26 02:43:19'
		);

CREATE TABLE Producto(

	Producto_id INT NOT NULL auto_increment,
	Nombre VARCHAR(40) NOT NULL,
	Descr VARCHAR(40) NOT NULL,
	Codigo VARCHAR(10) NOT NULL,
	Precio DECIMAL(8,2) NOT NULL,

	Foto VARCHAR(50) NOT NULL,
	Tipo_id INT NOT NULL REFERENCES Tipo(Tipo_id),

	Creado DATETIME NOT NULL,

	PRIMARY KEY(Producto_id)

);

INSERT INTO Producto(Nombre, Descr, Codigo, Precio, Foto, Tipo_id, Creado) VALUES("Salsa Picosita 150 gr", "Salsa Picosita AhJijo de 150 Gramos", "COD", 35.00, "Inventario_SalsaPicosita150gr.jpeg", 1, '2021-03-26 02:43:19');
INSERT INTO Producto(Nombre, Descr, Codigo, Precio, Foto, Tipo_id, Creado) VALUES("Salsa Picosita 250 gr", "Salsa Picosita AhJijo de 250 Gramos", "COD", 60.00, "Inventario_SalsaPicosita250gr.jpeg", 1, '2021-03-26 02:47:05');
INSERT INTO Producto(Nombre, Descr, Codigo, Precio, Foto, Tipo_id, Creado) VALUES("Salsa Picosota 150 gr", "Salsa Picosa AhJijo de 150 Gramos", "COD", 35.00, "Inventario_SalsaPicosota150gr.jpeg", 1, '2021-03-26 02:48:05');
INSERT INTO Producto(Nombre, Descr, Codigo, Precio, Foto, Tipo_id, Creado) VALUES("Salsa Picosota 250 gr", "Salsa Picosa AhJijo de 250 Gramos", "COD", 60.00, "Inventario_SalsaPicosota250hr.jpeg", 1, '2021-03-26 02:50:05');
INSERT INTO Producto(Nombre, Descr, Codigo, Precio, Foto, Tipo_id, Creado) VALUES("Chipotles en conserva", "Deliciosos Chiles chipotles en conserva", "COD", 55.00, "Inventario_ChipotlesenConserva.jpeg", 7, '2021-03-26 02:54:05');


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







