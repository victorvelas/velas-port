<script lang="ts" setup>
import { computed } from "vue";
import DropDownMenu from "../forms/DropDown/DropDownMenu.vue";
import type { DropdownItem } from "~/utils/web/DropDown.js";
import { useI18n } from 'vue-i18n'

const { locale, locales: locs, setLocale } = useI18n();

const readLocales = computed(() => {
    return (locs.value as Array<any>).map((item) => ({
        value: item.code,
        label: item.name,
        language: item.language
    }));
});

const handleChangeLocale = async (item: DropdownItem | undefined) => {
    if (!item?.value) return;
    const newLocal: string = item.value;
    setLocale(newLocal as any);
};
</script>
<template>
    <DropDownMenu :model-value="locale" :items="readLocales" @on-select="handleChangeLocale" />
</template>
