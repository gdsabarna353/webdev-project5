function clr(){
    document.getElementById('textbox').value= "";
}
function equate(){
    let x= document.getElementById('textbox').value;
    let y = eval(x);
    document.getElementById('textbox').value=y;
}
function display(val){
    var elem = document.getElementById('textbox');
    elem.value += val;
    elem.scrollLeft = elem.scrollWidth;
    
}
