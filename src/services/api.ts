import createClient from "openapi-fetch"

const API_URL = process.env.API_URL

const customFetch: typeof fetch = async (url, init) => {
  return fetch(url, {
    ...init,
    headers: {
      ...init?.headers,
    }
  }).then( async response => {
    if (!response.ok) throw await response.json()
    return response
  })
}

export const api = createClient({
  baseUrl: API_URL,
  fetch: customFetch,
})