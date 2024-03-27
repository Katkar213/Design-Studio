let plusButtons = document.querySelectorAll(".plus-btn");


plusButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.target.nextElementSibling.classList.toggle("hide");
        const next= event.target.nextElementSibling;
      
        if(next.style.display==="block" || next.classList.contains("hide")){
            setTimeout(()=>{
                button.innerText="-";
            })
           
           
        }
        else{
            setTimeout(()=>{
                button.innerText="+";
            })
          
        }
    });
});




// converting image background........................

let imagebg=document.getElementsByClassName("frame-inner");
imagebg=[...imagebg]
let card=document.getElementsByClassName("content-div-4card");
card=[...card];

imagebg.map((item,index)=>{
    card[index].addEventListener("mouseover",()=>{
        item.src="./images/blue-bg.png"
    })

    card[index].addEventListener("mouseout",()=>{
        item.src="./public/rectangle-23809.svg"
    })
})


// swipper.................

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



//   mobole-swiper..........


const hamburger=document.getElementsByClassName("right-navbar");
const dropdown=document.getElementsByClassName("mobile-dropdown");
const cross=document.getElementsByClassName("cross");
hamburger[0].addEventListener("click",()=>{
dropdown[0].classList.toggle("show")
})

cross[0].addEventListener("click",()=>{
    dropdown[0].classList.remove("show")
    })

