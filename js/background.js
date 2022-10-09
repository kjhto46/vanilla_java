const images = ["0.jpg","1.jpg","2.jpg","3.jpg"]
const chosenImage = images[Math.floor(Math.random() *  images.length)];
const bgImage = document.createElement('img');

// 이미지 appendChild 로 밑으로 불러오기
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

document.body.style.background =`url('img/${chosenImage}') no-repeat center/cover`;