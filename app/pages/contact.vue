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
                <div class="flex justify-center">
                    <div class="w-8/10">
                        <hr class="bt-0 border light:border-bod/5 dark:border-bol/10 mb-6 mt-6"/>
                        <p>
                            {{ $t('contact.column.baseMessage') }}
                        </p>
                        <p>
                            {{ $t('contact.column.secondaryMessage') }}
                        </p>
                        <ul>
                            <li>Build something</li>
                            <li>Hire me</li>
                            <li>Let's chat</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
</template>