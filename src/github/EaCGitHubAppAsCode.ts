import { EaCDetails } from "./.deps.ts";
import {
  EaCGitHubAppDetails,
  isEaCGitHubAppDetails,
} from "./EaCGitHubAppDetails.ts";

export type EaCGitHubAppAsCode = {
  CloudLookup?: string;

  KeyVaultLookup?: string;
} & EaCDetails<EaCGitHubAppDetails>;

export function isEaCGitHubAppAsCode(
  app: unknown,
): app is EaCGitHubAppAsCode {
  const x = app as EaCGitHubAppAsCode;

  return (
    x.CloudLookup !== undefined &&
    typeof x.CloudLookup === "string" &&
    x.Details !== undefined &&
    isEaCGitHubAppDetails(x.Details) &&
    x.KeyVaultLookup !== undefined &&
    typeof x.KeyVaultLookup === "string"
  );
}
