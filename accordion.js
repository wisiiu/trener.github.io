var accordions = document.querySelectorAll("button.accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

function closeAll() {
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove("active");
    accordions[i].nextElementSibling.classList.remove("show");
  }
}


    $(document).ready(function(){
        $(".accordion").click(function(){

        $(".myoffer .accordion i").removeClass("fa-minus").addClass("fa-plus");
        $(this).children("i").removeClass("fa-plus").addClass("fa-minus");
      })
    })