/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.
*/
const tabMenu = document.querySelectorAll(".tab-menu li");
const tabContent = document.querySelectorAll("#tab-content > div");
const highLight = document.querySelector(".highlight");

//showContent 함수
function showContent(num){
  tabContent.forEach(function(item){
    item.style.display = "none";
  });
  tabContent[num].style.display = "block";
}

showContent(0);

//메뉴 클릭 이벤트
tabMenu.forEach(function(item, idx){
  item.addEventListener("click", function(e){
    e.preventDefault();
    showContent(idx);
    moveHighlight(idx);
  });
});

//Highlight 이동함수
function moveHighlight(num){
  let newLeft = tabMenu[num].offsetLeft;
  let newWidth = tabMenu[num].offsetWidth;
  console.log(newWidth);
  highLight.style.left = newLeft + "px";
  highLight.style.width = newWidth + "px";
}