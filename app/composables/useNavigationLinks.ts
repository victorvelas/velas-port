import { computed } from "vue";
import { useI18n } from 'vue-i18n'

export const useNavigationLinks = () => {
    const { t } = useI18n();
    const navigationLinks = computed(() => [
        { name: t('common.menu.home'), to: '/' },
        { name: t('common.menu.about'), to: '/about-me' },
        { name: t('common.menu.projects'), to: '/my-projects' },
        { name: t('common.menu.contact'), to: '/contact' }
    ]);

    return { navigationLinks };
}