export function accordion() {
    const accordions = document.querySelectorAll('[data-accordion-toggle]');

    if (accordions.length === 0) {
        return;
    }

    accordions.forEach((button) => {
        button.addEventListener('click', () => {
            const contentId = button.getAttribute('data-accordion-toggle');
            const content = document.getElementById(contentId);
            const icon = button.querySelector('[data-accordion-icon]');

            const isOpen = content.classList.contains('max-h-96');

            // Close all siblings
            const parentAccordion = button.closest('.tw-accordion');
            parentAccordion
                .querySelectorAll('.accordion-body')
                .forEach((body) => {
                    body.classList.remove('max-h-96');
                    body.classList.add('max-h-0');
                });
            parentAccordion
                .querySelectorAll('[data-accordion-icon]')
                .forEach((i) => {
                    i.classList.remove('rotate-180');
                });

            // Toggle current
            if (!isOpen) {
                content.classList.remove('max-h-0');
                content.classList.add('max-h-96'); // Adjust for content height
                icon.classList.add('rotate-180');
            }
        });
    });
}
