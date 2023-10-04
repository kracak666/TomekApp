import { Component, useRef, useState } from "react";
import Base_block from "./Base_block";
import Main_block from "./Main_block";
class Game_grid extends Component {
    state = {
        grid_size: 300,
        maxy: 6,
        sizes: "50px 50px 50px 50px 50px 50px",
        player_key: 0,
        ocupied: []
    }
    constructor (props){
        super(props);
        this.state.ocupied = [{id: 1, x: 5, y: 1}]
    }
    resizeGrid = function(size){
        if(size % 50 == 0){
            this.state.maxy = size / 50
        }
        this.state.sizes = ""
        for(var i = 1; i <= this.state.maxy; i++){
            this.state.sizes += "50px ";
        }
        this.state.player_key += 1;
        this.state.grid_size = size + "px";
    }
    render() {
        return (
            <div>
                <input type="text" onBlur={event => {
                    var size = event.target.value;
                    this.resizeGrid(size);
                }}></input>
                <button onClick={() => {this.forceUpdate()}}>Rekalkuluj siatką</button>
                <div className="game-grid" style={{display: 'grid' ,width: this.state.grid_size,height: this.state.grid_size,gridTemplateColumns: this.state.sizes,gridTemplateRows: this.state.sizes,border:"2px solid #000000"}}>
                    <Main_block key={this.state.player_key} ocupied={this.state.ocupied} max_x={this.state.maxy} max_y={this.state.maxy} y={1} x={6}></Main_block>
                </div>
            </div>
            
        );
    }
}
 
export default Game_grid;