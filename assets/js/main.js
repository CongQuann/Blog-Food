/*function signup(e) {
    event.preventDefault();
    let email = document.getElementById( "email").value;
    let password = document.getElementById("password").value;
    let rppassword = document.getElementById("rppassword").value;
    let user = {
        email : email,
        password : password,
        rppassword : rppassword,
    };

}*/
//
var counter=1;
  setInterval(function(){
      document.getElementById('radio' + counter).checked=true;
      counter++;
      if(counter > 4)
      {
          counter=1;
      }
  },3000);
var gototop = document.getElementById("Gototop");
 window.onscroll= function(){
    console.info(document.documentElement.scrollTop);
     if(document.documentElement.scrollTop > 100){
         gototop.style.display = "block";
     }
     else{
        gototop.style.display = "none";
     }
 }
 function goToTop(){
    var x= setInterval(function(){
        document.documentElement.scrollTop-=20;
        if(document.documentElement.scrollTop<=0)
        clearInterval(x);
    },1)
 }