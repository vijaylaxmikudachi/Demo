let lang =["java","js"];
let obj1 = {
                java: "oop",
                js : "prototypic",
                getjava: function(){
                    console.log("java is object oriented");

                }
}
Object.prototype.pro = function (){
                    console.log("Programming!")
}
obj1.pro();