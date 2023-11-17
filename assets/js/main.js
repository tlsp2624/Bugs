// @왼쪽 sub메뉴
$('.gnb .arrow > span').click(function(){
  $(this).parent().toggleClass('on')
})

// @header 게임버튼
const linkPmang = $('.header .utill-box .link-pmang')
const linkSelect = $('.header .utill-box .link-select')

$('.header .utill-box .btn-game').click(function(e){
  e.preventDefault()
  linkPmang.toggleClass('on')
})


$(document).click(function(e){
  if (linkSelect.has(e.target).length === 0) {
    linkPmang.removeClass('on')
  }
  if (linkSelect.has(e.target).length === 0) {
        linkPmang.removeClass('on')
      }
})

// @recency swiper
const mainSlide1 = new Swiper('#recency1 .swiper',{  
  effect:'fade',
  pagination:{
    el:".pagination.num1",
    clickable: true,
  },
  navigation: {
    nextEl:'#recency1 .next',
    prevEl:'#recency1 .prev',
  }
})

const mainSlide2 = new Swiper('#recency2 .swiper',{  
  effect:'fade',
  pagination:{
    el:".pagination.num2",
    clickable: true,    
  },
  navigation: {
    nextEl:'#recency2 .next',
    prevEl:'#recency2 .prev',
  }
})

const mainSlide3 = new Swiper('#recency3 .swiper',{  
  effect:'fade',
  pagination:{
    el:".pagination.num3",
    clickable: true,    
  },
  navigation: {
    nextEl:'#recency3 .next',
    prevEl:'#recency3 .prev',
  }
})

// @recency data
$('.sort-list li a').click(function(e){
  e.preventDefault();

  const tabName = $(this).attr('data-alt')
  const tabNum = $(this).attr('data-num') //pagination

  $('.sort-list li a').removeClass('on')
  $(this).addClass('on')

  $(tabName).addClass('on').siblings().removeClass('on') //리스트 선택

  $('.sc-recency .pagination').removeClass('on')
  $(tabNum).addClass('on')
})

// @banner 영역
const bannerSlide = new Swiper('.sc-banner .swiper',{  
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect:'fade',
  pagination:{
    el:".sc-banner .swiper .pagination",
    clickable: true,
  }
})

$('.sc-banner .btn-autoplay').click(function(){
  idx = $(this).data('index');
  if ($(this).hasClass('on')) {
    bannerSlide.autoplay.start();
  } else {
    bannerSlide.autoplay.stop();
  }
  $(this).toggleClass('on')
})

// @chart 영역
$('.sc-chart .table-item').hover(function(){
  $(this).addClass('on');
  $(this).siblings().removeClass('on');
})


// @post 영역
fetch('./assets/data/post.json')
.then(res=>res.json())
.then(json=>{
  data=json.post;

  let html=``;

  data.forEach(element => {
    
    html+=`<li class="post-item">
    <a href="" class="link-info">
      <div class="thumb-box">
        <div class="cover"></div>
        <img src="${element.thumb}" alt>
      </div>
    </a>
    <div class="text-box">
      <a href="" class="link-issue">${element.cate}</a>
      <a href="" class="title">${element.title}</a>
    </div>
  </li>`;
 
  });

  $('#postList').html(html);
})

// @video 영역
fetch('./assets/data/video.json')
.then(res=>res.json())
.then(json=>{
  data2=json.video;

  let html=``;

  data2.forEach(element => {
    
    html+=`<li class="video-item">
    <a href="" class="link-info">
      <div class="thumb-box">
        <div class="cover"></div>
        <img src="${element.thumb}" alt>
      </div>
      <span class="time">${element.time}</span>
    </a>
    <div class="text-box">
      <div class="info">
        <i class="badge"><span class="blind">12세 이상 관람가</span></i>
        <a href="" class="title">${element.title}</a>
      </div>
      <a href="" class="artist">${element.artist}</a>
      <div class="button-box">
      <button class="btn-down">
        <span class="blind">메뉴선택</span>
      </button>
      </div>
    </div>
  </li>`;
 
  });

  $('#videoList').html(html);
})

// @site 영역
$('.footer .site-box').click(function(){
  $(this).toggleClass('on');  
})

// @상단이동 버튼
$('.top .btn-top').click(function(){
  window.scrollTo({top:0, behavior:"smooth"})  
})

// @add-wrap 버튼
$(document).on('click','.btn-down',function(){
  h = $(this).height();
  w = $(this).width();
  adW = $('.add-wrap').width();
  
  $('.add-wrap').toggleClass('on').css({
    left:$(this).offset().left+w-adW,
    top:$(this).offset().top+h
  })
})



// @add-wrap 공유하기 호버
$('.share').hover(function(e){
  $(this).toggleClass('on')
})

// @add-wrap, select 외 선택시 닫힘
$(document).click(function(e){
  if ($('.site-box').has(e.target).length === 0) {
    $('.footer .site-box').removeClass('on')
  }
  if ($('.add-wrap, .button-box').has(e.target).length === 0) {
        $('.add-wrap').removeClass('on')
      }
})