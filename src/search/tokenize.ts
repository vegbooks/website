const tokenPattern = /[\p{L}\p{N}]+/gu;

export function normalizeText(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLocaleLowerCase('en-US');
}

export function tokenize(value: string): string[] {
  return normalizeText(value).match(tokenPattern) ?? [];
}
