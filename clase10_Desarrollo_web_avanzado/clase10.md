## Webpack y herramientas de construccion

Antes de publicar una aplicacion web (Frontend), esta deberia pasar por una etapa de construccion,
para optimizar su funcionamiento en el servidor y los clientes.
Esta etapa se conoce como "Build" y para ello se utiliza Webpack.
Webpack junta todos los archivos js, css, html y genera uno solo por cada tipo (1 solo html, 1 solo css y 1 solo JS),
Ademas, webpack optimiza estos archivos mediante minificacion para hacerlos mas livianos y que se transporten rapidamente
obteniendo una mejor performance.

## Babel y transpilacion

Babel es un transpilador que me convierte el codigo JS moderno en JS que el navegador pueda entender. Esto era muy necesario hasta hace unos pocos años ya que JS avanzaba mas rapido que los navegadores web. Hoy en dia estan bastante actualizados los navegadores web y no es tan necesario. Aun asi, puedo incorporar babel en mi etapa de construccion si lo quisiera.

## Pruebas unitarias

Jest

## GIT

Git es un sistema de control de versiones

### Commit

Es el concepto mas importante en git, un commit es una captura (snapshot) de los archivos en un momento determinado

### Repositorio

Es un conjunto de archivos de los cuales se lleva un control de versiones

### Ramas

Son una forma de organizar los commit

## Flujo de trabajo con git:

1) Voy a crear un alojamiento para el repositorio en la nube (Github)
2) Creo el repositorio local con el comando `$ git init`
3) Commiteo los archivos que deseo controlar su version
4) Vincular el repositorio local con el remoto (alojamiento en la nube, github)
5) Pushear los cambios