import { Filters } from "./Filters"

export function Header () {
  return (
    <header style={{background: '#FFF059', height: '140px'}}>
      <h1 style={{color: '#51567A'}}>Clone Meli 🛒</h1>
      <Filters />
    </header>
  )
}
