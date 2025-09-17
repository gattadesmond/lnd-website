import { notFound } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PageProps = any;

export const generatePage = (
  callback: (pageProps: PageProps) => React.ReactNode,
) => {
  return function Page(pageProps: PageProps) {
    if (process.env.NEXT_APP_BUILD === "on") {
      notFound();
    }
    return callback(pageProps);
  };
};
