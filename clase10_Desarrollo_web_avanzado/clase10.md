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