const accordion = document.querySelectorAll(".panel");

accordion.forEach((ele) => ele.addEventListener("click", toggleEle));

function toggleEle(e) {
  accordion.forEach(function (ele) {
    console.log(e.target);
    if (e.target.parentElement === ele) {
      ele.classList.toggle("active");
    } else {
      ele.classList.remove("active");
    }
  });
}
