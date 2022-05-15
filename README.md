# FrontendApp MarineWell 
##  Hackaton LaunchX
- Team Leons Monarcas
    - [@LuianOrtiz](https://github.com/LuianOrtiz)
    - [@FernandoArceo](https://github.com/FerchoArceo)
    - [@KarlaNavarrete](https://github.com/KarlaINZ25)
    - [@AlejandroTrinidad](https://github.com/AlejandroTrinidad97)
    - [@SalmaGuitierrez](https://github.com/Pagutri)
<br>

## [Video del funcionamiento de la aplicación web](https://www.youtube.com/watch?v=VWlEbRhm9rY&t=1s&ab_channel=%C3%81ngelOrtiz)

[Ideas para el tiktok](IdeasTiktok.md)

### Tecnologías utilizadas
    - VueJS 2
    - Bootstrap
    - Axios
    - VueRouter

### Documentación
- Diagrama de clases 
    <img src="documentacion\diagramaUML_MarineWell.png">
    <br>

- Diagrama Habitad
    <img src="documentacion\tbl_Habitad.png">
    <br>

- Diagrama de estados de riesgo
    <img src="documentacion\tbl_EstadoRiesgo.png">
    <br>

- HomeView.vue
Se encarga de cargar la estructura de la página principal utilizando los componentes: 
    * ImagesSlideshow.vue
    * PurposeObjective.vue

- ImagesSlideshow.vue
    Se encarga de desplegar un banner.
    <img src="documentacion\BannerHome.png">
    <br>

- PurposeObjective.vue
Se encarga de presentar las tarjetas de "Objetivo" y "Propósito" recibiendo los datos a mostrar desde HomeView.vue como parámetros.
    <img src="documentacion\propositosHome.png">
    <br>


- PageHeader.vue
Se encarga de crear un header para la página web. Recibe el nombre de la misma a mostrar por parámetros.
    <img src="documentacion\Nabvar.png">
    <br>

- PageFooter.vue
Se encarga de crear un footer para la página web.
    <img src="documentacion\Footer.png">
    <br>
- SpeciesView.vue
Se encarga de desplegar las targetas con la informacion de las especies desde la base de datos. 
    <img src="documentacion\CardAnimalSpecies.png">
    <br>

    [Maquetado del home](./documentacion/HomeView.png)
    
    <br>

    [Maquetado de las especies en extención](./documentacion/SpeciesView.png)

### Project setup
- Clonar el repositorio 
        `git clone https://github.com/LuianOrtiz/HackatonLaunchX_MarineFrontSpecies/tree/main`

- Instalar las dependencias 
    ```
    npm install
    ```
    
- Ve al repositorio del backend [click aqui](https://github.com/LuianOrtiz/HackatonLaunchX_MarineBackSpecies) y sigue las instrucciones del README

- Otros comandos que pueden servir

    - Compiles and hot-reloads for development
        ```
        npm run serve
        ```

    - Compiles and minifies for production
    ```
    npm run build
    ```

    - Lints and fixes files
    ```
    npm run lint
    ```

    - Customize configuration
    See [Configuration Reference](https://cli.vuejs.org/config/).
