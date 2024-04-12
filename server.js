const express = require("express");
require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const Db_connect = require("./config/dbConnection");
//
const app = express();
app.use(express.json());
app.use("/api/contacts", require("./routes/contactsRoute"));
app.use("/api/users", require("./routes/usersRoute"));
app.use(errorHandler);
Db_connect();
//
port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server run at port ${port}`);
});

// documentation
/*

1 - first we create project file using cmd
- init node package
- gitignore for env and node modules
- import dotenv and add port
- set nodemon as default runer and add its config in package file

2 - start the app by creating the express server and run app 
- create first router for contacts include "crud"
-> create router from express then build middleware 
-> it takes route(/,/:) and http method (get,post...) and callback func
-> import file and call it in the main server file
->> use > take url and require the router

3- create controller
- here we separte the request from main server file 
- export the all methods using {}
- import theme in the main server and add the to the http methods

4- start build methods body
- post==[CREATE]
- in the postMan body we will set contact fields as body params
- طبعا هنا هو بيقرا json فلازم نستدعيه
- use server json to provide parsing
- make validation

5- start building middleware to prof error handling
- it is very important step
- create middleware folder and add errorHandler file
- create function that take error,req,res,next as params
- func return json file containe msg and stack trace

- we add title to error msg so we create constants file and add errors title as json 
- import inside middleware file and use it in switch 
- then in server file we use this middleware

6- start using mongo but before it we should create async and exception handlers
- so we install express-async-handler
- it makes you not -- to write try catch in all requsets just but it in asyncHndler 

- install mongoose and add connect code to env file 
- create config folder and connection file
- create var as connect method by calling env var

7- start create models
- create schema obj with table columns
- then exports model and give it name and schema name

- now goto build apies
- find(),findoone(any col),findByIdAndDelete(),deleteOne({col-name:params})

##############################
8- AUTHENTICATION
- we doing the same with user table
-> building the route but in this time we use the method directly inside router not inside controller
-> bulding controller {register,login ,current }
--> not forget to add async and await and async handler
--> ** before building whole api we should export it to use inside router 
- export router and use ot inside main server file
- then back to complete building controllers
-> so we create model
--> create schema and export model
-->* dont forget to add timestamps
- start building mongoose api
- should hashing pass using bycrypt package
- in regsiter we should see if user register before or data not complete and return data without password
9- json web tokens
- consist of three parts
-- header algoritm(algo,type) , payload(sub,name,jwt) , signeture



10- AUTHRITATION

*/
