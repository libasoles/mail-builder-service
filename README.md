SHOWCASE de microservicio en node, como referencia para entrevistas.

# Qué es

Es un servicio para crear maquetado de emails válidos, usando la librería **mjml** y componentes de **React**, que se renderizan server side.

El proyecto corre en node con el framework **koa**.

Referencia mjml:
https://mjml.io/documentation

## Estructura básica de un proyecto

En general, el proyecto define rutas, controladores y vistas. De no hacerlo se toman las default.

- .env
- server.js
- config/index.js
- locales/es/[xxx].yml
- styles/[xxx].js
- routing/index.js

##### .env
Se usa para datos sensibles, como la apiKey de Google maps.

##### server.js
Es el servidor en sí.

##### app.js
Crea una instancia de koa. Y también carga en memoria la config, los estilos y la internacinoalización del proyecto. Al hacerlo mergea configs default con configs propias del proyecto.

##### config/index.js
Se mergea con la config básica.

##### locales/es.yml
Archivos de idioma que sobreescriben las especificaciones básicas.

##### styles/basic.js
NO ES UNA HOJA DE ESTILOS. Son propiedades o atributos html, escritas en formato kebabCase. Son colores del proyectos, etc.

##### styles/[xxx].js
Cada proyecto (ej: vouchers) puede sobreescribir los atributos por default. Los atributos pueden consultarse en la documentación de _mjml_.

##### routing/index.js
Incluye sola las rutas a aquello que se quiere usar en el proyecto (ej: _/vouchers_). Se puede incluir las rutas del _core_, o las que uno defina para pisar las del core.

## Sobreescribiendo componentes de React

Para poder pisar componentes, antes que el árbol de React hay que pisar la ruta y el controlador que rendereará la vista. Normalmente uno haría esto crando una carpeta _Views_ que replique la estructura del _core_.

## Jerarquía válida de componentes

`mj-wrapper > mj-section > mj-column > mj-table`

`mj-wrapper > mj-section > mj-group > mj-column > mj-table`

No es posible poner una columna dentro de otra, como tampoco es posible incluir un grupo dentro de una columna.

### Tablas
Las tablas son un elemento especial que solo acepta html como contenido. De usarse componentes de _mjml_ dentro, **no se interpretarán**.

## i18next
Todo nuevo _namespace_ tiene que ser pasado al inicializador de **i18next.js**. Esto se logra tocando el archivo de configuracion de la app, con la key _i18nNamespaces_.

## Troubleshooting

#### i18next
Si se renderean los keynames de las traducciones en vez de los valores, es porque el json está mal formado. Seguramente hay una coma de mas, o comillas simple.