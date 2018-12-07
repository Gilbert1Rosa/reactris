import React from 'react';

class GameBoard extends React.Component {
		constructor(props) {
    		super(props);
    		this.width = 40;
        this.height = 40;
    }
    
    createGrid() {
    	  var rows = [];
        for (var i = 0; i < this.width; i++) {
        		var cells = [];
        		for(var j = 0; j < this.height; j++) {
            	cells[j] = (
              	<td className="cell"></td>
              );
            }
            rows[i] = (
            	<tr>
            	  {cells}
            	</tr>
            );
        }
      	return rows;
    }
    
    render() {
        return (
          <table>
              <tbody style={{border: "1px solid black"}}>
                  {this.createGrid()}
              </tbody>
          </table>
        );
    }
}

export default GameBoard;