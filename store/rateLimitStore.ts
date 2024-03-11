// Define a rate limit configuration
const RATE_LIMIT = {
  WINDOW_SIZE: 360 * 60 * 1000, // 360 minutes in milliseconds
  MAX_REQUESTS: 5, // Max requests per IP within the window
};

// In-memory storage for rate limiting
const rateLimitStore: Record<string, { requests: number; windowStart: number }> = {};

// Function to check and update rate limit for an IP
export function checkRateLimit(ip: string): boolean {
  if (!ip) {
    return false;
  }
  const currentTime = Date.now();
  const