import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { createDashboard } from '@/app/actions/dashboard';

export const ButtonCreate = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const createMutation = useMutation({
    mutationFn: createDashboard,
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message || 'Dashboard created successfully.');
        if (response.dashboard?.id) {
          router.push(`/dashboard/edit/${response.dashboard.id}`);
        } else {
          console.error('Dashboard created, but redirecting failed.');
          toast.error('Dashboard created, but redirecting failed.');
        }
      } else {
        console.error(
          'Error unexpected while creating dashboard (Server Action):',
          response.message,
          response.errors,
        );
        toast.error(response.message || 'Failed to create dashboard.');
      }
    },
    onError: (error) => {
      console.error(
        'Error unexpected while creating dashboard (useMutation onError): ',
        error,
      );
      toast.error(
        `Connection error or unexpected error: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    },
  });

  return (
    <button
      onClick={() => createMutation.mutate({ name: 'New Dashboard' })}
      className={className}
      disabled={createMutation.isPending}
    >
      {createMutation.isPending ? 'Creating...' : children}
    </button>
  );
};
