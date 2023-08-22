/* 
대상.addEventListner("click", function(){
  // 실행할 내용
})

주요 이벤트
- click
- mouseover (범위 안에서 event가 실행되면 무제한으로 실행) <-> mouseout
- mouseenter (범위 안에서 event가 실행돼도 실행값 유지) <-> mouseleave
- scroll
- change
- focus <-> blur
- keypress
- keyup, keydown
*/

// click
var btn = document.getElementById("submit");

btn.addEventListener("click", function(){
  alert("클릭 되었습니다.");
})

// mouseover, mouseout, mouseenter, mouseleave
var container = document.querySelector(".container");
var i = 0;
/*
container.addEventListener("mouseover", function(){
  this.style.backgroundColor = "yellowgreen";
  console.log("mouseover", i++);

});
container.addEventListener("mouseout", function(){
  this.style.backgroundColor = "";
  console.log("mouseout");
});
*/
container.addEventListener("mouseenter", function(){
  this.style.backgroundColor = "yellowgreen";
  console.log("mouseenter", i++);

});
container.addEventListener("mouseleave", function(){
  this.style.backgroundColor = "";
  console.log("mouseleave");
});

// change
var colorSelect = document.getElementById("color");

colorSelect.addEventListener("change", function(){
  var target = document.querySelector("body");
  // == var target = document.body;
  var selectedValue = this.value;
  console.log(selectedValue);
  
  target.style.backgroundColor = selectedValue;
});

// focus
var link = document.querySelectorAll("a");

/*
link[0].addEventListener("focus", function(){
  this.style.backgroundColor = "blue";
  this.style.color = "#fff";
});
link[1].addEventListener("focus", function(){
  this.style.backgroundColor = "blue";
  this.style.color = "#fff";
});
link[2].addEventListener("focus", function(){
  this.style.backgroundColor = "blue";
  this.style.color = "#fff";
});
link[0].addEventListener("blur", function(){
  this.style.backgroundColor = "";
  this.style.color = "";
});
link[1].addEventListener("blur", function(){
  this.style.backgroundColor = "";
  this.style.color = "";
});
link[2].addEventListener("blur", function(){
  this.style.backgroundColor = "";
  this.style.color = "";
});
*/
link.forEach(function(item, idx){
  item.addEventListener("focus", function(){
    this.style.backgroundColor = "blue";
    this.style.color = "#fff";
  })
  item.addEventListener("blur", function(){
    this.style.backgroundColor = "";
    this.style.color = "";
  })
})

// keypress(현재 버전에서 권장XX), keydown, keyup
// keydown: 누르고 있으면 무수히 실행
// keyup: 눌렀다가 뗐을때 실행
var i = 0;
window.addEventListener("keyup", function(e){
  var userKey = e.key;
  console.log(userKey, i++);
  if(userKey == "ArrowLeft"){
    // 슬라이드 왼쪽 이동
    alert("Left");
  } else if(userKey == "ArrowRight"){
    // 슬라이드 오른쪽 이동
    alert("Right");
  }
})