//read data
 function loadCates(){
     fetch("./assets/data/data-danhmuc-index.json").then(res => res.json()).then(data => {
         let h = "";
         for(let c of  data)
         h +=`<li><a href="${c.href}">${c.name}<i class="${c.class}"></i></a></li>`;
         let e = document.getElementById("danhmuc")
         if(e !== null)
         e.innerHTML += h;
     })
 }
 function loadThongBao(){
     fetch("./assets/data/data-thongbao-index.json").then(res => res.json()).then(data => {
         let h = "";
         for(let c of  data)
         h +=`<li class="${c.class_li}">
                 <a href="" class="notilink">
                     <div class="notiimg"><img src="./assets/images/${c.img}" alt="image" class="linkimg"></div>
                     <div class="notiinfo">
                         <span class="notiname">${c.content}</span>
                         <span class="notidescribe">${c.interact}</span>
                     </div>
                 </a>
             </li>
             `;
         let e = document.getElementById("notilist")
         if(e !== null)
         e.innerHTML += h;
     })
 }
 function loadAutoImg(){
    fetch("./assets/data/data-AutoImg-index.json").then(res => res.json()).then(data => {
        let h = "";
        for(let c of  data)
        h +=`
        <div class="slide">
            <a href="${c.details}">
                <img src="./assets/images/${c.img}" alt="">
                <div class="info">
                    <h2 id="item-search">${c.info_content}</h2>
                </div>
            </a>
        </div>
            `;
        let e = document.querySelector(".slides .slide")
        e.insertAdjacentHTML("afterend",h);
    })
}
 window.onload = function(){
     loadCates();
     loadThongBao();
    loadAutoImg();
 }
//end read data