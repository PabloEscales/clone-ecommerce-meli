import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor={minPriceFilterId} style={{color: '#51567A'}}>Min price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1500'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span style={{color: '#51567A'}}>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId} style={{color: '#51567A'}}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>

    </section>
  )
}
