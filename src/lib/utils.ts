import { clsx, type ClassValue } from "clsx";
import { omitBy } from "lodash-es";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function omitByDeep<T extends object>(
  object: T,
  predicate: (value: unknown, key: string) => unknown,
): T {
  const removedNullProperties = omitBy(object, predicate);
  const entries = Object.entries(removedNullProperties).map(([key, value]) => {
    if (typeof value === "object") {
      return [key, omitByDeep(value!, predicate)];
    }
    return [key, value];
  });
  const result = Object.fromEntries(entries);
  return result;
}
