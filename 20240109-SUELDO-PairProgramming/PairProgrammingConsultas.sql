-- 1 - Listar todos los artistas por Discografica, ordenados por el nombre del artista

SELECT a.nombre AS NombreArtista,d.nombre AS NombreDiscografica
FROM artista a INNER JOIN discografica d ON d.id = a.discografica_id
ORDER BY a.nombre 

-- 2 - Que Discográfica NO tiene artistas?

SELECT d.nombre AS NombreDiscografica
FROM artista a RIGHT JOIN discografica d ON d.id = a.discografica_id
GROUP BY d.nombre
HAVING COUNT(a.id) = 0

-- 3 - Listar el numero de canciones por artista en orden descendiente

SELECT COUNT(c.id) AS CantidadCanciones, a.nombre AS NombreArtista
FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id
GROUP BY a.nombre
ORDER BY CantidadCanciones DESC

-- 4 - Que artista grabó el mayor numero de canciones?

SELECT TOP 1 COUNT(c.id) AS CantidadCanciones, a.nombre AS NombreArtista
FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id
GROUP BY a.nombre
ORDER BY CantidadCanciones DESC

-- 5 - Por cada artista y cada album, cuantas canciones tienen menos de 5 minutos de duracion?

SELECT COUNT(c.id) AS CantidadCanciones, a.nombre AS NombreArtista, al.nombre AS NombreAlbum
FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id
WHERE c.duracion < 5.0
GROUP BY a.nombre,al.nombre
ORDER BY CantidadCanciones DESC

-- 6 - En relación con la consulta anterior, muestra también las canciones y su duración

SELECT DISTINCT a.nombre AS NombreArtista, al.nombre AS NombreAlbum, c.nombre AS NombreCancion, c.duracion AS Duracion
FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id
GROUP BY a.nombre,al.nombre,c.nombre,c.duracion
HAVING c.duracion < 5.0

-- 7 - Qué artistas grabaron canciones mas largas que 5 minutos, y cuántas canciones fueron?

SELECT COUNT(c.id) AS CantidadCanciones, a.nombre AS NombreArtista
FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id
WHERE c.duracion > 5.0
GROUP BY a.nombre
ORDER BY CantidadCanciones DESC

-- 8 - En que año se grabaron la mayoría de las canciones?

SELECT TOP 1 COUNT(c.id) AS CantidadCanciones, al.anio AS AnioGrabacion
FROM album al INNER JOIN canciones c ON c.album_id = al.id
GROUP BY al.anio
ORDER BY CantidadCanciones DESC

-- 9 - Mostrar el ranking de los 5 artistas, album, canción y año con las canciones más largas

SELECT TOP 5 a.nombre AS NombreArtista, al.nombre AS NombreAlbum, c.nombre AS NombreCancion, c.duracion AS Duracion, al.anio AS Anio
FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id
GROUP BY a.nombre,al.nombre,c.nombre,c.duracion,al.anio
ORDER BY Duracion DESC

-- 10 - Duración total de todas las canciones grabadas por cada artista en orden descendente

SELECT ROUND(SUM(c.duracion),2) AS DuracionTotalArtista,a.nombre AS NombreArtista
FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id
GROUP BY a.nombre
ORDER BY DuracionTotalArtista DESC

-- 11 - Que artistas y album no tienen canciones de menos de 5 minutos?

SELECT a.nombre AS NombreArtista, al.nombre AS NombreAlbum
FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id
WHERE c.duracion > 5.0 AND a.id NOT IN (SELECT a.id FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id WHERE c.duracion < 5.0)
GROUP BY a.nombre, al.nombre

-- 12 - Mostrar el top 3 de artistas con el promedio de duración de las canciones, en orden descendente con la canción mas larga primero

-- Vista top3promedio
/*SELECT TOP 3 a.id AS ArtistaID, a.nombre AS NombreArtista, AVG(c.duracion) AS PromedioDuracionCancion, MAX(c.duracion) AS DuracionCancionMasLarga
FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id 
GROUP BY a.id, a.nombre
ORDER BY PromedioDuracionCancion DESC, DuracionCancionMasLarga DESC;*/

-- Uso de la vista y union con el nombre de la cancion
/*SELECT tt.*,c.nombre AS CancionMasLarga
FROM top3promedio tt INNER JOIN canciones c ON c.duracion = tt.DuracionCancionMasLarga
ORDER BY tt.PromedioDuracionCancion DESC*/

-- Hecho con subconsultas
SELECT TOP 3 a.id AS ArtistaID, a.nombre AS NombreArtista, AVG(c.duracion) AS PromedioDuracionCancion, MAX(c.duracion) AS DuracionCancionMasLarga, (SELECT TOP 1 can.nombre FROM canciones can INNER JOIN album alb ON can.album_id = alb.id WHERE alb.artista_id = a.id ORDER BY can.duracion DESC) AS NombreCancionMasLarga
FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id
GROUP BY a.id, a.nombre
ORDER BY PromedioDuracionCancion DESC, DuracionCancionMasLarga DESC;

-- 13 - Qué artistas no lanzaron un album durante la decada de 1980 y 1990?

SELECT DISTINCT a.nombre AS NombreArtista
FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id
WHERE a.id NOT IN (SELECT a.id FROM artista a INNER JOIN album al ON a.id = al.artista_id INNER JOIN canciones c ON c.album_id = al.id  WHERE al.anio > 1980 AND al.anio < 1990)

-- 14 - Duración total del album Sgt. Pepper's de los Beatles (mostrar en minutos y segundos)

SELECT a.nombre AS NombreAlbum,ROUND(SUM(c.duracion) * 60,2) AS TotalDuracionSegundos,CONVERT(VARCHAR, DATEADD(SECOND, SUM(c.duracion) * 60, 0), 108) AS TotalDuracionFormatoMinutosSegundos
FROM canciones c INNER JOIN album a ON c.album_id = a.id
WHERE a.nombre LIKE 'Sgt%'
GROUP BY a.nombre;