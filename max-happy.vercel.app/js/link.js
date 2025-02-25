// Crear un elemento <script>




// script.js
const url = "https://caedcfb.datestrack.link/s/7e7821eddce11";

document.querySelectorAll('.enlace-reutilizable').forEach(function(enlace) {
    enlace.href = url; // Asigna la URL almacenada en la variable url al atributo href del enlace
});

// script.js
document.getElementById('thumbnail').addEventListener('click', function() {
    window.location.href = 'https://caedcfb.datestrack.link/s/7e7821eddce11';
});



let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function () {
    moveSlider('https://caedcfb.datestrack.link/s/7e7821eddce11')
}


// Function for prev button 
prevBtn.onclick = function () {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('https://caedcfb.datestrack.link/s/7e7821eddce11')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function () {
        if (direction === 'next') {
            slider.classList.remove('https://caedcfb.datestrack.link/s/7e7821eddce11')
        } else {
            slider.classList.remove('prev')
        }
    }, { once: true }) // Remove the event listener after it's triggered once
}



// Lista de 20 videos

const videos = [
    "https://lolipy.pages.dev/video/12.mp4",
    "https://bucitana.com/wp-content/uploads/2023/11/Valeria-castaneda-onlyfans-video-Valecasta-nude-masturbating.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48b7a25c5fa665444f51_marzo%20(15).mp4",
    "https://bucitana.com/wp-content/uploads/2023/08/Sendnudesx-onlyfans-porn-video-nude-blonde-masturbating.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65ed4fae370b0f7f3aecd1a3_10.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e977cccafd905222beda00_07(1).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e977d5e44da13127048971_08(2).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e977d13f8854293a375871_08(1).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e977cccafd905222beda00_07(1).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e96dfa450c282ca832efa4_video_2024-03-05_16-01-32.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e96dedbeb291f8e2e1c12c_IMG_5034.MP4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e96df36ce317053df1d9d6_video_2024-03-04_21-22-03.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e970719626aa0169341c50_0307.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e9779fe034c0252f6aa84f_01.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e977a9bb7e199b53c30dfa_04.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65cda5d108add4c3077c80ed_14890030-720p.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65c46678eb060b2652d58a40_e1369d63-4d07-4002-8e20-dba716380d5d_full-video_1080p_normal.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b77c273895bce501587b50_video34-transcode.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b7522dc28cd4c1947839df_video31-transcode.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b77c2d10757d3825f3a3a3_video29-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8aa2f45d48daafac867b9_0130-transcode.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b780e06cf1df64300f88e0_video_2023-09-17_23-33-04-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8ad49c82d22d48e768a92_video4-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8ad50d4eb8530d9f89206_fpXNoP33_720p-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65bb5a6e4ad11c5daace6e6f_video26-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65c466ba79e30f10b2195375_e069032a-06a8-4c9f-8ace-6a4e2ec1a103_full-video_1080p_normal-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65c46678eb060b2652d58a40_e1369d63-4d07-4002-8e20-dba716380d5d_full-video_1080p_normal-transcode.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65cda803f938ec6b239f2f9e_2-720p_1.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65cda27559aa0e006aa2c30a_a96982ec-e8b1-4840-ae74-3066022e5a62_full-video_1080p_normal.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd455e6485709dd025f1f3_marzo%20(6).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd45591f010ba8055f7933_marzo%20(5).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd45535b5a2ff508b3180a_marzo%20(4).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd454b82f2587ae9ab7c04_marzo%20(3).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4545737697bcf2879f86_marzo%20(2).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4540df36044af63af0be_marzo%20(1).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd457c74eed39e9f84c62c_marzo%20(13).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4577acaeda24dce1736b_marzo%20(12).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd45738da9e9fd81b65a75_marzo%20(11).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd456e5615754244124e2f_marzo%20(9).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd45688bbf716559a8e9e3_marzo%20(8).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4564ed609b77a885be50_marzo%20(7).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd45850d7b86cc123a929f_marzo%20(14).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48b7a25c5fa665444f51_marzo%20(15).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48c93dd9b46e47e6253f_marzo%20(16).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48cfb35c99ad9860a1d7_marzo%20(17).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48d76970bbb287bfc980_marzo%20(18).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48eac6330d401e6cf879_marzo%20(19).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48f88bbf716559ac6028_marzo%20(21).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd49074012ae2e95ff0702_marzo%20(22).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c404012ae2e9501ef51_marzo%20(23).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c491eaf5ffad23ef893_marzo%20(24).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c57088caa74fe42764d_marzo%20(25).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c5be07c895f65a021b2_marzo%20(26).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c64ea21ff597a0ce384_marzo%20(27).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c6bdec67f3a5fdf5547_marzo%20(28).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c730d5ebb97ff63b534_marzo%20(29).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c7fc20d9cf84efa37c6_marzo%20(30).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4f9a1eaf5ffad2420938_marzo%20(31).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4f9fe07c895f65a3824f_marzo%20(32).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4fa4922946328ce3dab2_marzo%20(33).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4fa8c994418b6cbd90c5_marzo%20(34).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd50fb6ad2a5d4d9d10bf3_marzo%20(37).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd5111e472e74dee0841a7_marzo%20(38).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd511f6543058f06391b26_marzo%20(39).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd51253343c53626b0ed29_marzo%20(40).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd512a1eaf5ffad243a7d7_marzo%20(41).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd51336485709dd0317f25_marzo%20(42).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd514569cdf65dfc978338_marzo%20(43).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd514b088caa74fe46c10e_marzo%20(44).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd5156e07c895f65a5604f_marzo%20(45).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd515aac1019584b96b1d4_marzo%20(46).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd515c3343c53626b12653_marzo%20(47).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd5160e62d48555dc93e01_marzo%20(48).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd5165017f61a39f3caa82_marzo%20(49).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd5351f665974f270e59e1_marzo%20(50).mp4",
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function assignVideos() {
    const shuffledVideos = shuffle([...videos]);
    document.getElementById('video1').src = shuffledVideos[0];
    document.getElementById('video2').src = shuffledVideos[1];
    document.getElementById('video3').src = shuffledVideos[2];
    document.getElementById('video4').src = shuffledVideos[3];
}

assignVideos();

function captureFrame(videoId, canvasId, timeout) {
    const video = document.getElementById(videoId);
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');

    video.addEventListener('loadeddata', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    });

    video.addEventListener('play', () => {
        setTimeout(() => {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const thumbnailItem = document.querySelector(`#${canvasId}`).parentElement;
            const scaleFactorWidth = thumbnailItem.clientWidth / canvas.width;
            const scaleFactorHeight = thumbnailItem.clientHeight / canvas.height;
            const scaleFactor = Math.min(scaleFactorWidth, scaleFactorHeight);

            const offscreenCanvas = document.createElement('canvas');
            offscreenCanvas.width = canvas.width * scaleFactor;
            offscreenCanvas.height = canvas.height * scaleFactor;
            const offscreenContext = offscreenCanvas.getContext('2d');

            offscreenContext.drawImage(canvas, 0, 0, offscreenCanvas.width, offscreenCanvas.height);

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(offscreenCanvas, 0, 0, canvas.width, canvas.height);

            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.borderRadius = '20px';
        }, timeout);
    });
}

captureFrame('video1', 'canvas1', 100);
captureFrame('video2', 'canvas2', 200);
captureFrame('video3', 'canvas3', 300);
captureFrame('video4', 'canvas4', 400);






// Función para cargar videos en las secciones
function loadVideos() {
    const sections = document.querySelectorAll('.section');
    const numSections = sections.length;
    const shuffledVideos = Array.from(videos).sort(() => 0.5 - Math.random()); // Mezclar el orden de los videos
    sections.forEach((section, index) => {
        const videoIndex = index % videos.length;
        const videoElement = document.createElement('video');
        videoElement.src = shuffledVideos[videoIndex]; // Asignar un video a cada sección
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.setAttribute('playsinline', ''); // Para iOS
        videoElement.className = 'vjs-tech video__player'; // Agregar clases
        videoElement.setAttribute('tabindex', '-1');
        videoElement.dataset.id = '6514'; // Agregar atributos data
        videoElement.id = 'video-6514_html5_api';
        section.innerHTML = ''; // Limpiar contenido existente
        section.appendChild(videoElement);

        // Cargar el primer video antes que los demás
        if (index === 0) {
            videoElement.addEventListener('canplaythrough', function () {
                // Una vez que el primer video haya cargado, cargar los demás
                for (var i = 1; i < numSections; i++) {
                    const nextVideoIndex = (index + i) % videos.length;
                    const nextVideoElement = document.createElement('video');
                    nextVideoElement.src = shuffledVideos[nextVideoIndex];
                    nextVideoElement.autoplay = true;
                    nextVideoElement.muted = true;
                    nextVideoElement.loop = true;
                    nextVideoElement.setAttribute('playsinline', '');
                    nextVideoElement.className = 'vjs-tech video__player';
                    nextVideoElement.setAttribute('tabindex', '-1');
                    nextVideoElement.dataset.id = '6514';
                    nextVideoElement.id = 'video-6514_html5_api';
                    sections[i].innerHTML = '';
                    sections[i].appendChild(nextVideoElement);
                }
            });
        }
    });
}

// Cargar videos al cargar la página
window.onload = loadVideos;



//Nombre y description acciones 


// Array con nombres aleatorios
document.addEventListener("DOMContentLoaded", function () {
    var nombresAleatorios = ["🇵🇹 Lorena Caterina 🇵🇹 ",
        "🇫🇮 Ana Maria 🇫🇮",
        "🇨🇦 Carolina Garcia 🇨🇦",
        "🇦🇺 NAKARY MILLER 🇦🇺",
        "🇺🇸 GRACIELA CATERINA 🇺🇸",
        "🇻🇪 Valentina Ribeiro 🇻🇪",
        "🇻🇪 G R A C I E L A 💘 🇻🇪",
        "🇵🇪 Mariana López 🇵🇪",
        "🇷🇴 Andrei Popescu 🇷🇴",
        "🇧🇪 Emma Dubois 🇧🇪",
        "🇬🇷 Ioanna Papadopoulos 🇬🇷",
        "🇨🇱 Matías Silva 🇨🇱",
        "🇭🇺 Levente Kovács 🇭🇺",
        "🇸🇦 Fatima Al-Mansoori 🇸🇦",
        "🇲🇽 Alejandra Hernández 🇲🇽",
        "🇵🇦 Camila González 🇵🇦",
        "🇨🇮 Aminata Diop 🇨🇮",
        "🇨🇴 Isabela Ríos 🇨🇴",
        "🇮🇹 Sofia Santoro 🇮🇹",
        "🇳🇴 Emilie Andersen 🇳🇴",
        "🇦🇹 Lara Hofmann 🇦🇹",
        "🇳🇿 Harper Wilson 🇳🇿",
        "🇨🇿 Klára Nováková 🇨🇿",
        "🇮🇪 Aoife Murphy 🇮🇪",
        "🇨🇭 Alessia Rossi 🇨🇭",
        "🇮🇳 Aarav Patel 🇮🇳",
        "🇦🇪 Layla Khan 🇦🇪",
        "🇸🇪 Malin Lindström 🇸🇪",
        "🇿🇦 Thabo Molefe 🇿🇦",
        "🇳🇱 Daan van der Berg 🇳🇱",
        "🇧🇷 Maria da Silva 🇧🇷",
        "🇫🇷 Léa Dubois 🇫🇷",
        "🇰🇷 Min-jun Kim 🇰🇷",
        "🇯🇵 Yui Tanaka 🇯🇵",
        "🇩🇪 Lena Müller 🇩🇪",
        "🇬🇧 Oliver Hughes 🇬🇧",
        "🇪🇸 Marta García 🇪🇸",];

    for (var i = 1; i <= 5; i++) {
        var indiceAleatorio = Math.floor(Math.random() * nombresAleatorios.length);
        var elementoH2 = document.getElementById("randomName" + i);
        if (elementoH2) {
            elementoH2.textContent = nombresAleatorios[indiceAleatorio];
            nombresAleatorios.splice(indiceAleatorio, 1); // Eliminar el nombre seleccionado del array
        }
    }
});




//Descrition

document.addEventListener("DOMContentLoaded", function () {
    var descripcionesAleatorias = [
        "Watch Me M a s t u r b a t e Live ❤️",
        "📞🔥 Phone Calls, 💥 Custom Videos, 😋 Live Broadcasts, Your Name on My 🍒T I T S!",
        "Made in Czech 🇨🇿🍺 Big smile and big...heart🍒 C u m join me in my adventures as I show off just for you baby ❤️",
        "❣ Exclusive VIP Content 🔞|Seduction and Sensuality Unleashed 🦊| Monthly N u d e Delights📸",
        "😻 Model, ❤️ student 🔥I make exclusive videos, 📞calls! S e x s t i n g LIVE -broadcasts!!🍑🍒 #f u c k",
        "Model, 20 y.o 🇪🇸 Wanna chat with me? Check all my links 😍",
        "Hi I’m Molly! ❤️ Just a sweet girl who loves to be naughty 🤫😈💋CHECK ALL MY LINKS via IG! ✨",
        "🔥 H o t and ready for you! 😈 Let's play together and make your fantasies come true 💦",
        "🍑 Curvy and fun! 💋 Join me for exclusive content and live shows 📸",
        "🌟 Your favorite c a m girl! 🎥 Live shows, custom videos, and more 🔞",
        "💖 Sensual and seductive! 😘 Exclusive content just for you 💌",
        "🔥 Naughty but nice! 💋 C u m play with me and let's have some fun 🍒",
        "🌺 Sweet and sexy! 💫 Join me for a private show and let's get wild together 🚀",
        "👅 Ready to please! 💦 Let's explore your wildest desires together 🔥",
        "🔞 E x p i c i t content and live shows! 💋 C u m chat with me and let's have some fun 😘",
        "🌈 Fun and flirty! 💖 Exclusive content and private shows just for you 🌟",
        "💥 Wild and willing! 🔞 Let's get naughty together and have an unforgettable time 😈",
        "Hi, my name is Mia, I love traveling, s e x and making videos 💖",
        "Hi, I'm Anna 23 yo 💋, ready for smth h o t?🔞🔞",
        "Welcome to my page 💎 You will notice that I am always sweet and friendly! 💗 Feel free to ask me anything - I'll always chat with you😌",
    ];

    for (var i = 1; i <= 5; i++) {
        var indiceAleatorio = Math.floor(Math.random() * descripcionesAleatorias.length);
        var elementoP = document.getElementById("randomDescription" + i);
        if (elementoP) {
            elementoP.textContent = descripcionesAleatorias[indiceAleatorio];
            descripcionesAleatorias.splice(indiceAleatorio, 1); // Eliminar la descripción seleccionada del array
        }
    }
});









