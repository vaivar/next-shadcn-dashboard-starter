import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import type { ChevronProps } from 'react-day-picker';

export function ChevronComponent({
  orientation = 'left',
  disabled,
  size = 16,
}: ChevronProps) {
  const base = 'size-4 transition-opacity';
  const opacity = disabled ? 'opacity-40' : 'opacity-100';

  switch (orientation) {
    case 'left':
      return (
        <ChevronLeftIcon
          className={cn(base, opacity)}
          width={size}
          height={size}
        />
      );
    case 'right':
      return (
        <ChevronRightIcon
          className={cn(base, opacity)}
          width={size}
          height={size}
        />
      );
    case 'up':
      return (
        <ChevronLeftIcon
          className={cn(base, opacity, 'rotate-90')}
          width={size}
          height={size}
        />
      );
    case 'down':
      return (
        <ChevronLeftIcon
          className={cn(base, opacity, '-rotate-90')}
          width={size}
          height={size}
        />
      );
    default:
      return (
        <ChevronLeftIcon
          className={cn(base, opacity)}
          width={size}
          height={size}
        />
      );
  }
}
