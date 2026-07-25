document.addEventListener("DOMContentLoaded", function(){


    // ==========================
    // DATA PENGANTIN
    // ==========================


    document.getElementById("groomName").innerHTML =
    wedding.groom.name;


    document.getElementById("groomParents").innerHTML =
    wedding.groom.parents;



    document.getElementById("brideName").innerHTML =
    wedding.bride.name;


    document.getElementById("brideParents").innerHTML =
    wedding.bride.parents;



    // ==========================
    // COVER
    // ==========================


    document.getElementById("coupleName").innerHTML =
    wedding.groom.name +
    "<br><span>&</span><br>" +
    wedding.bride.name;



    document.getElementById("eventDate").innerHTML =
    wedding.event.date;



    document.getElementById("guestName").innerHTML =
    wedding.guest;



    // ==========================
    // FOTO
    // ==========================


    document.getElementById("groomPhoto").src =
    wedding.groom.photo;



    document.getElementById("bridePhoto").src =
    wedding.bride.photo;



});






// ==========================
// OPEN INVITATION
// ==========================


function openInvitation(){


    document.body.classList.add("opened");



    setTimeout(function(){


        document.querySelector(".opening")
        .scrollIntoView({

            behavior:"smooth"

        });



    },1500);



}







// ==========================
// COUNTDOWN
// ==========================


// Target acara
const weddingDate = new Date(
"August 5, 2026 15:00:00"
).getTime();



const countdown = setInterval(function(){



    const now = new Date().getTime();


    const distance = weddingDate - now;



    if(distance < 0){


        clearInterval(countdown);


        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";


        return;


    }





    const days = Math.floor(
    distance /
    (1000 * 60 * 60 * 24)
    );



    const hours = Math.floor(
    (distance %
    (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
    );



    const minutes = Math.floor(
    (distance %
    (1000 * 60 * 60)) /
    (1000 * 60)
    );



    const seconds = Math.floor(
    (distance %
    (1000 * 60)) /
    1000
    );




    document.getElementById("days").innerHTML =
    days;



    document.getElementById("hours").innerHTML =
    hours;



    document.getElementById("minutes").innerHTML =
    minutes;



    document.getElementById("seconds").innerHTML =
    seconds;



},1000);
