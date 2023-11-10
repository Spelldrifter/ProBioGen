import { RateLimitError } from "./errors";
import { getUserIp } from "./get-ip";

const PRUNE_INTERVAL = 60 * 1000; // 1 minute

// Typing for tracker objects
interface Tracker {
  count: number;
  expiresAt: number;
}

// Record of IP or custom keys to Tracker objects
const trackers: Record<string, Tracker> = {};

function pruneTrackers() {
  const now = Date.now();
  Object.keys(trackers).forEach(key => {
    if (trackers[key].expiresAt < now)