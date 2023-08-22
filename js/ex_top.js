document.addEventListener("DOMContentLoaded", ()=>{
  let top = document.querySelector("#go-top");
  let scrollAmt;
  
  window.addEventListener("scroll", ()=>{
    scrollAmt = window.pageYOffset;
    console.log(scrollAmt);

    if(scrollAmt > 300){
      // top.classList.add("active");
      top.className = "active";
      // 기존에 className이 있어도 모두 초기화하고 해당 값만 지정
    } else{
      top.classList.remove("active");
    }
  });

  top.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });
});