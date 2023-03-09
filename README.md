# La Diaria - Front
## About us
------------
## Description 
La Diaria es una plataforma de gestion de tareas para parejas, interactiva y con concepto de juego, con la finalidad de que la pareja se asignen  una serie de tareas domesticas
y a medida que se vayan marcando como completadas se
iran sumando cierta cantidad de puntos dependiento de 
la tarea.

las tareas del juego tienen una duracion de un mes y
al final de cada mes se cuentan el total de puntos de
cada de  los dos miembros y quien obtenga mas puntos obtendra
un "trofeo" que sera una recompensa previamente definida por la pareja al iniciar, y el que haya obtenido menos puntos tendrá que  cumplir esa recompensa.

Tambien tendra otro sistema de obtencion de puntos que serán 
mini juegos de pareja.

Cada jugador tendra una vista con los resultados de los minijuegos, victorias o derrotas o conflictos aún por resolver.

--------------
## Deployment 

Puede verificar la applicacion completamente implementada  [aqui]()

## Work Structure
Usamos la plataforma [Trello](https://trello.com/b/hpGY6UqD/ladiaria) para la distribución de tareas

## Installation Guide
- Bifurcar este repositorio
- Clonar este repositorio
````
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
| /profile               | private         | ProfileUser              |
| /profile/task          | private    |UserTask
| /task/:id    | private          | task & form task    |
| /minigames | private         | gamesPages |
| /minigames/:id | private         | game selected |
<!-- | /all-orders          | private (admin) | AllOrdersPage            |
| /all-orders/:id      | private (admin) | EditOrderPage            |
| /profile             | private (user)  | UserProfilePage          | -->
-------------------------------------------------------------
## Components 
- signup
- login
- getStart
- navbar
- footer
- formTask
- EditTask
- Games
- errorPage
- profile
-------------------------------
