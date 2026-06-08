<script setup lang="ts">
import Footer from '~/components/web/Footer.vue';
import Header from '~/components/web/Header.vue';
</script>
<template>
    <div class="layout-container">
        <Header />
        <div class="pt-web-ss min-h-dvh w-full light:bg-bol dark:bg-bod text-tol dark:text-tod">
            <slot />
        </div>
        <Footer />
    </div>
</template>