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
window.onload = function(){
    loadCates();
    loadThongBao();
}