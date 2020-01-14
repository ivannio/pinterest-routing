import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import boardShape from '../../../helpers/propz/boardShape';

import './Board.scss';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    deleteBoard: PropTypes.func,
  }

  deleteBoardEvent = (e) => {
    e.preventDefault();
    const { deleteBoard, board } = this.props;
    deleteBoard(board.id);
  }

  render() {
    const boardId = this.props.board.id;
    return (
      <div className="board">
        <button className="btn btn-danger" onClick={this.deleteBoardEvent}>X</button>
        <h1 className="board-title">{this.props.board.name}</h1>
        <p className="board-description">{this.props.board.description}</p>
        <Link className="btn btn-outline-success" to={`/board/${this.props.board.id}`}>View Board</Link>
        <Link className="btn btn-outline-warning" to={`board/${boardId}/edit`}>Edit Board</Link>
      </div>
    );
  }
}

export default Board;
