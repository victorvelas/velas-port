<script lang="ts" setup>

const { field } = defineProps({
    field: {
        /** @ts-ignore  */
        type: Object,
        required: true
    }
})

const handleBlur = (): void => {
    field.handleBlur();
}

const handleInput = (e: InputEvent) => {
    const newValue:string = (e.target as HTMLInputElement).value;
    return field.handleChange(newValue);
}

</script>
<template>
    <textarea 
        :name="field.name"
        :id="field.name" 
        :value="field.state.value"
        @blur="handleBlur"
        @input="handleInput"
        class="block border light:border-bod/8 dark:border-bol/30 light:bg-bod/1 dark:bg-bol/2 focus:border-main-400 duration-200 outline-0 w-full mb-3 py-2 px-3 rounded-lg"
        rows="8"
    ></textarea>
</template>
