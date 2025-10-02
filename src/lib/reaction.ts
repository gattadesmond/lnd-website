export type ReactionsDetails = Record<
  string,
  {
    total: number;
    users: { id: string; fullName: string; avatarUrl: string }[];
  }
>;

export const sortReactionsDetails = (
  details: ReactionsDetails,
  emojis: string[],
): ReactionsDetails => {
  return Object.fromEntries(
    Object.entries(details).sort((a, b) => {
      return (
        b[1].total - a[1].total || emojis.indexOf(a[0]) - emojis.indexOf(b[0])
      );
    }),
  );
};

// Utility function to preserve emoji order when updating state
export function preserveEmojiOrder(
  prevReactions: ReactionsDetails,
  newReactions: ReactionsDetails,
): ReactionsDetails {
  const orderedData: ReactionsDetails = {};

  // First, add existing keys in their current order
  Object.keys(prevReactions).forEach((key) => {
    if (newReactions[key]) {
      orderedData[key] = newReactions[key];
    }
  });

  // Then add any new keys that weren't in the previous state
  Object.keys(newReactions).forEach((key) => {
    if (!orderedData[key]) {
      orderedData[key] = newReactions[key];
    }
  });

  return orderedData;
}
