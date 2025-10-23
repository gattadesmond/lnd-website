import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[400px] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-neutral-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-neutral-700">
          Page Not Found
        </h2>
        <p className="mt-2 text-neutral-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
