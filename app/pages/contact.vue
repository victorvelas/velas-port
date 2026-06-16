<script lang="ts" setup>
import { useHead } from '#app';
import { useI18n } from 'vue-i18n';
import ContactForm from '~/components/Contact/ContactForm.vue';
import PageHeader from '~/components/web/PageHeader.vue';

const { t } = useI18n();

useHead({
    title: t('contact.title')
})

</script>
<template>
    <div>
        <PageHeader 
            :title="$t('contact.title')" 
            :subtitle="$t('contact.subtitle')" 
            mini-portrait-bg="/images/home/portrait-1.webp" 
        />
        <div class="container-site">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
                <div></div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
</template>