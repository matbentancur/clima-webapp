# ria
Clima WebAPP Santiago Peraza y Matias Bentancur

     1 - Introducción.

Este documento tiene como finalidad, explicar los procedimientos necesarios para la implementación de Clima WebApp, como se utiliza y cuales son los servicios ofrecidos.


     2 - Requerimientos Previos.

Para poder implementar Clima WebApp, es necesario tener instaladas las siguientes herramientas:

    • GIT, sistema de versionado de código de software.
    • Node.js, entorno de ejecución de javascript para servidores web.
    • NPM, sistema de gestión de paquetes para Node.js.


         2.1 - Instalar GIT.

Se hace una descripción mínima de como instalar GIT.


             2.1.1 - Instalar GIT en GNU/Linux Ubuntu.

Para sistemas GNU/Linux Ubuntu, se puede ejecutar en la consola, el siguiente comando:

sudo apt-get install git


             2.1.2 - Instalar GIT en Windows.

Para sistemas Windows, se puede descargar el instalador desde el siguiente enlace:

https://git-scm.com/download/win

Se ejecuta el instalador y se siguen los pasos de instalación.


         2.2 - Instalar Node.js y NPM.

Se hace una descripción mínima de como instalar Node.js y NPM.


             2.2.1 - Instalar Node.js y NPM en GNU/Linux Ubuntu.

Para sistemas GNU/Linux Ubuntu, se puede ejecutar en la consola, el siguiente comando:

sudo apt-get install npm


             2.2.2 - Instalar Node.js y NPM en Windows.

Para sistemas Windows, se puede descargar el instalador desde el siguiente enlace:

https://nodejs.org/en/download/

Se ejecuta el instalador y se siguen los pasos de instalación.


     3 - Descargar el Código Fuente.

Se puede descargar el código fuente de Clima WebApp, desde su repositorio público en GitHub.

Se debe clonar el repositorio en su sistema con el siguiente comando en consola:

git clone https://github.com/matbentancur/ria.git

Se crear una directorio llamado “ria” con la aplicación completa.


     4 - Iniciar la Aplicación.

Para iniciar la aplicación, primero se deben descargar todos las dependencias con el gestor de paquetes “npm”.

Dentro del directorio principal de la aplicación, se ejecuta el siguiente comando en la consola:

npm install

Se instalaran todas las dependencias que se necesitan para iniciar la aplicación.

Al finalizar el proceso anterior, se debe iniciar la aplicación, para ello se ejecuta el siguiente comando en la consola:

npm start

Al finalizar la inicialización del servidor, se ejecutará el navegador web por defecto en su sistema.

En el caso que esto no suceda, para visualizar la aplicación se debe ingresar desde un navegador web a la siguiente dirección:

http://localhost:3000/


     5 - Utilización de la Aplicación.

Se describe como se puede utiliza la aplicación Clima WebApp y cuales son sus funcionalidades.


         5.1 - Clima de su Ubicación Actual.

Al iniciar la aplicación, la primer funcionalidad de Clima WebApp, será tomar sus coordenadas para poder brindar toda la información del clima local.  

Es posible que su navegador le consulte sobre permitir a Clima WebApp obtener su ubicación actual.

Si los permisos son otorgados, se cambiará la imagen de fondo de la aplicación y se completarán todas las tarjetas del clima disponibles.

La imagen del fondo de la aplicación, representará el estado actual del clima en su ubicación, pudiendo la misma variar, según si es un horario diurno o nocturno.


         5.2 - Clima desde la Entrada Ciudad.

Si bien Clima WebApp cargará todas las tarjetas del clima con los datos de su ubicación actual, es posible mediante un campo de entrada con la leyenda “Ingrese una ciudad”, brindar toda la información del clima de la ciudad deseada.

Se ingresa el nombre de la ciudad en el campo de entrada y se presiona el botón “Buscar”.

Se cambiará la imagen de fondo de la aplicación representando el estado actual del clima en dicha ciudad, pudiendo la misma variar, según si es de día o de noche.

Se completaran todas las tarjetas del clima con la información de la ciudad seleccionada.


         5.3 - Clima desde el Mapa.

Es posible mediante un mapa, brindar toda la información del clima de una ubicación seleccionada.

Dentro del mapa, se selecciona un punto haciendo un clic sobre el mismo.

Se cambiará la imagen de fondo de la aplicación representando el estado actual de clima en dicha ubicación, pudiendo la misma variar, según si es de día o de noche.

Se completaran todas las tarjetas del clima con la información de la ubicación seleccionada.

Clima WebAPP Santiago Peraza y Matias Bentancur
