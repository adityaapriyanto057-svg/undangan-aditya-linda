document.addEventListener("DOMContentLoaded", function(){


    // DATA PENGANTIN

    document.getElementById("groomName").innerHTML =
    wedding.groom.name;


    document.getElementById("groomParents").innerHTML =
    wedding.groom.parents;



    document.getElementById("brideName").innerHTML =
    wedding.bride.name;


    document.getElementById("brideParents").innerHTML =
    wedding.bride.parents;



    // COVER

    document.getElementById("coupleName").innerHTML =
    wedding.groom.name +
    "<br><span>&</span><br>" +
    wedding.bride.name;



    document.getElementById("eventDate").innerHTML =
    wedding.event.date;



    document.getElementById("guestName").innerHTML =
    wedding.guest;



    // FOTO

    document.getElementById("groomPhoto").src =
    wedding.groom.photo;


    document.getElementById("bridePhoto").src =
    wedding.bride.photo;



});




// TOMBOL OPEN

function openInvitation(){


document.body.classList.add("opened");


setTimeout(function(){


document.querySelector(".opening")
.scrollIntoView({

behavior:"smooth"

});


},1500);



}
