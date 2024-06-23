// 페이지 스크롤 감지하여 헤더에 sticky 클래스 추가/제거
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// 로고 클릭 시 페이지 상단으로 부드럽게 스크롤
document.getElementById("logo").addEventListener("click", function (e) {
  e.preventDefault(); // 기본 동작(링크 이동) 방지
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드럽게 스크롤
  });
});

function showAlert() {
  alert("내부망으로 확인 불가합니다.");
}
