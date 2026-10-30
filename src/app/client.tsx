"use client";

import { Button } from '@/components/ui/button';
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react'
import { signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const Client = () => {
  const router = useRouter();
  const trpc = useTRPC();
  const { data: users } = useSuspenseQuery(trpc.users.queryOptions());

  return (
    <div className='flex flex-col gap-4 items-center'>
      {JSON.stringify(users)}
      
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