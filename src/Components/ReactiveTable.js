import React from "react";
import "../Styles/ReactiveTable.css";
import uuid from "uuid";
import { connect } from "react-redux";
import moment from "moment";

class Table extends React.Component {
  state = {
    toggle: false, // kdyz drzim tak se oznacuje
    currentMark: false // oznacuje se pouze kdyz ma policko opacnou hodnotu nez policko na ktere jsem kliknul
  };
  constructor(props) {
    super(props);

    console.log("cellObject: ", this.props.cellObject);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  getCurrentMark(id) {
    this.props.cell.map(cell => {
      if (cell.id === id) {
        this.setState({ currentMark: cell.selected });
      }
      return cell;
    });
  }

  handleMouseDown(id) {
    // this.getDates(this.props.cell.startDate,this.props.cell.stopDate);

    // console.log(this.props.cell.startDate)
    this.setState({ toggle: true });
    this.getCurrentMark(id);
    this.setState({
      cells: this.props.cell.map(cell => {
        if (cell.id === id) {
          return {
            id,
            selected: !cell.selected,
            toggled: true,
            value: cell.value
          };
        }
        return cell;
      })
    });
  }

  handleMouseUp(id) {
    this.setState({ toggle: false, currentMark: this.state.currentMark });
  }

  handleMouseEnter(id) {
    if (this.state.toggle) {
      this.setState({
        cells: this.props.cell.map(cell => {
          if (cell.id === id) {
            if (cell.selected === this.state.currentMark) {
              return {
                id,
                selected: !cell.selected,
                toggled: cell.toggled,
                value: cell.value
              };
            }
          }
          return cell;
        })
      });
    }
  }

  handleMouseLeave(id) {
    this.setState({ toggle: false });
    this.setState({
      cells: this.props.cell.map(cell => {
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
        {this.props.cell.map(cell => (
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
        {/* {console.log(this.createCell())} */}
        {/* {console.log(this.state)}
        {/* {console.log(this.state.currentMark)} */}
        {/* {console.log("cells po rendru", this.props.cell)} */}
      </div>
    );
  }
}
const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(Table);
