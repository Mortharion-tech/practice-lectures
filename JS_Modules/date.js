// exporting function, can be used in another file with 'import' now
export function getFormattedDate(date) {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString('en-GB');
}

// exporting variables in the same way
/* export */ const DEFAULT_DATE_FORMAT = 'dd/mm/yyyy';
// exporting with an alias instead, import in another file only using alias
export { DEFAULT_DATE_FORMAT as defaultDateFormat };