import type { Metadata, ResolvingMetadata } from "next";

import { assign, cloneDeep, merge } from "lodash-es";

import { omitByDeep } from "./utils";

type GeneratePageMetadataParams = {
  title?: string;
  description?: string;
  url?: string;
  socialImageUrl?: string;
};

export const generatePageMetadata = ({
  description,
  socialImageUrl,
  title,
  url,
}: GeneratePageMetadataParams): ((
  _: unknown,
  resolvingParent: ResolvingMetadata,
) => Promise<Metadata>) => {
  const metadata: Metadata = {};
  if (description) {
    metadata.description = description;
    metadata.openGraph = assign(metadata.openGraph, { description });
  }
  if (socialImageUrl) {
    metadata.openGraph = merge(metadata.openGraph, {
      images: [socialImageUrl],
    });
  }
  if (title) {
    metadata.title = title;
    metadata.openGraph = assign(metadata.openGraph, { title });
  }
  if (url) {
    metadata.alternates = assign(metadata.alternates, { canonical: url });
    metadata.openGraph = assign(metadata.openGraph, { url });
  }
  return async (_, resolvingParent) => {
    const parent = omitByDeep(
      cloneDeep(await resolvingParent),
      (val) => val === null,
    );
    const finalMetadata = merge(parent, metadata);
    return finalMetadata;
  };
};
