const saludos = require("./saludos.js");
const os = require("os")
const fs = require("fs")
//os
//process
//fs filesystem


//console.log(saludos)

saludos.saludo("Pablinn");
saludos.holamundo();

//console module
//console.log('hola pablinn');
//console.warn('peligro');
//console.error(new error('ocurrio un error'));

//process modulo
//console.log(process);
//console.log(process.env);
//console.log(process.argv[4]);

//console.log(process.argv.lenght)
//for (let i = 2 ;i < process.argv.lenght;i++){
// console.log(process.argv[i]);
//}

//console.log(process.memoryUsage());

//os module
//console.log(os.type());
//console.log(os.homedir());
//console.log(os.userInfo());
//console.log(os.uptime());

//Timer module
//setInterval
//setTimeout

//function mostrarTema(tema){
  //  console.log(`estoy aprendiendo ${tema}`);
//}
//mostrarTema("java");

//setTimeout(mostrarTema,5000,"node.js");
//setTimeout(saludos.holamundo,6000);
//1 seg -- 1000 milisegundos

//function sumar(a,b){
//console.log(a + b);
//}
//setTimeout(sumar,3000,2,3);

//primero todo el codigo sincrono 
//setImmediate(mostrarTema,"c++");

//setInterval(saludos.holamundo,3000);

//setInterval(sumar,1500,3,5)

//fs modulo
//fs.readFile("tests.html",'utf-8',(err,contenido)=>{
  //if (err){
  //console.log(err);
  //throw err;
  //}else{
  //console.log(contenido);
  //}
  //console.log("mensaje ----")
//});

//fs.rename('test.html','index.html',(err)=>{
//if (err){
 // throw err;
//}
//console.log('nombre cambiado');

//});

//fs.appendFile('index.html', '<p>hola</p>',(err)=>{
  //if (err){
    //throw err;    
  //}

//console.log('arhivo actualizado');

//});

//fs.writeFile();
//fs.unlink('main.html',(err)=>{
  //if (err){
    //throw err;
  //}
  //console.log('eliminado');
//});


//fs.readfileasync();
//fs.unlinksync();
//fs.writefilesync();
