export const checkRequired = (value:string) => !value || value.trim() === '';

export const checkValidEmail = (value:string) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(value) ? false : true;
}

export const checkIpV4 = (value: string) => {
    const pattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return pattern.test(value) ? false : true;
}

export const checkIpV4CIDR = (value: string) => {
    const pattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}\/(?:[0-9]{1,2})$/;
    return pattern.test(value) ? false : true;
}

export const checkMinChars = (value: string, min: number) => {
    return value?.length < min;
}

export const checkMaxChars = (value: string, max: number) => {
    return value?.length > max;
}