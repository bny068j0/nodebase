import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import Client from "./client";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import { requireAuth } from "@/lib/auth-utils";

export default async function Home() {
  prefetch(trpc.users.queryOptions())
  await requireAuth();

  return (
    <HydrateClient>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </ErrorBoundary>
      </div>
    </HydrateClient>
  );
}
