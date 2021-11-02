# Petgram

Aplicación web que simula Instagram, pero con operaciones básicas, que son crear usuarios y darle me gusta a post predefinidos.

# Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

- NodeJS versión 15.x
- NPM versión 7.x

### Instalación (desarrollo) 🔧


Antes de ejecutar debes crear un archivo _.env_ y declarar 3 variables de entorno, que son:
- MONGODB_URI, que deberá tener la API de conexión a mongoDB
- WORD_SECRET, la palabra secreta con la que se firmara el token
- KEYAPI, la key para consumir la API de pexels.com o la que usted guste

Tal vez suene muy obvio pero primero clone el repositorio

```
    git clone https://github.com/EleomarPL/petgram
```

Instale las dependencias. Las depedencias ya se encuentran implicitas en el Package del proyecto, solo basta ejecutar la siguiente instrucción:

```
    npm i
```

Ejecute el frontend mediante el script:

```
    npm run start-front
```

Ejecute el backend mediante el script:

```
    npm run start-back
```

## Construido con 🛠️

- ReactJS
- Bootstrap 5
- NodeJS
- ExpressJS

Principalmente se construyeron con las tecnologías anteriores, aunque, cabe mencionar el uso de múltiples dependencias mas.

## Contribuyendo 🖇️

> Las Pull Request son bienvenidas. Para cambios importantes, primero abra un problema para discutir lo que le gustaría cambiar.
> Asegúrese de actualizar las pruebas según corresponda.

## Expresiones de Gratitud 🎁

Si el proyecto te gusto, o te sirvio para aprender nuevas cosas, puedes agradecernos de la siguiente forma:

- Coméntale a otros sobre este proyecto 📢
- Regala una estrella a este proyecto ⭐
- Da las gracias públicamente 🤓.
