import { headers } from "next/headers";

export function getUserIp() {
  const forwardedFor = headers().get("x-forwarded-for");
