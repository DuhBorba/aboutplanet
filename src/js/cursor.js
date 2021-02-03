let mouseCursor = document.querySelector(".cursor");
let cursor_hover = document.querySelectorAll('.cursor-hover');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

cursor_hover.forEach(link => {
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
  });
});
