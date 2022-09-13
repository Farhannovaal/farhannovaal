const pekerjaan = ['Freelancer', 'Web Developer', 'UI/UX Design'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';



(function Myjob(){
    if(count == pekerjaan.length){
        count = 0;
    } currentTxt = pekerjaan[count];

    words = currentTxt.slice(0, ++txtIndex);

    document.querySelector(".test-profile").textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(Myjob,300);
})();


// var card = `<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
// <div class="carousel-inner">
//   <div class="carousel-item active" data-bs-interval="10000">
//     <img src="..." class="d-block w-100" alt="...">
//   </div>
//   <div class="carousel-item" data-bs-interval="2000">
//     <img src="..." class="d-block w-100" alt="...">
//   </div>
//   <div class="carousel-item">
//     <img src="..." class="d-block w-100" alt="...">
//   </div>
// </div>
// <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Previous</span>
// </button>
// <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//   <span class="carousel-control-next-icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Next</span>
// </button>
// </div>`;

// if()