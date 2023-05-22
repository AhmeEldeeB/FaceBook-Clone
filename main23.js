const containe = document.querySelector(".containe"),
  privacy = containe.querySelector(".privacy"),
  arrowBack = containe.querySelector(".arrow-back");

privacy.addEventListener("click", () => {
  containe.classList.add("active");
});

arrowBack.addEventListener("click", () => {
  containe.classList.remove("active");
});


const show = () => {
  const shows1 = document.querySelector("#post");
  shows1.classList.toggle("show1");
  document.querySelector(".layer").style.display = "block";
  document.querySelector(".creat-post").style.display = "block";
  document.querySelector(".creat-post").style.height = "0rem";
};

const hide = () => {
  const hides1 = document.querySelector("#post");
  hides1.classList.remove("show1");
  document.querySelector(".layer").style.display = "none";
  document.querySelector(".creat-post").style.display = "none";
  document.querySelector(".creat-post").style.height = "25rem";
};


function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#mySearch").onclick = function () {
    document.querySelector("#myMenu").style.display = "block";
  }
  document.querySelector("#closesearch").onclick = function () {
    document.querySelector("#myMenu").style.display = "none";
  }
})
