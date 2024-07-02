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
  const [searchQuery, setSearchQuery] = useState("");

  const baseUrl = "http://localhost:3000/";

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const response = await axios.get(baseUrl + "boards");
      setBoards(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error displaying boards:", error);
    }
  };

  const displayBoards = () => {
    return boards.map((board) => (
      <div key={board.board_id} className="board-card">
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

  const showModal = () => {
    setAddNew(!addNew);
  };

  // const handleOnCreate = () => {
  //   fetchBoards();
  //   setAddNew(false);
  // };

  const deleteBoard = async (boardId) => {
    try{
      console.log("deleting board", boardId);
      await axios.delete(baseUrl + `boards/${boardId}`);
      fetchBoards();
    } catch (error){
    console.error("Error deleting board:", error);
    }
  };

  return (
    <div className="home">
    <Header />

      <main className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </main>

      <div className="category-buttons">
        <button
          className="button-common category-button"
        >
          All
        </button>
        <button
          className="button-common category-button"
        >
          Recent
        </button>
        <button
          className="button-common category-button"
        >
          Celebration
        </button>
        <button
          className="button-common category-button"
        >
          Thank You
        </button>
        <button
          className="button-common category-button"
        >
          Inspiration
        </button>
      </div>

      <div className="button-container">
        <button className="button-common create-brd-btn" onClick={showModal}>
          Create a New Board
        </button>
        {addNew && (
          <BoardModal onClose={showModal} />
        )}
      </div>
      
      <section className="board-list">{displayBoards()}</section>
      <Footer />
    </div>
  );
};

export default Home;