import React from "react";
import "../Styles/ReactiveTable.css";

class Table extends React.Component {
  state = {
    toggle: false,
    cells: [
      { id: 1, selected: false, toggled: false },
      { id: 2, selected: false, toggled: false },
      { id: 3, selected: false, toggled: false },
      { id: 4, selected: false, toggled: false }
    ]
  };
  constructor() {
    super();
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseDown(id) {
    this.setState({ toggle: true });
    this.setState({
      cells: this.state.cells.map(cell => {
        if (cell.id === id) {
          return {
            id,
            selected: !cell.selected,
            toggled: true
          };
        }
        return cell;
      })
    });
  }

  handleMouseUp() {
    this.setState({ toggle: false });
  }

  handleMouseEnter(id) {
    if (this.state.toggle) {
      this.setState({
        cells: this.state.cells.map(cell => {
          if (cell.id === id) {
            return {
              id,
              selected: !cell.selected,
              toggled: cell.toggled
            };
          }
          return cell;
        })
      });
    }
  }

  handleMouseLeave(id) {
    this.setState({ toggle: false });
    this.setState({
      cells: this.state.cells.map(cell => {
        if (cell.id === id) {
          return {
            id,
            selected: false
          };
        }
        return cell;
      })
    });
  }

  render() {
    return (
      <div className="reable" onMouseUp={() => this.handleMouseUp()}>
        {this.state.cells.map(cell => (
          <div
            style={{ userSelect: "none" }}
            key={cell.id}
            className={cell.selected ? "kliknute" : "kokotina"}
            onMouseEnter={() => this.handleMouseEnter(cell.id)}
            onMouseDown={() => this.handleMouseDown(cell.id)}
            onMouseUp={() => this.handleMouseUp()}
          >
            {cell.id}
          </div>
        ))}
        {console.log(this.state)}
      </div>
    );
  }
}
export default Table;
