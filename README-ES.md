# CKAN Docs: Despliegues y mucho más
¡Bienvenido a CKAN Docs! Este repositorio sirve como una guía completa para el despliegue de CKAN en varios entornos, incluyendo a través del código fuente, Docker, Kubernetes, documentación de la API, información adicional y consejos en un sitio web Docusaurus. [^1]

## Contenido
- [CKAN Docs: Despliegues y mucho más](#ckan-docs-despliegues-y-mucho-más)
  - [Contenido](#contenido)
  - [Introducción](#introducción)
  - [Métodos de despliegue](#métodos-de-despliegue)
  - [Documentación de la API](#documentación-de-la-api)
  - [Despliegue de la documentación](#despliegue-de-la-documentación)
  - [Inicie su sitio](#inicie-su-sitio)
  - [Contribución](#contribución)
  - [Licencia](#licencia)

## Introducción
CKAN [^2] es un potente sistema de gestión de datos de código abierto que facilita la publicación, el intercambio y el uso de datos. Este repositorio pretende proporcionar documentación detallada para facilitar el despliegue de CKAN en diferentes entornos.

## Métodos de despliegue
Esta sección cubre varios métodos para desplegar CKAN:

- Código fuente**: Despliegue de CKAN desde código fuente (RHEL, Debian, CentOS, SLES) mediante [Ansible](https://www.ansible.com/).
- Docker**: Despliegue de CKAN utilizando contenedores Docker a través de Docker Compose.
- Kubernetes**: Despliegue de CKAN en clusters Kubernetes.

## Documentación de la API
Aquí puedes encontrar la documentación completa de la API CKAN, incluyendo endpoints, parámetros y ejemplos de uso con Swagger [^3].

## Despliegue de la documentación
Esta documentación se despliega utilizando GitHub Pages. Para desplegar la documentación, ejecuta los siguientes comandos:

```bash

# Para previsualizar tus cambios a medida que editas los archivos, puedes ejecutar un servidor de desarrollo local que servirá a tu sitio web y reflejará los últimos cambios.
npm install
npm run start


#Para construir el sitio web:
npm run build


# Es importante probar su construcción localmente antes de desplegarlo para la producción. Docusaurus proporciona un comando docusaurus serve para ello:
npm run serve
```

## Inicie su sitio

Ejecute el servidor de desarrollo:

```bash
cd mi-sitio web
npm run start
```

> [!TIP]
>El comando `cd` cambia el directorio con el que estás trabajando. Con el fin de trabajar con su sitio Docusaurus recién creado, tendrá que navegar por el terminal allí.
>
>El comando `npm run start` construye tu sitio web localmente y lo sirve a través de un servidor de desarrollo, listo para que lo veas en http://localhost:3000/. El comando `npm run start -- --locale es` para probar la configuración regional española.
>
>Abre `docs/intro.md` y edita algunas líneas: el sitio **se recarga automáticamente** y muestra tus cambios.

## Contribución
Las contribuciones a este repositorio de documentación son bienvenidas. Si tiene sugerencias, mejoras o desea informar de algún problema, no dude en enviar una solicitud de extracción o abrir una incidencia.

## Licencia
Esta documentación está bajo licencia [GNU Affero General Public License (AGPL)](https://www.gnu.org/licenses/agpl-3.0.html).

[^1]: [Docusaurus](https://docusaurus.io/)
[^2]: [CKAN: An open source DMS](https://ckan.org/)
[^3]: [Swagger](https://swagger.io/).
