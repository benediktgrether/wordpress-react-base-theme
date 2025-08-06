<?php

if (!isset($attributes['uuid'])) {
    $attributes['uuid'] = 'error';
}

if (!isset($attributes['itemUuid'])) {
    $attributes['itemUuid'] = 'childError';
}

?>

<div class="accordion-item border-b border-gray-200">
    <h2>
        <button
            class="accordion-header w-full flex justify-between items-center text-left py-3 px-4 bg-primary-default text-white font-semibold focus:outline-none transition"
            data-accordion-toggle="accordion-content-<?php echo $attributes['itemUuid']; ?>">
            <span><?php echo $attributes['question']; ?></span>
            <svg class="w-5 h-5 transform transition-transform duration-300" data-accordion-icon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    </h2>
    <div
        id="accordion-content-<?php echo $attributes['itemUuid']; ?>"
        class="accordion-body max-h-0 overflow-hidden transition-all duration-300">
        <div class="p-4 text-gray-700 bg-gray-50">
            <?php echo $attributes['answer']; ?>
        </div>
    </div>
</div>