// ბურგერი
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// გვერდის დასაწყისში დაბრუნება
const scrollToTop = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  scrollToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// fakestoreapi-დან წამოღებული პროდუქტები
fetch('https://fakestoreapi.com/products?limit=15')
  .then(res => res.json())
  .then(data => {
    const productList = document.getElementById('product-list');
    data.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.title}" width="100">
        <h4>${product.title}</h4>
        <p>$${product.price}</p>
      `;
      productList.appendChild(div);
    });
  });

// ვალიდაცია
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const accept = document.getElementById('accept-policy').checked;

  if (!name || !email || !message || !accept) {
    alert('Please fill out all fields and accept the policy.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// mail-ის ფორმატი
  if (!emailPattern.test(email)) {
    alert('Invalid email format.');
    return;
  }

  alert('Message sent successfully!');
  form.reset();
});

// headeer-ში ღილაკებზე დაწკაპუნებით სქროლავს
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    const offset = 80;

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});