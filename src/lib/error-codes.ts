export const REACTION_ERROR_CODES = {
  AUTH_REQUIRED: "AUTH_REQUIRED",
  ADD_REACTION_FAILED: "ADD_REACTION_FAILED",
  REMOVE_REACTION_FAILED: "REMOVE_REACTION_FAILED",
  FETCH_DATA_FAILED: "FETCH_DATA_FAILED",
  UNEXPECTED_ERROR: "UNEXPECTED_ERROR",
} as const;

export type ReactionErrorCode =
  (typeof REACTION_ERROR_CODES)[keyof typeof REACTION_ERROR_CODES];

export const DEFAULT_ERROR_MESSAGES: Record<ReactionErrorCode, string> = {
  [REACTION_ERROR_CODES.AUTH_REQUIRED]:
    "Authentication required. Please sign in to react.",
  [REACTION_ERROR_CODES.ADD_REACTION_FAILED]:
    "Failed to add reaction. Please try again.",
  [REACTION_ERROR_CODES.REMOVE_REACTION_FAILED]:
    "Failed to remove reaction. Please try again.",
  [REACTION_ERROR_CODES.FETCH_DATA_FAILED]:
    "Failed to update reaction data. Please refresh the page.",
  [REACTION_ERROR_CODES.UNEXPECTED_ERROR]:
    "An unexpected error occurred. Please try again.",
};

export function getErrorMessage(errorCode: ReactionErrorCode): string {
  return DEFAULT_ERROR_MESSAGES[errorCode];
}
