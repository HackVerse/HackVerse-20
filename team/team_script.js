var img_path = "/img/bg-img/4.jpg"
var link = "https://google.com"
var name = "FirstName LastName"

let div_text = `
<div class="col-12 col-sm-6 col-lg-3">
<div class="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
    <!-- Thumb -->
    <div class="speaker-single-thumb">
        <img src="`+ img_path + `" alt="">
    </div>
    <!-- Social Info -->
    <div class="social-info">
        <a href="`+ link + `"><i class="zmdi zmdi-email"></i></a>
        <a href="`+ link + `"><i class="zmdi zmdi-linkedin"></i></a>
    </div>
    <!-- Info -->
    <div class="speaker-info">
        <h5>` + name + `</h5>
    </div>
</div>
</div>
`
var row_div = document.getElementById('students').getElementsByClassName('row')[0]
row_div.innerHTML += div_text
row_div.innerHTML += div_text
row_div.innerHTML += div_text