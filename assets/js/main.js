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
  //Tìm kiếm
 function search(){
    var k= document.getElementById("searchinput");
    var output1 = document.getElementById("output-history1");
    var output2 = document.getElementById("output-history2");
    var tmp;
    if(k != null)
    {
        k = k.value
        
        var items = document.querySelectorAll("#item-search")
        for(var i=0;i<items.length;i++)
        {
            var item=items[i].innerText;

            if(item.toLowerCase().indexOf(k.toLowerCase())>=0)
            {
                items[i].style.borderBottom = "3px solid red";
                tmp=output1.innerText;
                output1.innerText=items[i].innerText;
                output2.innerText=tmp;
            }
        }
         setTimeout(function(){
            for(var i=0;i<items.length;i++)
            {
             items[i].style.borderBottom = "none";
            }
         },5000)
    }
 }

