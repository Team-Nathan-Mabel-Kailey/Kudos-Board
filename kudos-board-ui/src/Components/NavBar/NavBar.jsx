import "./NavBar.css"

function NavBar({ activeCategory, setActiveCategory, searchInputValue, handleOnSearchInputChange }) {
  const categories = ["All", "Recent", "Celebration", "Thank You", "Inspiration"];

  return (
    <nav className="NavBar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={searchInputValue}
              onChange={handleOnSearchInputChange}
            />
          </div>
        </div>

        <div className="row">
          <ul className={`category-menu`}>
            {categories.map((category) => (
              <li className={activeCategory === category ? "is-active" : ""} key={category}>
                <button onClick={() => setActiveCategory(category)}>{category}</button>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default NavBar;