// main.js
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


/* 오토배너 */
let bnnNum = 0;
let lastNum = document.querySelectorAll(".slide_wrap>li").length-1;
// next 버튼 눌렀을때 active가 붙어
// li.slide.active
// .slide_roll>ul>li.on>a
function activation(index,list){
  for(let el of list){
    el.classList.remove("on","active");
  }
    list[index].classList.add("on","active");
}

btn_next.addEventListener("click",e=>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum)bnnNum=0;
  activation(bnnNum,slide);
  activation(bnnNum,slideRoll);

  // slide.forEach(item=>{
  //   item.classList.remove("active");
  // });
  // slide[bnnNum].classList.add("active");

  // slideRoll.forEach(idx=>{
  //   idx.classList.remove("on");
  // });
  // slideRoll[bnnNum].classList.add("on");
});

// prev버튼
btn_prev.addEventListener("click",e=>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum = lastNum;
  activation(bnnNum,slide);
  activation(bnnNum,slideRoll);
});


// 오토배너 5s
function autoBanner(){
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  activation(bnnNum,slide);
  activation(bnnNum,slideRoll);
  autoBnn = setTimeout(autoBanner,5000); //재귀함수
}
let autoBnn = setTimeout(autoBanner,5000); //최초호출

// 배너 재생 이미지 변경
// 배너 멈추고 이미지 변경
// 배너 재생 이미지 변경

// 롤링을 클릭했을때 해당 배너로 이동
const btn = document.querySelector(".btn_play");
console.log(btn);

let flag=true;
btn.addEventListener("click",e=>{
  e.preventDefault();
  if(flag){ //멈춤
    btn.classList.add("on");
    clearTimeout(autoBnn);
    flag = false;
  }else{ //재생
    btn.classList.remove("on");
    autoBnn = setTimeout(autoBanner,5000);
    flag = true;
  };

});

for(let i=0;i<slideRoll.length;i++){
  slideRoll[i].addEventListener("click",e=>{
    e.preventDefault();
    activation(i,slide);
    activation(i,slideRoll);
  });
}

const btn_top = document.querySelector(".btn_top");
console.log(btn_top);
// top버튼
// 클릭하면 스크롤이 맨위로 올라감
btn_top.addEventListener("click",e=>{
  e.preventDefault();
  window.scroll({
    top : 0,
    left : 0,
    behavior:'smooth'
  })
});


// 스크롤을 움직이면 스크롤 위치에 탑버튼이 바뀜
window.addEventListener("scroll",e=>{
  let scroll = document.querySelector("html").scrollTop;
  console.log(scroll);
  if(scroll<=0){
    btn_top.classList.remove("on","ab");
  }else if(scroll>2600){
    btn_top.classList.add("on");
    btn_top.classList.add("ab");
  }else{
    btn_top.classList.remove("on");
    btn_top.classList.add("on");
  }

  })

const btn_bottom = document.querySelector(".btn_bottom")
window.addEventListener("scroll",e=>{
  let scroll = document.querySelector("html").scrollTop;
  if(scroll<=0){
    btn_bottom.classList.remove("on","ab")
  }else if(scroll>2600){
    btn_bottom.classList.add("on")
    btn_bottom.classList.add("ab")
  }else{
    btn_bottom.classList.remove("on")
    btn_bottom.classList.add("on")
  }
}) 



const lisa = document.querySelectorAll(".step1>ul>li>a")
console.log(lisa);
lisa.forEach((el,i)=>{
  el.addEventListener("click",e=>{
    e.preventDefault();
    for(let i=0;i<lisa.length;i++){
      lisa[i].style.backgroundColor = `transparent`;
      lisa[i].style.backgroundColorImage = `url(images/ico_inquiry_0${i+1}.png)`;
      lisa[i].style.color = `#333`;
      lisa[i].style.backgroundPosition = `50% 35%`;
      lisa[i].style.backgroundRepeat = `no-repeat`; 
    }
    el.style.backgroundColor = `#043285`;
    el.style.backgroundImage = `url(images/ico_inquiry_on_0${i+1}.png)`;
    el.style.color = `#fff`;
    el.style.backgroundPosition = `50% 35%`;
    el.style.backgroundRepeat = `no-repeat`; 
  });
})

});

let sections = document.querySelectorAll(".section");
let devHeight;
devHeight = window.innerHeight;

window.addEventListener("resize",()=>{
  devHeight = window.innerHeight;
  console.log(devHeight);
});

for(let i = 0; i < sections.length; i++) {
  sections[i].addEventListener('wheel', function(e) {
    e.preventDefault();
    const sectionHeight = sections[i].offsetHeight;
    const sectionTop = sections[i].offsetTop;
    const scrollDirection = e.deltaY > 0 ? 'down' : 'up';
    
    if (scrollDirection === 'down' && sectionTop + sectionHeight < document.body.scrollHeight) {
      // Scroll to next section if there is one
      window.scroll({
        top: sectionTop + sectionHeight,
        left: 0,
        behavior: 'smooth'
      });
  
    } else if (scrollDirection === 'up' && sectionTop > 0) {
      // Scroll to previous section if there is one
      window.scroll({
        top: sectionTop - sectionHeight,
        left: 0,
        behavior: 'smooth'
      });
 
    }
  });
}