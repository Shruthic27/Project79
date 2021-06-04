var menu= ["Cheese","Vegtable","Chicken","Pineapple"]
function getmenu(){
    menu.sort()
var listitems=""  
for (let index = 0; index < menu.length; index++) {
    const element = menu[index];
    listitems= listitems+"<li>"+element+"</li>"
} 
document.getElementById("menu").innerHTML=listitems
}
function add_item(){
  var item= document.getElementById("add_item").value
  menu.push(item)
}