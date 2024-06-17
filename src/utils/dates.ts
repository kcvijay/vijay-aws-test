export function getShortDate(date: Date): string {
  return new Date(date).toLocaleDateString('fi-FI');
}
export function formatDateForInput(date: Date): string {
  return new Date(date).toISOString().split('T')[0];
}
