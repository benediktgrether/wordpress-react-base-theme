<?php

if (!isset($attributes['uuid'])) {
    $attributes['uuid'] = 'error';
}

if (!isset($attributes['itemUuid'])) {
    $attributes['itemUuid'] = 'childError';
}

?>

<div class="accordion-item py-2">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-child-id-<?php echo $attributes['itemUuid']; ?>" aria-expanded="false" aria-controls="accordion-child-id-<?php echo $attributes['itemUuid']; ?>">
            <?php echo $attributes['question']; ?>
        </button>
    </h2>
    <div id="accordion-child-id-<?php echo $attributes['itemUuid']; ?>" class="accordion-collapse collapse" data-bs-parent="#parent-accordion-id-<?php echo $attributes['uuid']; ?>">
        <div class="accordion-body">
            <?php echo $attributes['answer']; ?>
        </div>
    </div>
</div>