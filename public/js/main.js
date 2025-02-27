document.addEventListener('DOMContentLoaded', function() {
    // Recipe search functionality
    const searchInput = document.getElementById('recipe-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const recipeCards = document.querySelectorAll('.recipe-card');
            
            recipeCards.forEach(card => {
                const recipeName = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = recipeName.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }

    // Form validation for adding new recipe
    const recipeForm = document.getElementById('add-recipe-form');
    if (recipeForm) {
        recipeForm.addEventListener('submit', function(e) {
            const nameInput = document.getElementById('recipe-name');
            const instructionsInput = document.getElementById('recipe-instructions');
            const ingredientsSelect = document.getElementById('recipe-ingredients');
            
            if (nameInput.value.trim() === '') {
                e.preventDefault();
                alert('Please enter a recipe name');
                return;
            }
            
            if (instructionsInput.value.trim() === '') {
                e.preventDefault();
                alert('Please enter recipe instructions');
                return;
            }
            
            if (ingredientsSelect.selectedOptions.length === 0) {
                e.preventDefault();
                alert('Please select at least one ingredient');
                return;
            }
        });
    }

    // Expanding protein tables
    const categoryHeaders = document.querySelectorAll('.category-title');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
    });
});