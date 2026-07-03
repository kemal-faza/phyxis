import type { ElementType } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface StatCardProps {
	label: string;
	value: string | number;
	icon?: ElementType<{ size?: number; className?: string }>;
	iconContainerClass?: string;
	caption?: string;
	change?: string;
}

export function StatCard({
	label,
	value,
	icon: Icon,
	iconContainerClass,
	caption,
	change,
}: StatCardProps) {
	return (
		<Card>
			<div className="flex items-center justify-between">
				<span className="text-label-sm text-muted">{label}</span>
				{Icon && (
					<div
						className={cn(
							'h-8 w-8 flex items-center justify-center rounded-app',
							iconContainerClass,
						)}>
						<Icon size={16} />
					</div>
				)}
			</div>
			<div className="mt-4 font-heading text-headline-xl text-foreground">
				{value}
			</div>
			{(change || caption) && (
				<div className="mt-2 flex items-center gap-1.5">
					{change && <Badge variant="success">{change}</Badge>}
					{caption && (
						<span className="text-body-sm text-muted">
							{caption}
						</span>
					)}
				</div>
			)}
		</Card>
	);
}
