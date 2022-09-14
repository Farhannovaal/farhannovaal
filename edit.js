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

    return;
})();



const container = document.querySelector('.container-Gambar');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', function(e){

    //cek yang diklik 

    if (e.target.className == 'thumb'){

        jumbo.src = e.target.src;

    }



});