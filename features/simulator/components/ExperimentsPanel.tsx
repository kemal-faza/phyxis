'use client';

import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ExperimentItem } from '@/features/simulator/data/experiments';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface ExperimentsPanelProps {
	experiments: ExperimentItem[];
	activeId: string | null;
	onSelect: (id: string) => void;
}

export function ExperimentsPanel({
	experiments,
	activeId,
	onSelect,
}: ExperimentsPanelProps) {
	return (
		<aside className="w-full lg:w-[220px] shrink-0">
			{/* Mobile/tablet: Select dropdown */}
			<div className="lg:hidden">
				<label className="text-label-sm text-muted">PILIH MODUL</label>
				<Select
					value={activeId ?? undefined}
					onValueChange={onSelect}>
					<SelectTrigger className="mt-1 w-full">
						<SelectValue placeholder="Pilih modul..." />
					</SelectTrigger>
					<SelectContent>
						{experiments.map((exp) => {
							const isLocked = exp.status === 'locked';
							return (
								<SelectItem
									key={exp.id}
									value={exp.id}
									disabled={isLocked}>
									{exp.id}: {exp.name}
								</SelectItem>
							);
						})}
					</SelectContent>
				</Select>
			</div>

			{/* Desktop: sidebar list */}
			<div className="hidden lg:block">
				<div className="rounded-support border border-border bg-card shadow-sm overflow-hidden">
					<div className="border-b border-border px-6 py-4">
						<h3 className="text-body font-semibold text-foreground">
							Experiments
						</h3>
					</div>
					<div className="flex flex-col gap-1 p-3">
						{experiments.map((exp) => {
							const isActive = activeId === exp.id;
							const isLocked = exp.status === 'locked';

							return (
								<button
									key={exp.id}
									onClick={() => onSelect(exp.id)}
									disabled={isLocked}
									className={cn(
										'flex items-center justify-between gap-5 rounded-app px-3 py-2 text-left transition-colors w-full',
										isActive
											? 'bg-primary/[0.08]'
											: 'hover:bg-surface',
										isLocked &&
											'opacity-40 cursor-not-allowed',
									)}>
									<div className="min-w-0">
										<div
											className={cn(
												'text-body font-semibold truncate',
												isActive
													? 'text-primary'
													: 'text-foreground',
											)}>
											{exp.id}
										</div>
										<div className="text-[10px] leading-[14px] truncate text-muted">
											{exp.name}
										</div>
									</div>
									<ChevronRight
										size={16}
										className="shrink-0 text-muted"
									/>
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</aside>
	);
}
