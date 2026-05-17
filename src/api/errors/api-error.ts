import { ApiValidationError } from '../../types/api.types';

export class ApiError extends Error {
  public readonly status: number;
  public readonly validationErrors?: ApiValidationError[];
  public readonly originalError?: unknown;

  constructor(
    message: string,
    status: number,
    validationErrors?: ApiValidationError[],
    originalError?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.validationErrors = validationErrors;
    this.originalError = originalError;

    // Restore prototype chain
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static fromAxiosError(error: any): ApiError {
    const status = error.response?.status || 500;
    const data = error.response?.data;

    let message = 'An unexpected network error occurred.';
    let validationErrors: ApiValidationError[] | undefined;

    if (data) {
      message = data.message || message;
      validationErrors = data.errors; // Standard structure from backend
    } else if (error.message) {
      message = error.message;
    }

    return new ApiError(message, status, validationErrors, error);
  }
}
