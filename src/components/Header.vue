<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <slot name="navbar"></slot>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <slot name="links"></slot>
            </div>
        </div>
    </nav>
</template>