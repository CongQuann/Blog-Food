//read data
function loadCates(){
    fetch("./assets/data/Public-data/data-danhmuc.json").then(res => res.json()).then(data => {
        let h = "";
        for(let c of  data)
        h +=`<li><a href="${c.href}">${c.name}<i class="${c.class}"></i></a></li>`;
        let e = document.getElementById("danhmuc")
        if(e !== null)
        e.innerHTML += h;
    })
}
function loadThongBao(){
    fetch("./assets/data/Public-data/data-thongbao.json").then(res => res.json()).then(data => {
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
   fetch("./assets/data/Data-DrinksPage/data-AutoImg.json").then(res => res.json()).then(data => {
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

function loadNewPost(){
   fetch("./assets/data/Data-DrinksPage/data-NewPost.json").then(res => res.json()).then(data => {
       let h = "";
       for(let c of  data)
       h +=`
       <div class="baiviet">
           <a href="#">
               <div class="img"><img src="./assets/images/${c.img}" alt="${c.alt}"></div>
               <div class="description-baiviet">
                   <h3 id="item-search">${c.title}</h3>
                   <p>${c.content}</p>
               </div>
           </a>
       </div>
           `;
           let e = document.getElementById("child-right")
           if(e !== null)
           e.innerHTML += h;
   })
}
function loadRandomPost(){
   fetch("./assets/data/Data-DrinksPage/data-RandomPost.json").then(res => res.json()).then(data => {
       let h = "";
       for(let c of  data)
       h +=`
       <div class="content">
           <div class="img">
               <a href="#">
                   <img src="./assets/images/${c.img}" alt="${c.alt}">
               </a>
           </div>
           <div class="description-content">
               <a href="#">
                   <h3 id="item-search">${c.title}</h3>
               </a>
               <p>${c.content}</p>
               <a href="#">
                   <p class="XemThem">Xem thêm</p>
               </a>
               <p>${c.date}</p>
           </div>
       </div>
           `;
           let e = document.getElementById("child-random")
           if(e !== null)
           e.innerHTML += h;
   })
}
function loadCocktail(){
   fetch("./assets/data/Data-DrinksPage/data-Cocktail.json").then(res => res.json()).then(data => {
       let h = "";
       for(let c of  data)
       h +=`
           <div class="count">
               <a href="#">
                   <p class="country" id="item-search">${c.country}</p>
                   <p class="title-fcountry" id="item-search">${c.title}</p>
                   <p class="introduce-fcountry">${c.introduce}</p>
               </a>
           </div>
           <hr>
           `;
           let e = document.getElementById("art")
           if(e !== null)
           e.innerHTML += h;
   })
}
function loadMilkTea(){
   fetch("./assets/data/Data-DrinksPage/data-MilkTea.json").then(res => res.json()).then(data => {
       let h = "";
       for(let c of  data)
       h +=`
       <div class="post">
           <a href="#">
               <div class="img-post">
                   <img src="assets/images/${c.img}" alt="${c.alt}">
                   <div class="title-post">${c.title}</div>
               </div>
               <div class="content-post">
                   <h4 id="item-search">${c.name_food}</h4>
                   <div class="rating">
                       <span>${c.rate}</span>
                       <div class="star">${c.star}</div>
                   </div>
                   <p>${c.content}</p>
               </div>
           </a>
       </div>
           `;
           let e = document.getElementById("frame-posts-MilkTea")
           if(e !== null)
           e.innerHTML += h;
   })
}
function loadPostNuocEp(){
   fetch("./assets/data/Data-DrinksPage/data-nuocep.json").then(res => res.json()).then(data => {
       let h = "";
       for(let c of  data)
       h +=`
       <div class="post">
           <a href="#">
               <div class="img-post">
                   <img src="assets/images/${c.img}" alt="${c.alt}">
                   <div class="title-post">${c.title}</div>
               </div>
               <div class="content-post">
                   <h4 id="item-search">${c.name_food}</h4>
                   <div class="rating">
                       <span>${c.rate}</span>
                       <div class="star">${c.star}</div>
                   </div>
                   <p>${c.content}</p>
               </div>
           </a>
       </div>
           `;
           let e = document.getElementById("frame-posts-nuocep")
           if(e !== null)
           e.innerHTML += h;
   })
}
function loadPostChe(){
   fetch("./assets/data/Data-DrinksPage/data-CacLoaiChe.json").then(res => res.json()).then(data => {
       let h = "";
       for(let c of  data)
       h +=`
       <div class="post">
           <a href="#">
               <div class="img-post">
                   <img src="assets/images/${c.img}" alt="${c.alt}">
                   <div class="title-post">${c.title}</div>
               </div>
               <div class="content-post">
                   <h4 id="item-search">${c.name_food}</h4>
                   <div class="rating">
                       <span>${c.rate}</span>
                       <div class="star">${c.star}</div>
                   </div>
                   <p>${c.content}</p>
               </div>
           </a>
       </div>
           `;
           let e = document.getElementById("frame-posts-che")
           if(e !== null)
           e.innerHTML += h;
   })
}
window.onload = function(){
    loadCates();
    loadThongBao();
   loadAutoImg();
   loadNewPost();
   loadRandomPost();
   loadCocktail();
   loadMilkTea();
   loadPostNuocEp();
   loadPostChe();
}
//end read data