import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formattedDate(data: string) {
  return new Date(data).toISOString().split('T')[0];
}

export function formattedTime(data: string) {
  return new Date(data).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
}
export function formattedDayMonth(data: string) {
  return new Date(data).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short'
  });
}