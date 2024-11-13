import { EaCGitHubAppAsCode } from "./EaCGitHubAppAsCode.ts";

export type EverythingAsCodeGitHub = {
  GitHubApps?: Record<string, EaCGitHubAppAsCode>;
};

export function isEverythingAsCodeGitHub(
  eac: unknown,
): eac is EverythingAsCodeGitHub {
  const x = eac as EverythingAsCodeGitHub;

  return x.GitHubApps !== undefined;
}
