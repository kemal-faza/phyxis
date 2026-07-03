'use client';

import { useEffect, type ComponentType } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { StatCard } from '@/features/dashboard/components/StatCard';
import { usePageTitle } from '@/components/layout/PageTitleContext';
import { useAuthStore } from '@/features/auth/stores/authStore';
import { cn } from '@/lib/utils';
import {
	DASHBOARD_STATS,
	TODAY_SCHEDULE,
	RECENT_ACTIVITY,
	MODULE_PROGRESS,
	DOSEN_STATS,
	RECENT_MODULES,
	ASISTEN_STATS,
	ASISTEN_QUEUE,
	ADMIN_STATS,
	PRAKTIKAN_STATS,
} from '@/features/dashboard/data/mockData';
import {
	Thermometer,
	Droplets,
	Wind,
	Zap,
	FlaskConical,
	BarChart3,
	Award,
	CheckCircle,
	Calendar,
	FileText,
	Upload,
	Settings,
} from 'lucide-react';

const STAT_ICONS: Record<
	string,
	{
		icon?: ComponentType<{ size?: number; className?: string }>;
		iconContainerClass?: string;
	}
> = {
	'Active Practicum': {
		icon: FlaskConical,
		iconContainerClass: 'bg-primary/10 text-primary',
	},
	'Average Score': {
		icon: BarChart3,
		iconContainerClass: 'bg-purple/[0.12] text-purple',
	},
	'KPS Level': {
		icon: Award,
		iconContainerClass: 'bg-primary-cyan/[0.12] text-primary-cyan',
	},
	Completion: {
		icon: CheckCircle,
		iconContainerClass: 'bg-success/[0.12] text-success',
	},
};

export default function DashboardPage() {
	const role = useAuthStore((s) => s.role);
	const router = useRouter();

	useEffect(() => {
		if (!role) router.push('/login');
	}, [role, router]);

	usePageTitle('Dashboard');

	if (!role) return null;

	const roleStats =
		role === 'dosen'
			? DOSEN_STATS
			: role === 'asisten'
				? ASISTEN_STATS
				: role === 'admin'
					? ADMIN_STATS
					: PRAKTIKAN_STATS;

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
				<div>
					<p className="text-body font-semibold text-primary">
						Student console &middot; Semester 4
					</p>
					<h1 className="page-title">Selamat datang, Dinda 👋</h1>
					<p className="mt-2 text-body text-muted">
						You have 2 experiments and 1 report due today. Lab A-102
						is live and ready.
					</p>
				</div>
				<div className="flex items-center gap-2 shrink-0">
					<Button
						variant="outline"
						className="bg-white"
						icon={<Calendar size={16} />}
						iconPosition="left">
						Full schedule
					</Button>
					<Button
						icon={<FlaskConical size={16} />}
						iconPosition="left"
						href="/app/simulator">
						Enter Virtual Lab
					</Button>
				</div>
			</div>

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{DASHBOARD_STATS.map((s) => {
					const iconConfig = STAT_ICONS[s.label] ?? {};
					return (
						<StatCard
							key={s.label}
							label={s.label}
							value={s.value}
							icon={iconConfig.icon}
							iconContainerClass={iconConfig.iconContainerClass}
							caption={s.caption}
							change={
								'change' in s ? String(s.change) : undefined
							}
						/>
					);
				})}
			</div>

			<div className="grid gap-4 lg:grid-cols-3">
				<Card className="lg:col-span-2 space-y-4">
					<div className="flex items-start justify-between">
						<div>
							<div className="text-label text-primary uppercase tracking-wide">
								Live experiment
							</div>
							<h2 className="mt-1 font-heading text-headline-sm text-foreground">
								Gerak Parabola — Sesi 03
							</h2>
							<p className="mt-1 text-body text-muted">
								Pengamatan lintasan benda dengan sudut elevasi
								45&deg;.
							</p>
						</div>
						<Badge variant="success">Ongoing</Badge>
					</div>
					<div>
						<div className="mb-1 flex justify-between text-body-sm text-muted">
							<span>Progress</span>
							<span>76%</span>
						</div>
						<Progress value={76} />
					</div>
					<Button
						className="mt-2"
						href="/app/simulator">
						Resume simulation
					</Button>
					<div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
						{[
							{ icon: Thermometer, label: '24.6°C' },
							{ icon: Droplets, label: '56%' },
							{ icon: Wind, label: '620ppm' },
							{ icon: Zap, label: '1.24kW' },
						].map(({ icon: Icon, label }) => (
							<div
								key={label}
								className="flex items-center gap-2 rounded-xl bg-surface p-3">
								<Icon
									size={16}
									className="text-primary"
								/>
								<span className="font-mono text-body text-foreground">
									{label}
								</span>
							</div>
						))}
					</div>
				</Card>

				<Card className="rounded-support border-border bg-card shadow-sm space-y-0 overflow-hidden p-0">
					<div className="flex items-center justify-between border-b border-border px-6 py-4">
						<h3 className="text-body font-semibold text-foreground">
							Today&apos;s schedule
						</h3>
						<span className="text-body-sm text-muted font-semibold">
							{TODAY_SCHEDULE.length} sessions
						</span>
					</div>
					<div className="relative px-6 pb-6 pt-4">
						{/* Vertical timeline line */}
						<div className="absolute left-[20.5px] top-5 bottom-6 w-px bg-border" />
						<div className="space-y-4">
							{TODAY_SCHEDULE.map((s) => (
								<div
									key={s.title}
									className="relative">
									{/* Timeline dot */}
									<div
										className={cn(
											'absolute left-[-8px] top-[5px] h-2.5 w-2.5 rounded-full',
											s.status === 'ongoing'
												? 'bg-primary shadow-[0_0_0_4px] shadow-primary/20'
												: 'bg-border',
										)}
									/>
									<div className="flex ml-3 items-center justify-between">
										<span className="text-body-sm text-muted">
											{s.time}
										</span>
										<Badge
											variant={
												s.status === 'ongoing'
													? 'success'
													: 'neutral'
											}>
											{s.status === 'ongoing'
												? 'Ongoing'
												: 'Upcoming'}
										</Badge>
									</div>
									<p className="mt-1 ml-3 text-body font-semibold text-foreground">
										{s.title}
									</p>
									<p className="text-body-sm ml-3 text-muted">
										{s.location}
									</p>
								</div>
							))}
						</div>
					</div>
				</Card>
			</div>

			<div className="grid gap-4 lg:grid-cols-3">
				<Card className="rounded-support border-border bg-card shadow-sm space-y-0 overflow-hidden p-0">
					<div className="border-b border-border px-6 py-4">
						<h3 className="text-body font-semibold text-foreground">
							Recent activity
						</h3>
					</div>
					<div className="space-y-4 px-6 py-4">
						{RECENT_ACTIVITY.map((a) => {
							const ActivityIcon =
								[FileText, Upload, Settings][a.id - 1] ??
								FileText;
							return (
								<div
									key={a.id}
									className="flex items-start gap-3">
									<div className="h-8 w-8 shrink-0 flex items-center justify-center rounded-app bg-surface text-muted border border-border">
										<ActivityIcon size={16} />
									</div>
									<div className="min-w-0 flex-1">
										<div className="text-body font-semibold text-foreground truncate">
											{a.title}
										</div>
										<div className="text-body-sm text-muted truncate">
											{a.detail}
										</div>
									</div>
									<span className="shrink-0 text-body-sm text-muted">
										{a.time}
									</span>
								</div>
							);
						})}
					</div>
				</Card>

				<Card className="lg:col-span-2 space-y-4">
					<div className="flex items-center justify-between">
						<h2 className="font-heading text-headline-sm text-foreground">
							Modules in progress
						</h2>
						<span className="text-body-sm text-muted">
							{
								MODULE_PROGRESS.filter(
									(m) => m.progress === 100,
								).length
							}{' '}
							of {MODULE_PROGRESS.length} finished
						</span>
					</div>
					<div className="space-y-3">
						{MODULE_PROGRESS.map((m) => (
							<div key={m.id}>
								<div className="mb-1 flex justify-between text-body text-foreground">
									<span>
										{m.id} &mdash; {m.name}
									</span>
									<span className="font-mono text-body-sm">
										{m.progress}%
									</span>
								</div>
								<Progress value={m.progress} />
							</div>
						))}
					</div>
				</Card>
			</div>

			{/* Role-specific recap */}
			<div className="space-y-4">
				<h2 className="font-heading text-headline-md text-foreground">
					{role === 'dosen'
						? 'Rekap Kelas'
						: role === 'asisten'
							? 'Antrian Review'
							: role === 'admin'
								? 'Ringkasan Admin'
								: 'Info Cepat'}
				</h2>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{roleStats.map((s) => (
						<StatCard
							key={s.label}
							label={s.label}
							value={s.value}
							change={
								'change' in s ? String(s.change) : undefined
							}
						/>
					))}
				</div>

				{role === 'dosen' && (
					<Card className="space-y-3">
						<h3 className="font-heading text-headline-sm text-foreground">
							Modul Terbaru
						</h3>
						<div className="space-y-2">
							{RECENT_MODULES.map((mod) => (
								<div
									key={mod.id}
									className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-border bg-surface p-3">
									<div>
										<div className="text-body font-semibold text-foreground">
											{mod.id} &mdash; {mod.name}
										</div>
										<div className="text-body-sm text-muted">
											{mod.participants} praktikan
										</div>
									</div>
									<Badge
										variant={
											mod.status === 'Aktif'
												? 'success'
												: 'neutral'
										}>
										{mod.status}
									</Badge>
								</div>
							))}
						</div>
					</Card>
				)}

				{role === 'asisten' && (
					<Card className="space-y-3">
						<h3 className="font-heading text-headline-sm text-foreground">
							Antrian Review
						</h3>
						<div className="space-y-2">
							{ASISTEN_QUEUE.map((item) => (
								<div
									key={item.nama}
									className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-border bg-surface p-3">
									<span className="text-body text-foreground">
										{item.nama} &mdash; {item.modul}
									</span>
									<Badge
										variant={
											item.status === 'Sudah dinilai'
												? 'success'
												: 'warning'
										}>
										{item.status}
									</Badge>
								</div>
							))}
						</div>
					</Card>
				)}
			</div>
		</div>
	);
}
