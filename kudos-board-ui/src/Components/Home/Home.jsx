import BoardList from "../BoardList/boardList"
import NavBar from "../NavBar/NavBar"
import BoardModal from "../BoardModal/BoardModal.jsx"
import "./Home.css"

function Home({isFetching, boards, searchInputValue, activeCategory, setActiveCategory, handleOnSearchInputChange, newBoard, setNewBoard }) {

  // Filters boards by the active category if it is not 'All Categories'.
  const boardsByCategory =
    Boolean(activeCategory) && activeCategory !== "All Categories"
      ? boards.filter((p) => p.category === activeCategory)
      : boards

  // Filters boards by the active category if it is not 'All Categories',
  // then further filters the result by the search input value if it is not empty.
  const boardsToShow = Boolean(searchInputValue)
    ? boardsByCategory.filter((p) => p.name.toLowerCase().indexOf(searchInputValue.toLowerCase()) !== -1)
    : boardsByCategory

  return (
    <div className="Home">
      <NavBar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchInputValue={searchInputValue}
            handleOnSearchInputChange={handleOnSearchInputChange}
      />
      <button onClick={() => setNewBoard(true)}>Create a New Board</button>
      <BoardList
        boards={boardsToShow}
        isFetching={isFetching}
      />
      {newBoard && (
        <BoardModal 
            show={newBoard !== false}
            onClose={() => setNewBoard(false)}
        />
      )}
    </div>
  )
}

export default Home;