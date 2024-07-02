import PropTypes from 'prop-types';
import BoardList from "../BoardList/boardList"
import "./Home.css"

function Home({isFetching, boards, searchInputValue, activeCategory }) {

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
      <BoardList
        boards={boardsToShow}
        isFetching={isFetching}
      />
    </div>
  )
}

Home.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  boards: PropTypes.array.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  activeCategory: PropTypes.string.isRequired,
};

export default Home;