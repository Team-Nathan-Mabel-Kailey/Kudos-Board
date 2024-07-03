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
  const [filteredBoards, setFilteredBoards] = useState([]);
  const [addingNewBoard, setAddingNewBoard] = useState(false);
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
    } catch (error) {
      console.error("Error getting boards:", error);
    }
  };

  const filterBoards = (searchTerm) => {
    const filtered = boards.filter((board) =>
      board.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBoards(filtered);
  };

  const createBoard = () => {
    fetchBoards();
    setAddingNewBoard(false);
  }
  
  const deleteBoard = async (boardId) => {
    try {
      await axios.delete(baseUrl + `boards/${boardId}`);
      fetchBoards();
    } catch (error){
    console.error("Error deleting board:", error);
    }
  };

  const showModal = () => {
    setAddingNewBoard(!addingNewBoard);
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
          <button className="button-common create-btn" onClick={showModal}>
            Create a New Board
          </button>
          {addingNewBoard && (
            <BoardModal show={addingNewBoard}
            onCreation={createBoard}
            onClose={showModal}/>
          )}
        </div>
      </div>
      
      <section className="board-display">
        {filteredBoards.map((board) => (
          <div key={board.board_id} className="home-card card">
            <img
              src={`https://picsum.photos/200/300?random=${board.board_id}`}
              alt={board.title}
            />
            <h3>{board.title}</h3>
            <p>{board.category}</p>
            <div className="card-buttons">
              {/* Connection to boardList.jsx in App.jsx */}
              <Link to={`/boards/${board.board_id}`} className="button-common view-board">
                View Board
              </Link> 
              <button className="button-common delete-board" onClick={() => deleteBoard(board.board_id)}>
                Delete Board
              </button>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Home;