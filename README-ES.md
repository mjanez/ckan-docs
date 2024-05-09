# Documentación de CKAN: Implementaciones y más!
¡Bienvenido a las implementaciones de CKAN! Este repositorio sirve como una guía completa para implementar CKAN en varios entornos, incluyendo a través del código fuente, Docker, Kubernetes, documentación de la API, información adicional y consejos en un sitio web de Docusaurus [^1].

## Contenido
- [Documentación de CKAN: Implementaciones y más!](#documentación-de-ckan-implementaciones-y-más)
  - [Contenido](#contenido)
  - [Introducción](#introducción)
  - [Métodos de implementación](#métodos-de-implementación)
  - [Información de la API](#información-de-la-api)
  - [Implementación de la documentación](#implementación-de-la-documentación)
  - [Inicie su sitio](#inicie-su-sitio)
  - [Traducciones](#traducciones)
  - [Contribuir](#contribuir)
  - [Licencia](#licencia)

## Introducción
CKAN [^2] es un potente sistema de gestión de datos de código abierto que facilita la publicación, el intercambio y el uso de datos. Este repositorio tiene como objetivo proporcionar documentación detallada para facilitar las implementaciones de CKAN en diferentes entornos.

## Métodos de implementación
Esta sección cubre varios métodos para implementar CKAN:

- **Código fuente**: Implementación de CKAN a partir del código fuente (RHEL, Debian, CentOS, SLES) utilizando [Ansible](https://www.ansible.com/).
- **Docker**: Implementación de CKAN utilizando contenedores Docker a través de Docker Compose.
- **Kubernetes**: Implementación de CKAN en clústeres de Kubernetes.

## Información de la API
Aquí puede encontrar la documentación completa de la API de CKAN, incluyendo los puntos finales, los parámetros y ejemplos de uso con Swagger [^3].

## Implementación de la documentación
Esta documentación se implementa utilizando GitHub Pages. Para implementar la documentación localmente ejecute los siguientes comandos:

```bash
# Para previsualizar sus cambios mientras edita los archivos, puede ejecutar un servidor de desarrollo local que servirá su sitio web y reflejará los últimos cambios.
npm install
npm run start


#Para construir el sitio web:
npm run build


# Es importante probar su construcción localmente antes de implementarla para producción. Docusaurus proporciona un comando docusaurus serve para eso:
npm run serve
```

## Inicie su sitio

Ejecute el servidor de desarrollo:

```bash
cd my-website
npm run start
```

> [!CONSEJO]
>El comando `cd` cambia el directorio con el que está trabajando. Para trabajar con su nuevo sitio de Docusaurus, deberá navegar el terminal allí.
>
>El comando `npm run start` construye su sitio web localmente y lo sirve a través de un servidor de desarrollo, listo para que lo vea en http://localhost:3000/. `npm run start -- --locale es` para probar la localización en español.
>
>Abra [`docs/intro.md`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fsrv%2Fdev-disk-by-uuid-5c15638b-b21a-4433-a2e1-ae29c41c736c%2Fcode-server%2Fworkspace%2Fdev_ckan%2Fckan-docs%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A0%2C%22character%22%3A0%7D%5D "README.md") y edite algunas líneas: el sitio **se recarga automáticamente** y muestra sus cambios.

## Traducciones
1. Configure su sitio y agregue el elemento de la barra de navegación de tipo `localeDropdown` para que los usuarios puedan seleccionar la localización que desean :
```js
const config: Config = {
  title: 'Documentación de CKAN',
  tagline: 'Implementaciones y más!',
  favicon: 'img/favicon.ico',

  ...

    // Incluso si no utiliza la internacionalización, puede usar este campo para establecer
  // metadatos útiles como el idioma html. Por ejemplo, si su sitio es chino, puede
  // querer reemplazar "en" por "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'fa'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // Puede omitir una localización (por ejemplo, fr) si no necesita sobrescribir los valores predeterminados
      fa: {
        direction: 'rtl',
      },
    },
  },

  ...

  themeConfig: {
    navbar: {
      items: [
        {
          type: 'localeDropdown',
          position: 'left',
        },
      ],
    },
  },
};
```

2. Ejecute el comando `write-translations`:

   ```bash
   npm run write-translations -- --locale fr
   ```

  Extraerá e inicializará los archivos de traducción JSON que necesita traducir. El archivo code.json en la raíz incluye todas las llamadas a la API de traducción extraídas del código fuente, que podrían haber sido escritas por usted o proporcionadas por los temas, algunas de las cuales ya pueden estar traducidas por defecto.

3. Copie sus archivos Markdown de los documentos de [`docs/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fsrv%2Fdev-disk-by-uuid-5c15638b-b21a-4433-a2e1-ae29c41c736c%2Fcode-server%2Fworkspace%2Fdev_ckan%2Fckan-docs%2Fdocs%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/srv/dev-disk-by-uuid-5c15638b-b21a-4433-a2e1-ae29c41c736c/code-server/workspace/dev_ckan/ckan-docs/docs/") a `i18n/fr/docusaurus-plugin-content-docs/current`, y tradúzcalos:

  ```bash
  mkdir -p i18n/fr/docusaurus-plugin-content-docs/current
  cp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current
  ```

3. Traduzca los archivos `mdx`.

> [!CONSEJO]
> Más información sobre la traducción y tutoriales de i18n en la documentación de Docusaurus: [Docusaurus. Internacionalización](https://docusaurus.io/docs/i18n/tutorial)

## Contribuir
¡Las contribuciones a este repositorio de documentación son bienvenidas! Si tiene sugerencias, mejoras o le gustaría informar de problemas, no dude en enviar una solicitud de extracción o abrir un problema.

## Licencia
Esta documentación está licenciada bajo la [Licencia Pública General Affero de GNU (AGPL)](https://www.gnu.org/licenses/agpl-3.0.html).

[^1]: [Docusaurus](https://docusaurus.io/)
[^2]: [CKAN: Un DMS de código abierto](https://ckan.org/)
[^3]: [Swagger](https://swagger.io/).