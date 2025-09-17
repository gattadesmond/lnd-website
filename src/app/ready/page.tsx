import { notFound } from "next/navigation";

export default async function Ready() {
  if (process.env.NEXT_APP_BUILD === "on") {
    return notFound();
  }

  return <>Ready</>;
}
