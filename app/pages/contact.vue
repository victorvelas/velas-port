<script lang="ts" setup>
import { useHead, useRuntimeConfig } from '#app';
import { useI18n } from 'vue-i18n';
import ContactForm from '~/components/Contact/ContactForm.vue';
import Github from '~/components/web/icons/github.vue';
import Linkedin from '~/components/web/icons/linkedin.vue';
import PageHeader from '~/components/web/PageHeader.vue';

const { t } = useI18n();

const config = useRuntimeConfig();

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
                <div class="flex justify-center ">
                    <div class="w-9/10 sm:w-8/10">
                        <h2 class="text-3xl text-center">
                            <span class="border-b-2 border-main-500">
                                {{ $t('contact.column.letsTalk') }}
                            </span>
                        </h2>
                        <hr class="bt-0 border-t border-bod/5 dark:border-bol/10 mb-6 mt-6"/>
                        <p class="dark:text-gray-300">
                            {{ $t('contact.column.baseMessage') }}
                        </p>
                        <hr class="bt-0 border-t border-bod/5 dark:border-bol/10 mb-6 mt-6"/>
                        <p class="dark:text-gray-300">
                            {{ $t('contact.column.secondaryMessage') }}
                        </p>
                        <hr class="bt-0 border-t border-bod/5 dark:border-bol/10 mb-6 mt-6"/>
                        <ul class="mb-6 flex mt-6 block gap-4 justify-center ">
                            <li class="flex-1 sm:flex-0 flex">
                                <a 
                                    :href="config.public.githubUrl" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    class="text-gray-500 hover:text-main-500 dark:hover:text-white transition-colors duration-200 m-auto"
                                >
                                    <div class="flex items-center gap-2">
                                        <Github :size="6" />
                                        <small>Github</small>
                                    </div>
                                </a>
                            </li>
                            <li class="flex-1 sm:flex-0 flex">
                                <a 
                                    :href="config.public.linkedinUrl" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    class="text-gray-500 hover:text-main-500 dark:hover:text-white transition-colors duration-200 m-auto"
                                >
                                    <div class="flex items-center gap-2">
                                        <Linkedin :size="6" /> 
                                        <small>Linkedin</small>
                                    </div>
                                </a>
                            </li>
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