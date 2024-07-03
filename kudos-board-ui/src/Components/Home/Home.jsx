import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import BoardModal from "../BoardModal/BoardModal"
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'


// what is it: list of all boards
const Home = () => {
  const [boards, setBoards] = useState([]);
  const [addNew, setAddNew] = useState(false);
  const [filteredBoards, setFilteredBoards] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Recent", "Celebration", "Thank You", "Inspiration"];

  const baseUrl = "http://localhost:3000/";

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const response = await axios.get(baseUrl + "boards");
      setBoards(response.data);
      setFilteredBoards(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error displaying boards:", error);
    }
  };

  const showModal = () => {
    setAddNew(!addNew);
  };

  const handleOnCreateBoard = () => {
    fetchBoards();
    setAddNew(false);
}

  const deleteBoard = async (boardId) => {
    try{
      console.log("deleting board", boardId);
      await axios.delete(baseUrl + `boards/${boardId}`);
      fetchBoards();
    } catch (error){
    console.error("Error deleting board:", error);
    }
  };
  
  /*const boardsByCategory =
    activeCategory && activeCategory !== "All"
      ? boards.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())
      : boards

  console.log(activeCategory);
  console.log(boards);

  const boardsToShow = searchInputValue
    ? boardsByCategory.filter((p) => p.title.toLowerCase().indexOf(searchInputValue.toLowerCase()) !== -1)
    : boardsByCategory*/

    const displayBoards = () => {
      return filteredBoards.map((board) => (
        <div key={board.board_id} className="board-card card">
          <img
            src={`https://picsum.photos/200/300?random=${board.board_id}`}
            alt={board.title}
          />
          <h3>{board.title}</h3>
          <p>{board.category}</p>
          <div className="card-buttons">
            <Link to={`/boards/${board.board_id}`} className="button-common view-board">
            View Board
          </Link>
            <button className="button-common delete-board" onClick={() => deleteBoard(board.board_id)}>
              Delete Board
            </button>
          </div>
        </div>
      ));
    };

    const handleCategoryClick = (category) => {
      setActiveCategory(category);
      if (category === "All") {
        setFilteredBoards(boards);
      } else if (category === "Recent") {
        const sortedByDate = [...boards].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setFilteredBoards(sortedByDate);
      } else {
        const filtered = boards.filter((board) => board.category.toLowerCase() === category.toLowerCase());
        setFilteredBoards(filtered);
      }
    };
  
    const handleSearchInputChange = (e) => {
      setSearchInputValue(e.target.value);
      filterBoards(e.target.value);
    };
  
    const filterBoards = (searchTerm) => {
      const filtered = boards.filter((board) =>
        board.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBoards(filtered);
    };

  return (
    <div className="home">
      <Header />

      <div className="nav-bar">
        <main className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchInputValue}
            onChange={handleSearchInputChange}
          />
        </main>

        <div className="category-buttons ">

              {categories.map((cat) => (
                <li className={activeCategory === cat ? "is-active" : ""} key={cat}>
                  <button className="button-common category-button" onClick={() => handleCategoryClick(cat)}>{cat}</button>
                </li>
              ))}

        </div>

        <div className="button-container">
          <button className="button-common create-brd-btn" onClick={showModal}>
            Create a New Board
          </button>
          {addNew && (
            <BoardModal show={addNew}
            onCreation={handleOnCreateBoard}
            onClose={showModal}/>
          )}
        </div>
      </div>
      
      <section className="board-list">{displayBoards()}</section>
      <Footer />
    </div>
  );
};

export default Home;