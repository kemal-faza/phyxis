export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(Boolean)
}

export function scoreAnswer(answer: string, key: string): number {
  const answerTokens = new Set(tokenize(answer))
  const keyTokens = tokenize(key)
  if (keyTokens.length === 0) return 0
  const matched = keyTokens.filter((token) => answerTokens.has(token)).length
  return Math.round((matched / keyTokens.length) * 100)
}
