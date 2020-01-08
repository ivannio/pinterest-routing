import React from 'react';
import { Link } from 'react-router-dom';

import boardShape from '../../../helpers/propz/boardShape';

import './Board.scss';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
  }

  render() {
    return (
      <div className="board">
        <h1 className="board-title">{this.props.board.name}</h1>
        <p className="board-description">{this.props.board.description}</p>
        <Link className="btn btn-outline-success" to={`/board/${this.props.board.id}`}>View Board</Link>
      </div>
    );
  }
}

export default Board;
