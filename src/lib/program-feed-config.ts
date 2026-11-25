import 'server-only'

export function getProgramFeedBaseUrl(): string | undefined {
  const value = process.env.PROGRAM_FEED_BASE_URL?.trim()
  if (!value) return undefined

  try {
    const url = new URL(value)
    if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) return undefined
    if (!url.pathname.endsWith('/')) url.pathname += '/'
    return url.href
  } catch {
    return undefined
  }
}
