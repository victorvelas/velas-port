<script lang="ts" setup>
import NuxtButton from '../web/NuxtButton.vue';


</script>

<template>
    <section class="mb-5">
        <form 
            method="post"
            class="w-14/15 md:w-5/6 m-auto gap-3 p-6 rounded-2xl border light:border-gray-200/90  dark:border-main-500 backdrop-blur-sm bg-white/3 min-h-[50vh] shadow-lg shadow-main-500/20"
        >
            <div>
                <label for="name">{{ $t('contact.form.name') }}:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    class="block border light:border-bod/8 dark:border-bol/30 light:bg-bod/1 dark:bg-bol/2 focus:border-main-400 duration-200 outline-0 w-full mb-2 py-1 px-3 rounded-sm"
                    autocomplete="off"
                />
            </div>
            <div>
                <label for="email">{{ $t('contact.form.email') }}:</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    class="block border light:border-bod/8 dark:border-bol/30 light:bg-bod/1 dark:bg-bol/2 focus:border-main-400 duration-200 outline-0 w-full mb-2 py-1 px-3 rounded-sm"
                    autocomplete="off"
                />
            </div>
            <div>
                <label for="subject">{{ $t('contact.form.subject') }}:</label>
                <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    class="block border light:border-bod/8 dark:border-bol/30 light:bg-bod/1 dark:bg-bol/2 focus:border-main-400 duration-200 outline-0 w-full mb-2 py-1 px-3 rounded-sm"
                    autocomplete="off"
                />
            </div>
            <div>
                <label for="message">{{ $t('contact.form.message') }}:</label>
                <textarea 
                    name="message" 
                    id="message" 
                    class="block border light:border-bod/8 dark:border-bol/30 light:bg-bod/1 dark:bg-bol/2 focus:border-main-400 duration-200 outline-0 w-full mb-2 py-1 px-3 rounded-sm"
                    rows="8"
                ></textarea>
            </div>
            <div>
                <NuxtButton type="submit">
                    {{ $t('contact.form.submit') }}
                </NuxtButton>
            </div>
        </form>
    </section>
</template> 
