function buttonclick(input)
{
    document.getElementById("screen").value+=input;
}
function clearScreen()
{
 document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}  
