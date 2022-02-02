export const required = (value) => {
    if (value) return undefined;
    return value = 'Field is required'
}

export const maxLengthCreator = (length) => (value) => {
    if (value.length > length) return `value must be less then ${length} symbols`;
    return undefined;
}