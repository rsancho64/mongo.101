//c0n7r4s3ña

// coches db
var db = connect('127.0.0.1:27017/coches'),
    allCli = null;
    allVeh = null;    

/// CLIENTE ////////////////////////////////////////////////////////////////////////////////////
// DeprecationWarning: db.cliente.remove()
db.cliente.deleteMany({});

// DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
db.cliente.insertOne({'nombre': "marta",  'apellido': "sanchez"});
db.cliente.insertOne({'nombre': "maria",  'apellido': "de la O"});
db.cliente.insertOne({'nombre': "laura",  'apellido': "martinez"});
db.cliente.insertOne({'nombre': "andrea", 'apellido': "jimenez"});

/* // set a ref to all docs in db
allCli = db.cliente.find();
// iterate the collection and output each document
while (allCli.hasNext()) {
   printjson(allCli.next());
};
 */
/// VEHICULO ////////////////////////////////////////////////////////////////////////////////////
//db.vehiculo.remove()
db.vehiculo.deleteMany({});

// vehiculo collection
// ref: insertMany: https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/

db.vehiculo.insertMany(
    [
        {'modelo': "chevrolet camaro", 'año' : 1999, 'color': "rojo"},
        {'modelo': "ford torino",      'año' : 1982, 'color': "rojo coral"},
        {'modelo': "ford mustang",     'año' : 2009, 'color': "rojo"},
        {'modelo': "ford fiesta",      'año' : 2005, 'color': "gris marengo"},
        {'modelo': "ford fiesta",      'año' : 2006, 'color': "blanco nacar"},
        {'modelo': "audi a7",          'año' : 2005, 'color': "verde pistacho"},
        {'modelo': "audi a7",          'año' : 2015, 'color': "blanco"}
    ]
    // {
    //    writeConcern: <document>,
    //    ordered: <boolean>
    // }
 )

// ref: bulkWrite: https://docs.mongodb.com/manual/reference/method/db.collection.bulkWrite/
db.vehiculo.bulkWrite( [
    { insertOne : { "document" : {'bastidor': 666, 'modelo': "lamborghini diablo", 'año': 2005, 'color': "rojo rubi"} } },
    { insertOne : { "document" : {'bastidor': 2357,'modelo': "ford focus",         'año': 2005, 'color': "azul le mans"} } }
 ] )

/* // set a ref to all docs in db
allVeh = db.vehiculo.find();
// iterate the collection and output each document
while (allVeh.hasNext()) {
   printjson(allVeh.next());
};
 */

/// ¿ y todo lo d+ de la bd coches ?
/// https://medium.com/techwomenc/como-pasar-de-sql-a-nosql-sin-sufrir-e34dd22349e5