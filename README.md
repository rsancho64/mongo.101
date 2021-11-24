# Taller mongo II

Hace dos dias os subi un guion para instalar **mongod** y mongo **compass**. (parte I del taller mongo)

La idea es usarlos ya. Si os rompeis la cabeza con este intento ahora, cuando lo hagamos en clase saldrá mejor.

El ejercicio es, ya lo comenté, poblar una base de datos "coches" con los mismos datos de [**la bd sql de comienzo de curso**](https://drive.google.com/file/d/1UhXbedws71OqnbBzpWaTSpDTXnnlIrcG/view?usp=sharing). Esta es una bd no-sql (documental) Os recuerdo la equivalencia de estructuras, ya indicada:

+ Modelo *relacional* ("sql"): **bd/tabla/registro/campo**
+ Modelo *documental* ("no-sql"): **bd/coleccion/documento**

### Como abordarlo:

1. Hace falta mongod en marcha (servicio en el puerto 27???)
1. Un `git clone` de este repo o bien [**este otro, el original**](https://github.com/kevinchisholm/mongo-shell-scripting-basic-crud-operations).
1. Meteros (`cd`) en la carpeta. Hay `exX.js` con X en 1..4
1. Abris code (`code . &`)
1. Haceis -en code- que funcinone ex1.js (abrid la consola dentro de code (teclado: **ctl+\`**) creando la bd y viendola en compass (la borrais en compass cuando haga falta y todo se va recreando lanzando de nuevo)
1. Ahora cambiad nombres y seguid metiendo datos.
	1. La bd que se llame 'coches' y no 'madMen'. La coleccion, 'cliente' y no 'names'
	1. El primer dato, que tenga dos campos ('name' -> 'nombre' y 'apellido')
	1. Cuando eso funcione, meter los otros (creo que eran cuatro) clientes
	1 ... resto de tablas.
