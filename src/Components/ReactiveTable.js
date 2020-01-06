import React from "react";
import "../Styles/ReactiveTable.css";
// import uuid from "uuid";
import { connect } from "react-redux";
// import moment from "moment";

class Table extends React.Component {
  state = {
    toggle: false, // kdyz drzim tak se oznacuje
    currentMark: false, // oznacuje se pouze kdyz ma policko opacnou hodnotu nez policko na ktere jsem kliknul
    cells: ""
  };
  constructor(props) {
    super(props);

    console.log("cellObject: ", this.props.cellObject);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  getCurrentMark(id) {
    this.props.cell.cell.map(cell => {
      if (cell.id === id) {
        this.setState({ currentMark: cell.selected });
      }
      return cell;
    });
  }

  handleMouseDown(id) {
    this.setState({ toggle: true });
    this.getCurrentMark(id);
    const cell = this.props.cell.cell;
    cell.map(cell => {
      if (cell.id === id) {
        cell.selected = !cell.selected;
        cell.toggled = true;
      }
      return cell;
    });
  }

  handleMouseUp(id) {
    this.setState({ toggle: false, currentMark: this.state.currentMark });
  }

  handleMouseEnter(id) {
    if (this.state.toggle) {
      const cell = this.props.cell.cell;
      cell.map(cell => {
        if (cell.id === id) {
          if (cell.selected === this.state.currentMark) {
            cell.selected = !cell.selected;
          }
        }
        return cell;
      });
      this.setState({
        cells: "changed"
      });
    }
  }

  handleMouseLeave(id) {
    this.setState({ toggle: false });
    const cell = this.props.cell.cell;

    cell.map(cell => {
      if (cell.id === id) {
        cell.selected = false;
      }
      return cell;
    });
  }

  render() {
    return (
      <div className="reable" onMouseUp={() => this.handleMouseUp()}>
        {this.props.cell.cell.map(cell => (
          <div
            style={{ userSelect: "none" }}
            key={cell.id}
            className={cell.selected ? "kliknute" : "kokotina"}
            onMouseEnter={() => this.handleMouseEnter(cell.id)}
            onMouseDown={() => this.handleMouseDown(cell.id)}
            onMouseUp={() => this.handleMouseUp(cell.id)}
          >
            <h1>{cell.value}</h1>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(Table);
