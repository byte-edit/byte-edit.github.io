// script.js

// let currentGifIndex_in = 0;
let currentGifIndex_out = 0;
// const gifs_inpainting = ['gif/inpainting/inpainting-1.gif', 'gif/inpainting/inpainting-2.gif'];
const gifs_outpainting = ['outpainting-1.gif', 'outpainting-2.gif', 'outpainting-3.gif', 'outpainting-4.gif', 'outpainting-5.gif',];

// function changeGif_inpainting(direction) {
//     if (direction === 'left') {
//         currentGifIndex_in = (currentGifIndex_in - 1 + gifs_inpainting.length) % gifs_inpainting.length;
//     } else {
//         currentGifIndex_in = (currentGifIndex_in + 1) % gifs_inpainting.length;
//     }
//     document.getElementById('gif-display-in').src = gifs_inpainting[currentGifIndex_in];
// }


function changeGif_outpainting(direction) {
    if (direction === 'left') {
        currentGifIndex_out = (currentGifIndex_out - 1 + gifs_outpainting.length) % gifs_outpainting.length;
    } else {
        currentGifIndex_out = (currentGifIndex_out + 1) % gifs_outpainting.length;
    }
    document.getElementById('gif-display-out').src = gifs_outpainting[currentGifIndex_out];
}

// document.getElementById('left-button-in').addEventListener('click', function() {
//     changeGif_inpainting('left');
// });

// document.getElementById('right-button-in').addEventListener('click', function() {
//     changeGif_inpainting('right');
// });

document.getElementById('left-button-out').addEventListener('click', function() {
    changeGif_outpainting('left');
});

document.getElementById('right-button-out').addEventListener('click', function() {
    changeGif_outpainting('right');
});