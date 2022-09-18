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



const container = document.querySelector('.container-gambar');
const jumbo = document.querySelector('.jumbo');
const semua = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){

    //cek yang diklik 

    if (e.target.className == 'thumb'){

        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        },500);

        semua.forEach(function(thumb){
            thumb.className ='thumb';
        })

        e.target.classList.add('active');
    } 

});