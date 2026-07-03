import { cn } from '@/lib/utils';

export function LandingContainer({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<div
			className={cn(
				'mx-auto max-w-7xl px-4 md:px-8 lg:px-12 xl:px-20',
				className,
			)}>
			{children}
		</div>
	);
}
