# curso-npm-platzi-practica

This is part of studying course for learning abaut npm package.
In this repository you don't find relevant information or something for your utility.
Any way, you can see my practice of npm, and my practice english language, don't lost your time to see everything.
I think if i have something important to show, i going to linked in my github profile.
Have a nice day!

One more thing, i'm going to explain the stages of the practice npm package for grow my capacity of english language, if you want, you cant correct me (both of them) for grow my experience.
Have a nice day.

# First stage - Init
First i am do is mkdir a new directory, and made a archive index.js name. 
I'm git init, and npm init.
The second step of first stage is created my index.js.

# Second stage - JSON and global
If we are sincere, i don't think this going to be reading for anyway, but anyway, im start this, im learning something of english language, but i cant explaint every step. Its my excersise. If you reed this congrats, you have so much free time.

Lets talk abaut me, i am so sleepy, im realy don't want coninue. I'm back of Economic University, i don't know what i'm doing there if i going to be a programmer. 
What i am studing in University? Business economy, its like business school, i don't know why the autority of university have the increible idea to name it like economic school.

Okey, im finesh here, i know what are you thinking, my english is SO BAD, but it is what it is, in a couple years you got be pround of me, because you first who reed this, and you can see my evolution.

Have a beatiful day. And i going to explain in spanish.

# Paso 1 - Git init, npm init
Lo primero que hicimos fue crear una carpeta con mkdir, como buena practica y acostumbrarse a la terminal.
Lo segundo fue inicializar el npm, con npm init, de esta manera se crearon archivos de JSON. 
Las caracteristicas de las mismas se fueron completando a medida que fueron apareciendo, sin contar con el nombre y el mail que estaban por defecto gracias al comando -> npm set init.author.email , npm set init.author.name ; ademas de la licencia: npm set init.licence.

# Paso 2 - npm caché, audit, link
Por buena práctica, y que todo se suba de manera correcta (segun las versiones correspondientes a la cual se trabaja) se utilizo -> npm cache clean --force, eliminando todo el cache restante. Verificamos que este todo correcto con npm cache verify.
Buscamos errores con npm audit (en caso de querer ser especificos utilizamos npm audit --json) y luego los arreglamos con npm audit fix.

# Paso 3 - Globalizamos, bin
Creamos una carpeta bin, en la cual globalizamos nuestra paquete de archivos, creamos un global.js y dentro colocamos:
#!/usr/bin/env node -> de esta manera los paquetes se crearan de forma global.
Lo añadimos respectivamente en el package.json (se podra ver en los archivos) el archivo bin y random-msg, formalizandolo sobre la terminal para que se pueda ejecutar en la misma.

# Paso 4 - Publicacion del package
Finalmente publicamos el paquete.
Agregamos el user en el cual se publicara: npm adduser
y publicamos con npm publish
