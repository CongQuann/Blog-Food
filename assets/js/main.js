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
var body = document.getElementById("sticky");
window.onscroll= function(){
    console.info(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop < 789){
        body.style.position ="fixed";
        body.style.marginLeft = "68.4%";
        body.style.width = "30%";
        body.style.marginTop = "0px";
        // body.style.backgroundColor = "var(--primary-color)";
    }
    else{
        body.style.position ="absolute";
        body.style.marginLeft = "68.4%";
        body.style.width = "30%";
        body.style.marginTop = "54%";
        // body.style.backgroundColor = "var(--primary-color)";
    }
}