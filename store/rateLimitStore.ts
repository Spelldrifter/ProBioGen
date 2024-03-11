// Define a rate limit configuration
const RATE_LIMIT = {
  WINDOW_SIZE: 360 * 60 * 1000, // 360 minutes in milliseconds
  MAX_REQUESTS: 5, // Max requests per IP within the window
};

// In-memory storage for rate limiting
const rateLimitStore: Rec