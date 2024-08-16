function handleMouseEnter(event) {
  event.target.classList.add('s-card--hovered');
  document.body.id = `${event.target.id}-hovered`;
}

function handleMouseLeave(event) {
  event.target.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  
  if (!carousel) return;
  
  const transform = carousel.style.transform || 'rotateY(0deg)';
  const rotateY = transform.match(/rotateY\((-?\d+)deg\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  
  let newTransform;
  if (rotateY) {
    newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  } else {
    newTransform = `rotateY(${rotateYDeg}deg)`;
  }

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  
  if (activeButtonElement) {
    activeButtonElement.classList.remove('s-controller__button--active');
  }

  selectedButtonElement.classList.add('s-controller__button--active');
}
