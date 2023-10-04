import { Component } from "react";
class Base_block extends Component {
    type = "Base";
    state = {c_row: 0, c_col: 0}
    color = "#111111";
    constructor (props){
        super(props);
        this.state ={
            c_row: props.x,
            c_col: props.y
        }
    }
    render(){
        return (
            <div className={this.type} style={{width: 50,height: 50,backgroundColor: this.color,gridArea:this.state.c_row + "/" + this.state.c_col}}></div>
        );
    }
}
export default Base_block;