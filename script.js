const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const galleryItems = document.querySelectorAll('.gallery-item img');
let currentIndex = 0;

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showImage();
});
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showImage();
});

function showImage() {
  lightboxImg.src = galleryItems[currentIndex].src;
  lightboxImg.alt = galleryItems[currentIndex].alt;
}

function filterImages(category) {
  const imgs= document.querySelectorAll("#galleryRow td img");
  imgs.forEach(img => {
    if (category === "all" || img.CDATA_SECTION_NODE.category === category) {
      img.parentElement.style.display = "table-cell";
    } else {
      img.parentElement.style.display = "none";
    }
  });
}

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-filter');
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    document.querySelectorAll('.gallery-item').forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      item.style.display = category === 'all' || itemCategory === category ? 'block' : 'none';
    });
  });
});
