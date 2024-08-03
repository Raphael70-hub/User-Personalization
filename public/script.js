// console.log(window.innerWidth);
if(window.innerWidth <= 900 ){
    var destopCarousel = document.querySelector("#destopcarousel");
    destopCarousel.style.display = "none"

    var mobilecarousel = document.querySelector("#mobilecarousel");
    mobilecarousel.style.display = "block"
}

window.addEventListener("resize", function(){
    if(window.innerWidth <= 900 ){
        var destopCarousel = document.querySelector("#destopcarousel");
        destopCarousel.style.display = "none"

        var mobilecarousel = document.querySelector("#mobilecarousel");
    mobilecarousel.style.display = "block"

    }
    else{
        var destopCarousel = document.querySelector("#destopcarousel");
        destopCarousel.style.display = "block"

        var mobilecarousel = document.querySelector("#mobilecarousel");
    mobilecarousel.style.display = "none"
    }

})

// var emailForm = document.querySelector("#emailform");

// emailForm.addEventListener("submit" ,function submit(){
//     console.log("clicked")
//     var popup = document.querySelector("#sendemail");
//     popup.style.display = "block";
// })

// function cancle(){
//     var popup = document.querySelector("#sendemail");
//     popup.style.display = "none";
// }

const sendMail = (mail) => {
    //1.
    fetch("/send", {
      method: "post", //2.
      body: mail, //3.
  
    }).then((response) => {
      return response.json();
    });
  };

// if(sendMail.email === ""){
//     window.location.href="/email_required.html"
// }
  

//get the form by its id
const form = document.getElementById("emailform"); 

//1.
// const formEvent = form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   //2.
//   let mail = new FormData(form);

//   //3.
//   sendMail(mail);
// })


