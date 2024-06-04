export function getShortDate(date: string) {
    return new Date(date).toLocaleDateString("fi-FI");
}

export function formatDateForInput(date: string) {
    return new Date(date).toISOString().split("T")[0];
}