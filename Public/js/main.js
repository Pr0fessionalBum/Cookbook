document.addEventListener('DOMContentLoaded', () => {
    const ingredientsList = document.querySelector('#ingredients-list');
    const ingredientElements = document.querySelectorAll('.ingredient');
  
    // Load ingredients for the add-recipe form
    if (ingredientsList) {
      fetch('/ingredients')
        .then(response => response.json())
        .then(ingredients => {
          ingredients.forEach(ingredient => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'ingredients';
            checkbox.value = ingredient.id;
            const label = document.createElement('label');
            label.textContent = ingredient.name;
            const div = document.createElement('div');
            div.appendChild(checkbox);
            div.appendChild(label);
            ingredientsList.appendChild(div);
          });
        })
        .catch(error => console.error('Error:', error));
    }
  
    // Display ingredient details on hover
    ingredientElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        const origin = element.getAttribute('data-origin');
        const safetyTips = element.getAttribute('data-safety-tips');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerHTML = `<strong>Origin:</strong> ${origin}<br><strong>Safety Tips:</strong> ${safetyTips}`;
        element.appendChild(tooltip);
      });
  
      element.addEventListener('mouseleave', () => {
        const tooltip = element.querySelector('.tooltip');
        if (tooltip) {
          tooltip.remove();
        }
      });
    });
  });