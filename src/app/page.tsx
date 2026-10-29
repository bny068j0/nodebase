import { Button } from "@/components/ui/button";
import { cn } from "cn";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button variant="outline" size="default">
        Hello world
      </Button>
    </div>
  );
}
