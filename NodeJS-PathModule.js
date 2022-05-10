const path = require("path");

const base = path.basename("/NODEJS/path.js");
const dir = path.dirname("NODEJS/path.js");
console.log(path.extname("/NODEJS/path.js"));
console.log(path.isAbsolute("/NODEJS/path.js"));

//Create a path object:
//var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }
var obj = {dir, base};
//Format the path object into a path string:
var p = path.format(obj);
console.log(p);
console.log(path.sep);
console.log(path.resolve(__dirname,("path.js")));
