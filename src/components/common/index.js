export function SearchComponent({ onSearch }) {
  return (
    <input
      type='text'
      placeholder='Search'
      onChange={(e) => onSearch(e.target.value)}
    />
  )
}
const defaultCategories = [
  'Modern Art, Essentials',
  'Prints and Drawings',
  'Contemporary Art',
  'painting, european painting',
  'Painting and Sculpture of Europe',
]
export function FilterComponent({
  onFilter,
  optionsArray = defaultCategories,
}) {
  const renderOptions = () => {
    return optionsArray.map((option, index) => (
      <option key={index}>{option}</option>
    ))
  }
  const handleChange = (event) => {
    const selectedCategory = event.target.value
    onFilter(selectedCategory)
  }
  return (
    <select onChange={handleChange}>
      <option value=''>Select a category</option>
      {renderOptions()}
    </select>
  )
}
