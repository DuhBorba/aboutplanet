document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll('.mouse-move').forEach(mouse => {
    const speed = mouse.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    mouse.style.transform = `translateX(${x}px) translateY(${y}px)`;
  })
}