import { notFound } from "next/navigation";

import { generatePage } from "@/lib/generatePage";

const Ready = generatePage(() => {
  if (process.env.NEXT_APP_BUILD === "on") {
    return notFound();
  }

  return <>Ready</>;
});

export default Ready;
