console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")

// function add(x, y) {
//     return x + y;
// }

// 1
// var add = function (a,b){
//     return a+b;
// }

// 2
// var add=(a,b)=>{return a+b;}

// 3
// var add=(a,b)=> a+b;

// var a =add(4,4)
// console.log(a);


// (function(a,b){
//     console.log("sakshiiii");
    
// })();

/*
function callback(){
    console.log("helloo");
    
}
const add= function(a,b,callback){
    var c = a+b
    console.log(c); //main function work complete
    
    callback();
}
add(2,3,callback)
*/

/*
const add= function(a,b,sakshi){
    var c = a+b
    console.log(c); //main function work complete
    
    sakshi();
}
add(3,4,function(){
    console.log("hiii");
    
})

add(8,8,() => console.log("namaskar"));  //parameter parameter function
*/

/*
var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username);

fs.appendFile('greeting.txt', 'Hii ' +  user.username   + '!\n' ,()=>{
    console.log('file created')
})
console.log(os);
*/

     // importing files
// const notes = require('./notes.js')
      // lodash library
// var _ = require('lodash');   // works with arrays objects strings etc
// console.log("server file is available")

// var age = notes.age;
// var result = notes.addNum(age+2,10);
// console.log(age);
// console.log(result);
 
// var data = ['person','person',1,2,3,4,'name','age','2'];
// var filter = _.uniq(data)
// console.log(filter)
// console.log(_.isString('sakshi'));


//convert json to object

// const jsonStr = '{"name":"sakshi" ,"age": 21}'
// const jsonObj = JSON.parse(jsonStr);
// console.log(jsonObj.name);


// convert object to json

// const objConvert = {
//     name:'soham',
//     age: 21
// }
// const jsonString = JSON.stringify(objConvert);
// console.log(jsonString);



// express.js 


const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000




app.get('/', function (req, res) {
  res.send('welcome to our hotel')
})

// import router files

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
// use routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);


app.listen(PORT, ()=>{
    console.log("server running on port 3000");
    
})





