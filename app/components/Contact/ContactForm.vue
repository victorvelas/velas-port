<script lang="ts" setup>
import { useContact, type ContactData } from '~/composables/forPages/useContact.js';
import NuxtButton from '../web/NuxtButton.vue';
import { reactive } from 'vue';
import TsInput from '../web/form/TsInput.vue';
import TsTextarea from '../web/form/TsTextarea.vue';
import { useI18n } from 'vue-i18n';
import { checkRequired, checkValidEmail } from '~/utils/validators.js';

const { t } = useI18n();

const contactInfo = reactive<ContactData>({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const handleSubmit = async () => {
    console.log('handling form');
}

const form = useContact(contactInfo, handleSubmit);

const validateEmail = (value:string) => {
    if (checkRequired(value)) return t('common.validations.required', { field: t('contact.form.email') });
    return checkValidEmail(value) ? t('common.validations.email', { field: t('contact.form.email') }) : undefined;
}

</script>

<template>
    <section class="mb-5">
        <form 
            method="post"
            class="w-14/15 md:w-5/6 m-auto gap-3 p-6 rounded-2xl border border-gray-200/90 dark:border-main-500 backdrop-blur-sm bg-white/3 min-h-[50vh] shadow-lg shadow-main-500/20"
            @submit.prevent="form.handleSubmit"          
        >
            <div>
                <form.Field name="name" :validators="{
                    onChange: ({value}) => checkRequired(value) ? t('common.validations.required', { field: t('contact.form.name') }) : undefined
                }">
                    <template v-slot="{ field }">
                        <div>
                            <label :for="field.name" class="mb-1">
                                {{ $t('contact.form.name') }} 
                                <small class="text-red-500">*</small>:
                                
                            </label>
                            <em role="alert" class="text-sm text-red-500" v-if="!field.state.meta.isValid">{{
                                field.state.meta.errors.join(', ')
                            }}</em>
                        </div>
                        <TsInput :field="field" :id="field.name" :placeholder="$t(`contact.form.fields.${field.name}.placeholder`)" />
                    </template>
                </form.Field>
            </div>
            <div>
                <form.Field name="email" :validators="{
                    onChange: ({value}) => validateEmail(value)
                }">
                    <template v-slot="{ field }">
                        <div>
                            <label :for="field.name" class="mb-1">
                                {{ $t('contact.form.email') }} <small class="text-red-500">*</small>:
                            </label>
                            <em role="alert" class="text-sm text-red-500" v-if="!field.state.meta.isValid">{{
                                field.state.meta.errors.join(', ')
                            }}</em>
                        </div>
                        <TsInput type="email" :id="field.name" :field="field" :placeholder="$t(`contact.form.fields.${field.name}.placeholder`)" />
                    </template>
                </form.Field>
            </div>
            <div>
                <form.Field name="subject">
                    <template v-slot="{ field }">
                        <label :for="field.name" class="mb-1 block">{{ $t('contact.form.subject') }}:</label>
                        <TsInput :field="field" :id="field.name" :placeholder="$t(`contact.form.fields.${field.name}.placeholder`)" />
                    </template>
                </form.Field>
            </div>
            <div>
                <form.Field name="message" :validators="{
                    onChange: ({value}) => value.trim() === '' ? t('common.validations.required', { field: t('contact.form.message') }) : undefined
                }">
                    <template v-slot="{ field }">
                        <div>
                            <label :for="field.name" class="mb-1 block">
                                {{ $t('contact.form.message') }}
                                <small class="text-red-500">*</small>:
                            </label>
                            <em role="alert" class="text-sm text-red-500" v-if="!field.state.meta.isValid">{{
                                field.state.meta.errors.join(', ')
                            }}</em>
                        </div>
                        <TsTextarea :field="field" :id="field.name" :placeholder="$t(`contact.form.fields.${field.name}.placeholder`)" />
                    </template>
                </form.Field>
            </div>
            <div>
                <form.Subscribe>
                    <template v-slot="{ isSubmitting, canSubmit }">
                        <NuxtButton type="submit" class="w-full" :disabled="!canSubmit">
                            {{ isSubmitting ? '...' : $t('contact.form.submit') }}
                        </NuxtButton>
                    </template>
                </form.Subscribe>
            </div>
            <div class="mt-3 block w-full">
                <small class="text-center w-full block dark:text-gray-300">
                    {{ $t('contact.form.note') }}
                </small>
            </div>
        </form>
    </section>
</template> 
