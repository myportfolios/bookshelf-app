export const fetchArtworks = async (activePage) => {
  try {
    const LIMIT = 10
    const URL = `https://api.artic.edu/api/v1/artworks?page=${activePage}&limit=${LIMIT}`
    const response = await fetch(URL)
    return await response.json()
  } catch (err) {
    console.error(`error fetching books ${err}`)
  }
}
export const fetchArtworkById = async (id) => {
  try {
    const URL = `https://api.artic.edu/api/v1/artworks/${id}`
    const response = await fetch(URL)
    return await response.json()
  } catch (err) {
    console.error(`error fetching books`)
  }
}
