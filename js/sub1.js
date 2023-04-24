// sub1.js
window.addEventListener('load', ()=> {

const btn_srch=document.querySelector(".btn_srch");
const srch_wrap = document.querySelector(".srch_wrap");
const btnSrchClose = document.querySelector(".btn_srch_close");
const gnbMenu = document.querySelectorAll('.gnb>ul>li');
const headerWrap = document.querySelector('.header_wrap');

// 주메뉴

// 각 li에 마우스를 올리면 풀다운 메뉴 내려오고 보여야 됨
// 키보드 탭으로도 움직여야됨

for(var i=0; i<gnbMenu.length;i++){
  gnbMenu[i].addEventListener("mouseover",e=>{
    e.currentTarget.classList.add('on');
    var ht = e.currentTarget.children[1].offsetHeight;
    headerWrap.style.height = `${70+ht}px`  
  })

  gnbMenu[i].addEventListener("mouseout",e=>{
    e.currentTarget.classList.remove("on");
    headerWrap.style.height = `${70}px`;
  })

  gnbMenu[i].children[0].addEventListener("focus",e=>{ //li > a
    e.currentTarget.parentElement.classList.add('on');
    var ht = e.currentTarget.nextElementSibling.offsetHeight;
    headerWrap.style.height = `${70+ht}px`; 
  })

  gnbMenu[i].children[0].addEventListener("blur",e=>{
    e.currentTarget.parentElement.classList.remove("on");
    headerWrap.style.height = `${70}px`
  })
}

/* 검색박스 */

// 검색 버튼 누르면 검색박스 보이고 
// 닫기 버튼 누르면 검색박스 안보이게
btn_srch.addEventListener("click",e=>{
  e.preventDefault();
  srch_wrap.classList.add("on");
});

btnSrchClose.addEventListener("click",e=>{
  e.preventDefault();
  srch_wrap.classList.remove("on");
});

const btn_prev = document.querySelector(".slide_arr>.btn_prev");
const btn_next = document.querySelector(".slide_arr>.btn_next");
const slide = document.querySelectorAll(".slide_wrap>li");
console.log(slide)
const slideRoll = document.querySelectorAll(".slide_roll>ul>li");
console.log(slideRoll);


const lisa = document.querySelectorAll(".step1>ul>li>a")

console.log(lisa);

lisa.forEach((el,i)=>{
  el.addEventListener("click",e=>{
    e.preventDefault();
    for(let i=0;i<lisa.length;i++){
      changeImg(lisa[i], `url(images/ico_inquiry_0${i+1}.png)`,`transparent`,`#333`);
    }
    changeImg(el,`url(images/ico_inquiry_on_0${i+1}.png)`,`#043285`,`#fff`);
  });
});

function changeImg(){
  arguments[0].style.backgroundImage = arguments[1];
  arguments[0].style.backgroundColor = arguments[2];
  arguments[0].style.color = arguments[3];   
}
});