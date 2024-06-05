export function getShortDate(date: Date) {
  return new Intl.DateTimeFormat('fi-FI').format(date);
}

export function formatDateForInput(date: string) {
  return new Date(date).toISOString().split('T')[0];
}
