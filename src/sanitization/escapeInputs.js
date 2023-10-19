const escapedKeys = {'<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quote;'};
const escapeInputStr = (string) => {
    const sanitizedString = string.split().map((character) => {
        if (character in escapedKeys){
            return escapedKeys[character];
        }
        else {
            return character;
        }
    })
    return sanitizedString;
}

export { escapeInputStr }