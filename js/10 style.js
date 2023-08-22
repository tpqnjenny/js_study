// 대상.style.css속성명 = "값";
// DOMContentLoaded : html에 들어있는 모든 요소를 다 읽으면!

/*
DOM의 내용을 모두 로드한 이후 script 실행
document.addEventListener("DOMContentLoaded", function(){
  document.getElementsByTagName("h1")[0].style.color = "blue";
})
*/

// 태그명, 요소, 스타일 컬러 변경
document.getElementsByTagName("h1")[0].style.color = "blue";

// 아이디명, 스타일 배경 변경 
document.getElementById("list1").style.backgroundColor = "skyblue";

// 클래스명, 스타일 리스트 스타일 변경
var list = document.getElementsByClassName("list");
  /*
  list[0].style.listStyle = "none";
  list[1].style.listStyle = "none";
  list[2].style.listStyle = "none";
  */
for(let i = 0; i < list.length; i++){
  list[i].style.listStyle = "none";
}

// css 선택자, 스타일 컬러 변경
// document.querySelector("#list3 .red").style.color = "red";
document.querySelectorAll("#list3 .red")[0].style.color = "red";
document.querySelector("#box > div > div").style.backgroundColor = "pink";

var myParagraph = document.querySelectorAll("article p");
console.log(myParagraph);


// 반복문을 활용한 style 변경
for(let i = 0; i < myParagraph.length; i++){
  myParagraph[i].style.backgroundColor = "#ebebeb";
}

for(mp of myParagraph){
  mp.style.backgroundColor = "#ebebeb";
}

var i = 0;
while(i < myParagraph.length){
  myParagraph[i].style.backgroundColor = "#ebebeb";
  i++;
}

var i = 0;
do{
  myParagraph[i].style.backgroundColor = "#ebebeb";
  i++;
}
while(i < myParagraph.length);

myParagraph.forEach(function(item, idx){
  item.style.backgroundColor = "#ebebeb";
})