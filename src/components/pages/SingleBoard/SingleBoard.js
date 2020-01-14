import React from 'react';
import { Link } from 'react-router-dom';
import './SingleBoard.scss';

import boardData from '../../../helpers/data/boardData';
import pinData from '../../../helpers/data/pinData';

import Pin from '../../shared/Pin/Pin';

class SingleBoard extends React.Component {
  state = {
    board: [],
    pins: [],
  }

  getPinData = (boardId) => {
    pinData.getPinsByBoardId(boardId)
      .then((pins) => this.setState({ pins }))
      .catch((error) => console.error('error getting pins', error));
  }

  componentDidMount() {
    const { boardId } = this.props.match.params;
    boardData.getSingleBoard(boardId)
      .then((response) => {
        this.setState({ board: response.data });
        this.getPinData(boardId);
      });
  }

  deletePin = (pinId) => {
    const { boardId } = this.props.match.params;
    pinData.deletePin(pinId)
      .then(() => this.getPinData(boardId))
      .catch((error) => console.error('error deleting pin', error));
  }

  render() {
    const { pins } = this.state;
    const { board } = this.state;
    const { boardId } = this.props.match.params;
    return (
      <>
      <h1>{board.name}</h1>
    <p className="board-name">{board.description}</p>
    <Link className="btn btn-primary" to={`/board/${boardId}/pin/new`}>Add New Pin</Link>
      <div className="SingleBoard">
        {pins.map((pin) => <Pin key={pin.id} pin={pin} deletePin={this.deletePin} />)}
      </div>
      </>
    );
  }
}

export default SingleBoard;
