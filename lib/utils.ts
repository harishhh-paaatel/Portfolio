export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(' ');
}

export function formatNumber(value: number) {
  return `${value}%`;
}
