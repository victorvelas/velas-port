<script lang="ts" setup>
import { useHead } from '#app';
import { useI18n } from 'vue-i18n';
import PageHeader from '~/components/web/PageHeader.vue';

const { t } = useI18n();

useHead({
    title: t('contact.title')
})

</script>
<template>
    <div>
        <PageHeader :title="$t('contact.title')" :subtitle="$t('contact.subtitle')"
            mini-portrait-bg="/images/home/portrait-1.webp" />
        <Trajectory />
        <div class="container-site">
            Pagina para contact
        </div>
    </div>
</template>