import fetch from "node-fetch"

export interface TAutoLintPackageInfo {
  name: string
  "dist-tags": {
    latest: string
  }
}

export async function get<T>(url: string): Promise<T> {
  const response = await fetch(url)
  return response.json() as any
}