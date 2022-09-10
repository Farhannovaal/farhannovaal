const pekerjaan = ['Freelancer', 'Web Developer', 'UI/UX Design'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

//  $('body,html').on('click',function(){$('.menu').hide();})

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