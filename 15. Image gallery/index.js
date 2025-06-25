let gallery = document.getElementById("gallery");

function createImage(imgesrc) {
    let createImage = document.createElement("img");
    createImage.src = imgesrc
    return createImage;
}


let urlLink = [ "https://images.unsplash.com/photo-1750440982726-d723eab666a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1750681050008-21fba0ff872a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ];


urlLink.forEach(src => {
    let displayImg = createImage(src);
    gallery.appendChild(displayImg);
})
