import React from "react";
import "./seat.css";

class PatternComponent extends React.Component {
  renderPattern() {
    const rows = 10; // Number of rows in the pattern
    const cols = 8; // Number of columns in the pattern
    const pattern = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        // Add a space of 100px between the 2nd and 3rd column, and 6th and 7th column
        if ((j === 2 || j === 6) && i >= 0) {
          row.push(<div key={j} style={{ width: "100px" }} />);
        }

        // Add a seat icon button
        row.push(
          <button key={j} className="seat-button" onClick={(e)=>{alert("seat no "+i*cols+j+" is selected")}}>
            {/* <i className="fa fa-chair" /> */}
          </button>
        );
      }
      pattern.push(
        <div key={i} className="row" st>
          {row}
        </div>
      );
    }

    return pattern;
  }

  render() {
    return <div className="pattern-column">{this.renderPattern()}</div>;
  }
}

export default PatternComponent;