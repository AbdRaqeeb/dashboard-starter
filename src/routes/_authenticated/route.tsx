import { createFileRoute } from '@tanstack/react-router';
import { AuthenticatedLayout } from '@/layouts/authenticated.tsx';

export const Route = createFileRoute('/_authenticated')({
	component: AuthenticatedLayout,
});
