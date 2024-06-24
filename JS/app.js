var btnentrar=document.querySelector("#entrar");
var btnregistrar=document.querySelector("#registrar");
var body=document.querySelector("body");

btnentrar.addEventListener("click",function(){
    body.className="entrar-JS";
});
btnregistrar.addEventListener("click",function(){
    body.className = "registrar-JS"
})