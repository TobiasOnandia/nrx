'use client';
import { Check, Loader2 } from 'lucide-react';
import { setDefaultDashboard } from '@/app/actions/dashboard';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';

export const ButtonUse = ({ id }: { id: string }) => {
  const setDefaultDashboardMutation = useMutation({
    mutationFn: setDefaultDashboard,
    onSuccess: () => {
      toast.success('Dashboard set as default successfully');
    },
    onError: (error) => {
      console.error('Failed to set default dashboard: ', error);
      toast.error(`${error}`);
    },
  });

  return (
    <button
      className="p-2 cursor-pointer bg-emerald-600 hover:bg-emerald-500 rounded-lg"
      title="Use"
      onClick={() => setDefaultDashboardMutation.mutate({ id })}
      disabled={setDefaultDashboardMutation.isPending}
      aria-label={`Use dashboard ${id}`}
    >
      {setDefaultDashboardMutation.isPending ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Check className="w-4 h-4" />
      )}
    </button>
  );
};
