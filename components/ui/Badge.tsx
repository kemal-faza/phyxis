import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	variant?: 'success' | 'neutral' | 'error' | 'warning';
}

export function Badge({
	className,
	variant = 'neutral',
	...props
}: BadgeProps) {
	return (
		<span
			className={cn(
				'inline-flex items-center rounded-full px-2 py-0.5 text-label-sm text-xs font-semibold',
				{
					'bg-success/15 text-success': variant === 'success',
					'bg-surface text-muted': variant === 'neutral',
					'bg-error/15 text-error': variant === 'error',
					'bg-warning/15 text-warning': variant === 'warning',
				},
				className,
			)}
			{...props}
		/>
	);
}
