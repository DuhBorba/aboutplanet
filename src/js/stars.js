// function starsSpeed() {
//   let count = 300;
//   let scene_stars_speed = document.querySelector('.scene-stars-speed');
//   let i = 0;
//   while (i < count) {
//     let star = document.createElement("i");
//     let x = Math.floor(Math.random() * window.innerWidth);
//     let duration = Math.random() * 1;
//     // let size = Math.random() * 2;
//     let h = Math.random() * 100;

//     star.style.left = x + 'px';
//     star.style.width = 1 + 'px';
//     star.style.height = 50 + h + 'px';
//     // star.style.height = 1 + size + 'px';

//     star.style.animationDuration = duration + 's';
//     // star.style.animationDelay = duration + 's';
    

//     scene_stars_speed.appendChild(star);
//     i++;
//   }
// }
// starsSpeed();


// function starsSpeed() {
//   let count = 500;
//   let scene_stars_speed = document.querySelector('.scene-stars-speed');
//   let i = 0;
//   while (i < count) {
//     let star = document.createElement("i");
//     let x = Math.floor(Math.random() * window.innerWidth);
//     let duration = Math.random() * 1;
//     let size = Math.random() * 2;
//     let h = Math.random() * 100;

//     star.style.left = x + 'px';
//     star.style.width = 1 + 'px';
//     // star.style.height = 50 + h + 'px';
//     // star.style.height = 1 + size + 'px';
//     star.style.width = 1 + size + 'px';
//     star.style.height = 1 + size + 'px';

//     star.style.animationDuration = duration + 's';
//     // star.style.animationDelay = duration + 's';
    

//     scene_stars_speed.appendChild(star);
//     i++;
//   }
// }
// starsSpeed();


function stars() {
  let count = 500;
  let scene = document.querySelector('.scene');
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 2;

    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.width = 1 + size + 'px';
    star.style.height = 1 + size + 'px';

    star.style.animationDuration = 5 + duration + 's';
    // star.style.animationDelay = duration + 's';

    scene.appendChild(star);
    i++;
  }
}
stars();