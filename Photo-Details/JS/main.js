// function changeImage(id) {
//     let imagePath = document.getElementById(id).getAttribute('src');

//     let imageDetails = document.getElementById('img-main').setAttribute('src', imagePath);
// }

const images = document.querySelectorAll('ul li img');
console.log(images);
let imageDetails = document.getElementById('img-main');
for (let i = 0; i < images.length; i++)
{
    images[i].onclick = function() {
        let imagePath = images[i].getAttribute('src');
        imageDetails.setAttribute('src', imagePath);
    }
}