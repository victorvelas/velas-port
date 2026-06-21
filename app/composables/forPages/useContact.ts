import { useForm } from "@tanstack/vue-form";
import { computed } from "vue";

export type ContactData = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

export const useContact = (formData: ContactData|null = null, handleSubmit: (value: ContactData) => Promise<void>) => {
    const form = useForm({
        defaultValues: formData ?? ({
            name: '',
            email: '',
            subject: '',
            message: ''
        } as ContactData),
        onSubmit: async ({ value }) => {
            handleSubmit(value);
            console.log(value)
        },
    })

    return form;
};
