import { HttpStatus } from './';

export const ERROR_MESSAGES: Record<HttpStatus, string> = {
  [HttpStatus.BadRequest]: 'Bad request',
  [HttpStatus.Unauthorized]: 'Unauthorized. Please login again.',
  [HttpStatus.Forbidden]: "Forbidden. You don't have permission.",
  [HttpStatus.NotFound]: 'Resource not found.',
  [HttpStatus.UnprocessableEntity]: 'Validation failed.',
  [HttpStatus.TooManyRequests]: 'Too many requests. Please try again later.',
  [HttpStatus.ServerError]: 'Server error. Try again later.',
};
