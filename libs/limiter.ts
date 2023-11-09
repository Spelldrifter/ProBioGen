import { RateLimitError } from "./errors";
import { getUserIp } from "./get-ip";

const PRUNE_INTERVAL = 60 * 1000; // 1 minute

// Typing for tracker objects
interface Tracker {
  count: number;
  expiresA