# ConviMillas - Front
## Description 
ConviMillas es una plataforma de gestion de tareas para parejas, interactiva y con dinámica de juego, con la finalidad de que la pareja se asignen  una serie de tareas domesticas
y a medida que se vayan marcando como completadas se
iran sumando cierta cantidad de puntos dependiento de 
la tarea.

las tareas del juego tienen una duracion de un mes y
al final de cada mes se cuentan el total de puntos de
cada de  los dos miembros y quien obtenga mas puntos obtendra
un "trofeo" que sera una recompensa previamente definida por la pareja al iniciar, y el que haya obtenido menos puntos tendrá que  cumplir esa recompensa.

Tambien tendra otro sistema de obtencion de puntos que serán 
mini juegos de pareja.

Cada jugador tendra una vista con los resultados de los minijuegos, victorias y derrotas.

--------------
## Deployment 

Puede verificar la applicacion completamente implementada  [aqui](https://genuine-hotteok-2cd492.netlify.app/)


## Installation Guide
- Bifurcar este repositorio
- Clonar este repositorio
````shell
$ cd client 
$ npm install
$ npm start 
````
## Routes
| Route                | Privacy         | Renders                  |
| -------------------- | :-------------: | ------------------------ |
| /                    | public          | Getstart                 |
| /signup              | public          | SignupPage               |
| /login               | public          | LoginPage                |
| /profile               | private         | perfil de usuario           |
| /tasks          | private    |tareas del usuario
| /tasksForm   | private          | formulario de tareas |
| /settings | private         | editar perfil de usuario |
| /minigames | private         |juegos |

-------------------------------------------------------------
## Components 
- Alert
- Avatar
- Greeting
- isAnon
- IsPrivate
- Loading
- Menu
- MinigamesCard
- NavBar
- PointsForm
- TaskFormCard
- TaskListFormButton
- TaskForm
- TestNavBar
-------------------------------
