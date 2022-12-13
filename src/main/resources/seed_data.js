// Execute via command shell (e.g.: \>"C:/Program Files/MongoDB/Server/4.4/bin/mongo" < seed_data.js).

use testDatabase;
db.dropDatabase({w: 'majority' });
use testDatabase;

// mongodb://testUser:password@localhost:27017/?authMechanism=SCRAM-SHA-256&authSource=testDatabase
db.dropUser("testUser")
db.createUser({ 
 user: "testUser",
 pwd:  "password",
 roles: [{ role:"readWrite", db:"testDatabase"}],
 mechanisms: [ "SCRAM-SHA-256" ]  
});

db.pizzas.insertMany( [
   { _id: "PS", name: "Pepperoni", size: "small", price: 19, createdOn: ISODate( "2021-03-13T08:14:30Z" ) },
   { _id: "CS", name: "Cheese", size: "small", price: 12, createdOn : ISODate( "2021-03-13T11:21:39.736Z" ) },
   { _id: "VM", name: "Vegan", size: "medium", price: 17, createdOn : ISODate( "2021-01-13T05:08:13Z" ) },
] );

db.orders.insertMany([
{ _id: 0, name: "Pepperoni", size: "small", price: 19, quantity: 10, date: ISODate( "2021-03-13T08:14:30Z" ) },
   { _id: 1, name: "Pepperoni", size: "medium", price: 20, quantity: 20, date : ISODate( "2021-03-13T09:13:24Z" ) },
   { _id: 2, name: "Pepperoni", size: "large", price: 21, quantity: 30, date : ISODate( "2021-03-17T09:22:12Z" ) },
   { _id: 3, name: "Cheese", size: "small", price: 12, quantity: 15, date : ISODate( "2021-03-13T11:21:39.736Z" ) },
   { _id: 4, name: "Cheese", size: "medium", price: 13, quantity:50, date : ISODate( "2022-01-12T21:23:13.331Z" ) },
   { _id: 5, name: "Cheese", size: "large", price: 14,  quantity: 10, date : ISODate( "2022-01-12T05:08:13Z" ) },
   { _id: 6, name: "Vegan", size: "small", price: 17, quantity: 10, date : ISODate( "2021-01-13T05:08:13Z" ) },
   { _id: 7, name: "Vegan", size: "medium", price: 18, quantity: 10, date : ISODate( "2021-01-13T05:10:13Z" ) }
]);