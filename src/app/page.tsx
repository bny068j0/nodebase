import { Button } from "@/components/ui/button";
import { cn } from "cn";
import prisma from "../../lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany({
    
  });


  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      {JSON.stringify(users, null, 2)}
    </div>
  );
}
