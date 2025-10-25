import { AudioWaveform, Command, GalleryVerticalEnd, LayoutDashboard, Package } from 'lucide-react';
import { type SidebarData } from '../types.ts';

export const sidebarData: SidebarData = {
	user: {
		name: 'satnaing',
		email: 'satnaingdev@gmail.com',
		avatar: '/avatars/shadcn.jpg',
	},
	teams: [
		{
			name: 'Shadcn Admin',
			logo: Command,
			plan: 'Vite + ShadcnUI',
		},
		{
			name: 'Acme Inc',
			logo: GalleryVerticalEnd,
			plan: 'Enterprise',
		},
		{
			name: 'Acme Corp.',
			logo: AudioWaveform,
			plan: 'Startup',
		},
	],
	navGroups: [
		{
			title: 'General',
			items: [
				{
					title: 'Dashboard',
					url: '/',
					icon: LayoutDashboard,
				},
				{
					title: 'Apps',
					url: '/apps',
					icon: Package,
				},
			],
		},
	],
};
