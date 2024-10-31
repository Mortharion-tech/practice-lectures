export function getFormattedDate(date) {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString('en-GB');
}