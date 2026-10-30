"use client";

import { Button } from '@/components/ui/button';
import { useTRPC } from '@/trpc/client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const Client = () => {
  const router = useRouter();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: workflows } = useQuery(trpc.getWorkflows.queryOptions());

  const mutation = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: ( data ) => {
        queryClient.invalidateQueries({ queryKey: trpc.getWorkflows.queryKey() });
        toast.success(data.message || "Workflow created successfully");
    }
  }));

  return (
    <div className='flex flex-col gap-4 items-center'>
      {JSON.stringify(workflows, null, 2)}

      <Button className="block w-2xl" onClick={() => mutation.mutate()}>
        Create Workflow
      </Button>
      
      <Button className="block w-2xl" onClick={() => signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/login");
                  },
                },
              })}>
        Logout
      </Button>
    </div>
  )
}

export default Client