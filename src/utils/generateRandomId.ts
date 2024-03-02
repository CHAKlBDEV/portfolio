import crypto from "crypto";

export function generateRandomId(): string {
  return crypto.randomBytes(20).toString("hex");
}
