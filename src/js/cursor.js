let mouseCursor = document.querySelector(".cursor");
let btnLinks = document.querySelectorAll('.btn');
let btnHeader = document.querySelectorAll('.btn-header');
let cards = document.querySelectorAll('.card');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

btnLinks.forEach(link => {
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
  });
});

btnHeader.forEach(link => {
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
  });
});

cards.forEach(link => {
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
  });
});