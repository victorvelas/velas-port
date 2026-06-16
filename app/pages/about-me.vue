<script lang="ts" setup>
import PageHeader from '~/components/web/PageHeader.vue';
import Trajectory from '~/components/About/Trajectory.vue';
import Stack from '~/components/About/Stack.vue';
import Hobbies from '~/components/About/Hobbies.vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '#app';

const { t } = useI18n()

useHead({
    title: t('about.title')
})
</script>
<template>
    <div>
        <PageHeader :title="$t('about.title')" :subtitle="$t('about.subtitle')"
            mini-portrait-bg="/images/home/portrait-1.webp" />
        <Trajectory />
        <Stack />
        <Hobbies class="!mb-0 pb-12" />
    </div>
</template>
