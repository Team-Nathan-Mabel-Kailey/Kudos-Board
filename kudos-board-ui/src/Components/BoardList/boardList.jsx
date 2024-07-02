import PropTypes from 'prop-types';
import Card from "../Card/Card"
import "./BoardList.css"

function BoardList({ boards = [] }) {

  return (
    <div id="View" className="BoardList">
      <div className="content">
        <div className="list">

          {!boards?.length ? (
            <div className="board">
              <p>No boards available</p>
            </div>
          ) : boards.map((board) => (
            <Card
              key={board.id}
              board={board}
            />
          ))}
        </div>
      </div>
    </div>
  )

}

BoardList.propTypes = {
  boards: PropTypes.array
};

export default BoardList;