document.addEventListener("DOMContentLoaded", () => {
    console.log("We are in")
    let videoElement = document.querySelector("#vdo");

    let player = document.querySelector("#player")
    player.addEventListener("click", (e) => {
        if (videoElement.paused) {
            videoElement.play();
            player.innerHTML="Pause Video"
        }
        else if(videoElement.play){
            videoElement.pause();
            player.innerHTML="play video"
        }
    })
    let navbar=document.querySelector(".navbar")
    window.addEventListener("scroll",()=>{
        if((document.querySelector(".container1").offsetHeight-400)<window.scrollY){
        navbar.classList.add("scroll");            
        }
        else{
            navbar.classList.remove("scroll");
        }
    })


})