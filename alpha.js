const productsImages = document.getElementById("products-images");
const dBody = document.getElementById("d-Body");
const figCaptions = document.querySelectorAll("figcaption");
let images = document.querySelectorAll(".images");
let sideBox = document.querySelectorAll(".side-box");
const mediaQueries = window.matchMedia('(max-width: 600px)');

console.log(mediaQueries);

if (!(mediaQueries.matches)) {
    images.forEach(element => {
        element.addEventListener('mousedown', mouseDown, true);
    });

    function mouseDown(e) {
        e.preventDefault();
        let x = e.target;
        console.log(x);
        console.log(images.length);

        for (let i = 0; i < images.length; i++) {
            if (!(x == images[i])) {
                images[i].style.visibility = "hidden";
                figCaptions[i].style.display = "none";
            }
        }
        dBody.style.animation = "dark-background 4s forwards";
        sideBox.forEach(element => {
            if (element == x.parentElement.nextElementSibling) {
                element.style.visibility = "visible";
            }
        });
        x.addEventListener('mouseleave', mouseExit, true);
    }


    function mouseExit(e) {
        e.preventDefault();
        dBody.style.animation = "white-background 4s forwards";
        images.forEach(image => {
            image.style.visibility = "visible";
        });
        figCaptions.forEach(figcaption => {
            figcaption.style.display = "block";
        });
        sideBox.forEach(element => {
            element.style.visibility = "hidden";
        });
    }
}
// images.forEach(element => {
//     element.addEventListener('mousedown', mouseDown, true);
// });



// function mouseDown(e) {
//     e.preventDefault();
//     let x = e.target;
//     console.log(x);
//     console.log(images.length);

//     for (let i = 0; i < images.length; i++) {
//         if (!(x == images[i])) {
//             images[i].style.visibility = "hidden";
//             figCaptions[i].style.display = "none";
//         }
//     }
//     dBody.style.animation = "dark-background 4s forwards";
//     sideBox.forEach(element => {
//         if (element == x.parentElement.nextElementSibling) {
//             element.style.visibility = "visible";
//         }
//     });
//     x.addEventListener('mouseleave', mouseExit, true);
// }


// function mouseExit(e) {
//     e.preventDefault();
//     dBody.style.animation = "white-background 4s forwards";
//     images.forEach(image => {
//         image.style.visibility = "visible";
//     });
//     figCaptions.forEach(figcaption => {
//         figcaption.style.display = "block";
//     });
//     sideBox.forEach(element => {
//         element.style.visibility = "hidden";
//     });
// }