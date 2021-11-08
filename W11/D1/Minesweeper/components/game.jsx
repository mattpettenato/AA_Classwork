import Minesweeper from '../minesweeper';
// import Boar

class Game extends React.Component{
    constructor(props) {
      super(props);
      this.minesweeper = new Minesweeper
      this.state = { board: this.minesweeper.board(9, 30) }
    }

    render() {
      return(
        <div>
          <span>
            for (let i = 0; i < ; i++) {
              const element = arr];
              
            }
            for (let index = 0; index < array.length; index++) {
              const element = array[index];
              
            }
          {this.state.board}
          </span>
          <span>
            {this.updateGame}
          </span>
        </div>
      );
    }

    updateGame() {

    }
}