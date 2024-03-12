const fetchArtworks = async (page) => {
  const LIMIT = 10
  const URL = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${LIMIT}`
  const response = await fetch(URL)
  return await response.json()
}
const fetchArtworkById = async (id) => {
  const URL = `https://api.artic.edu/api/v1/artworks/${id}`
  const response = await fetch(URL)
  return await response.json()
}
