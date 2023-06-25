
const filterButtons = document.querySelectorAll('.filter-button');

const products = document.querySelectorAll('.producto');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');

        products.forEach(product => {
            if (filterValue === 'todas' || product.classList.contains(filterValue)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});