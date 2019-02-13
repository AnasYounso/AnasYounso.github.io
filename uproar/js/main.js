const mainList = document.querySelector('#drop-main-list');
const categories = document.querySelector('#Categories');

mainList.addEventListener('click', toggleMainList);
categories.addEventListener('click', toggleItemList);

const mainListElement = document.querySelector('.nav__element-links');
const itemList = document.querySelector('#nav-items');

function toggleMainList() {
  if (mainListElement.style.display === 'flex') {
    mainListElement.style.display = 'none';
    mainList.className = 'dropdown open';
  } else {
    mainListElement.style.display = 'flex';
    mainList.className = 'dropdown';
  }
}

function toggleItemList() {
  if (itemList.style.display === 'block') {
    itemList.style.display = 'none';
    categories.className = 'dropdown open';
  } else {
    itemList.style.display = 'block';
    categories.className = 'dropdown';
  }
}
