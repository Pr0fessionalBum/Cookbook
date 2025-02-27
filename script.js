document.addEventListener('DOMContentLoaded', function() {
  const ingredients = document.querySelectorAll('.ingredient');
  ingredients.forEach(ingredient => {
      ingredient.addEventListener('mouseover', function() {
          const popup = this.querySelector('.popup');
          popup.style.display = 'block';
      });
      ingredient.addEventListener('mouseout', function() {
          const popup = this.querySelector('.popup');
          popup.style.display = 'none';
      });
  });
});