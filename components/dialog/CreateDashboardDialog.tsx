import { ChartPieIcon, PlusIcon, SparklesIcon } from 'lucide-react';
import { useActionState, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createDashboard } from '@/app/actions/dashboard';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const CreateDashboardDialog = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
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

  const [, formAction, isLoading] = useActionState(
    (state: void | null, formData: FormData) => {
      const dashboardName = formData.get('dashboard-name') as string;
      createMutation.mutate({ name: dashboardName });
    },
    null,
  );

  return (
    <>
      <button
        popoverTarget="create-dashboard-dialog"
        className={`${className}`}
      >
        {children}
      </button>

      <dialog
        id="create-dashboard-dialog"
        popover="auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm h-screen w-screen  z-50"
      >
        <div className="bg-gray-900 border border-gray-700 mx-auto mt-48 rounded-xl p-6 w-full max-w-md shadow-2xl">
          <header className="text-center mb-6">
            <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 bg-emerald-500/10 rounded-full">
              <ChartPieIcon
                className="w-8 h-8 text-emerald-400"
                aria-hidden="true"
              />
            </div>
            <h3
              id="dialog-title"
              className="text-xl font-semibold text-gray-100 mb-2"
            >
              Create New Dashboard
            </h3>
            <p id="dialog-description" className="text-gray-400">
              Organize your crypto analytics dashboards
            </p>
          </header>

          <form action={formAction} className="space-y-5">
            <div>
              <label
                htmlFor="dashboard-name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Dashboard Name
              </label>
              <input
                type="text"
                id="dashboard-name"
                name="dashboard-name"
                placeholder="Ej: My Portfolio"
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                autoFocus
                maxLength={40}
                required
                aria-describedby="name-description"
              />
              <p id="name-description" className="mt-2 text-sm text-gray-400">
                Maximum 40 characters - Only letters, numbers and spaces
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                popoverTarget="create-dashboard-dialog"
                className="px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Cancel and close dialog"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                aria-label="Create dashboard"
              >
                <SparklesIcon aria-hidden="true" className="w-5 h-5" />
                Create Dashboard
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
