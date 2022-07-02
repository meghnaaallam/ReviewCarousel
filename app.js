let reviews=[ 
    {
        customerreviews:`"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, necessitatibus ab debitis totam magni exercitationem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla qui minus quibusdam magnam odit sed incidunt autem aliquam molestiae nisi!"`,
        customernames:"Briana Woodley",
        customerrating: 
  ` <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>`,
time:"Customer since 2001"  
    },
    
    {
   customerreviews:"jhFOAHFOHADOGFGAODH V NICE",
   customernames:"Bradely Cooper",
   customerrating:`
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>`,
   time:"Since December 2001"
},
{
    customerreviews:"Excellent service,I really liked it",
    customernames:"Angilina Joulie",
    customerrating:`
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>`,
    time:"Since Jan 1999"  

},
{
    customerreviews:"Loved the customer service. On time!",
    customernames:"Tom cruise",
    customerrating:
    `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>`,
    time:"Since October 2003"
}
]

let nextBtn=document.querySelector('#btn-next')
let reviewQuote=document.querySelector('#quote');
let cname=document.querySelector('.customer-name')
let rating=document.querySelector('.stars')
let moment=document.querySelector('.customer-date')


let defaultReview=0;
//setting default review
window.addEventListener('DOMContentLoaded',quoteReset,false)

function quoteReset() {
reviewQuote.innerText=reviews[defaultReview].customerreviews;
cname.innerText=reviews[defaultReview].customernames;
rating.innerHTML=reviews[defaultReview].customerrating;
moment.innerText=reviews[defaultReview].time;
}


nextBtn.addEventListener('click',nextReview,false)

//more button displays nxt review
function nextReview() {
    defaultReview++;

    //reset the default value
    if(defaultReview>3) {
        defaultReview=0;
        quoteReset();
    }
    reviewQuote.innerText=reviews[defaultReview].customerreviews;
cname.innerText=reviews[defaultReview].customernames;
rating.innerHTML=reviews[defaultReview].customerrating;
moment.innerText=reviews[defaultReview].time;

}