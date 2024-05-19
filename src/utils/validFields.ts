export const isHasNumber = (value: string) => {
    const regex = /\d/;
    return regex.test(value);
};

export const isHasALetter = (value: string) => {
    const regex = /^(?=.*[a-zA-Z]).{1,}$/;
    return regex.test(value);
};

export const isHasSpecialCharacter = (value: string) => {
    const regex = /[!@#$%^&*]/;
    return regex.test(value);
}