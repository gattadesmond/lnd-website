// General error codes
export const GENERAL_ERROR_CODES = {
  AUTH_REQUIRED: "AUTH_REQUIRED",
  FETCH_DATA_FAILED: "FETCH_DATA_FAILED",
  UNEXPECTED_ERROR: "UNEXPECTED_ERROR",
} as const;

// Reaction-specific error codes
export const REACTION_ERROR_CODES = {
  ...GENERAL_ERROR_CODES,
  ADD_REACTION_FAILED: "ADD_REACTION_FAILED",
  REMOVE_REACTION_FAILED: "REMOVE_REACTION_FAILED",
} as const;

// Commenting-specific error codes
export const COMMENTING_ERROR_CODES = {
  ...GENERAL_ERROR_CODES,
  ADD_COMMENT_FAILED: "ADD_COMMENT_FAILED",
  UPDATE_COMMENT_FAILED: "UPDATE_COMMENT_FAILED",
  DELETE_COMMENT_FAILED: "DELETE_COMMENT_FAILED",
  ADD_COMMENT_REACTION_FAILED: "ADD_COMMENT_REACTION_FAILED",
  REMOVE_COMMENT_REACTION_FAILED: "REMOVE_COMMENT_REACTION_FAILED",
} as const;

// Combined error codes for convenience
export const ALL_ERROR_CODES = {
  ...GENERAL_ERROR_CODES,
  ...REACTION_ERROR_CODES,
  ...COMMENTING_ERROR_CODES,
} as const;

export type GeneralErrorCode =
  (typeof GENERAL_ERROR_CODES)[keyof typeof GENERAL_ERROR_CODES];
export type ReactionErrorCode =
  (typeof REACTION_ERROR_CODES)[keyof typeof REACTION_ERROR_CODES];
export type CommentingErrorCode =
  (typeof COMMENTING_ERROR_CODES)[keyof typeof COMMENTING_ERROR_CODES];
export type ErrorCode = (typeof ALL_ERROR_CODES)[keyof typeof ALL_ERROR_CODES];

export const DEFAULT_ERROR_MESSAGES: Record<ErrorCode, string> = {
  // General errors
  [GENERAL_ERROR_CODES.AUTH_REQUIRED]:
    "Authentication required. Please sign in.",
  [GENERAL_ERROR_CODES.FETCH_DATA_FAILED]:
    "Failed to fetch data. Please refresh the page.",
  [GENERAL_ERROR_CODES.UNEXPECTED_ERROR]:
    "An unexpected error occurred. Please try again.",

  // Reaction errors
  [REACTION_ERROR_CODES.ADD_REACTION_FAILED]:
    "Failed to add reaction. Please try again.",
  [REACTION_ERROR_CODES.REMOVE_REACTION_FAILED]:
    "Failed to remove reaction. Please try again.",

  // Commenting errors
  [COMMENTING_ERROR_CODES.ADD_COMMENT_FAILED]:
    "Failed to add comment. Please try again.",
  [COMMENTING_ERROR_CODES.UPDATE_COMMENT_FAILED]:
    "Failed to update comment. Please try again.",
  [COMMENTING_ERROR_CODES.DELETE_COMMENT_FAILED]:
    "Failed to delete comment. Please try again.",
  [COMMENTING_ERROR_CODES.ADD_COMMENT_REACTION_FAILED]:
    "Failed to like comment. Please try again.",
  [COMMENTING_ERROR_CODES.REMOVE_COMMENT_REACTION_FAILED]:
    "Failed to unlike comment. Please try again.",
};

export function getErrorMessage(errorCode: ErrorCode): string {
  return DEFAULT_ERROR_MESSAGES[errorCode];
}
