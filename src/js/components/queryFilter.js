export function queryFilter() {
    const posts = document.querySelectorAll('[data-post]');

    if (posts.length === 0) {
        return;
    }

    queryPostFilter(posts);
}

function queryPostFilter(posts) {
    const buttons = document.querySelectorAll('[data-filter]');

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            buttons.forEach((btn) => {
                btn.classList.remove('btn-primary');
                btn.classList.remove('text-white');
                btn.classList.add('btn-outline-primary');
            });
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-primary');
            this.classList.add('text-white');

            posts.forEach((post) => {
                if (
                    category === '' ||
                    post.getAttribute('data-category').includes(category)
                ) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
}
