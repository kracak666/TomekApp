import Base_block from "./Base_block";
class Main_block extends Base_block {
    color = "#0000FF";
    type = "Main";
    state = {c_row: 0, c_col: 0,dir: "right"};
    max_grid ={
        x: 0,
        y: 0,
    };
    ocupied = []
    
    constructor(props){
        super(props);
        this.max_grid.x = props.max_x
        this.max_grid.y = props.max_y
        this.state = {
            c_row: props.x,
            c_col: props.y,
            dir: "up"
        }
        this.ocupied = props.ocupied
    }
    move = function(dir) {
        this.state.dir = dir
        var y = this.state.c_col
        var x = this.state.c_row
       if (this.state.dir == "right"){
        y = y + 1;
       }
       if (this.state.dir == "left"){
        y = y - 1;
       }
       if (this.state.dir == "up"){
        x = x - 1;
       }
       if (this.state.dir == "down"){
        x = x + 1;
       }
       this.state.c_col = y
        this.state.c_row = x
       this.forceUpdate();
    }
    place_btn = function(){
        var x = this.state.c_row;
        var y = this.state.c_col;
        var canthave = []
            
        if(y == 1){
            if(x == 1){
                    return <div>
                <button onClick={() => {this.move("down")}} className={"downbtn"}></button>
                <button onClick={() => {this.move("right")}} className={"rightbtn"}></button>
                </div>
            }else if (x == this.max_grid.x){
                return <div>
                    <button onClick={() => {this.move("up")}} className={"upbtn"}></button>
                    <button onClick={() => {this.move("right")}} className={"rightbtn"}></button>
                </div> 
            }else{
                return <div>
                    <button onClick={() => {this.move("up")}} className={"upbtn"}></button>
                    <button onClick={() => {this.move("down")}} className={"downbtn"}></button>
                    <button onClick={() => {this.move("right")}} className={"rightbtn"}></button>
                </div> 
            }
        }else if(y==this.max_grid.y){
            if(x == 1){
                return <div>
                        <button onClick={() => {this.move("left")}} className={"leftbtn"}></button>
                        <button onClick={() => {this.move("down")}} className={"downbtn"}></button>
                        </div>
            }else if(x == this.max_grid.x){
                return <div>
                    <button onClick={() => {this.move("up")}} className={"upbtn"}></button>
                    <button onClick={() => {this.move("left")}} className={"leftbtn"}></button>
                </div> 
            }else{
                return <div>
                    <button onClick={() => {this.move("up")}} className={"upbtn"}></button>
                    <button onClick={() => {this.move("left")}} className={"leftbtn"}></button>
                    <button onClick={() => {this.move("down")}} className={"downbtn"}></button>
                </div> 
            }
        }else{
            if (x == 1){
                return <div>
                        <button onClick={() => {this.move("down")}} className={"downbtn"}></button>
                        <button onClick={() => {this.move("left")}} className={"leftbtn"}></button>
                        <button onClick={() => {this.move("right")}} className={"rightbtn"} ></button>
                    </div>
            }else if(x==this.max_grid.x){
                return <div>
                        <button onClick={() => {this.move("up")}} className={"upbtn"}></button>
                        <button onClick={() => {this.move("left")}} className={"leftbtn"}></button>
                        <button onClick={() => {this.move("right")}} className={"rightbtn"}></button>
                    </div>
            }else{
                return <div>
                <button onClick={() => {this.move("down")}} className={"downbtn"}></button>
                <button onClick={() => {this.move("up")}} className={"upbtn"}></button>

                <button onClick={() => {this.move("left")}} className={"leftbtn"}></button>
                <button onClick={() => {this.move("right")}} className={"rightbtn"}></button>
                </div>
            }
        }
    }
    render(){
        return (
            <div className={this.type} style={{position: "relative",width: 50,height: 50,backgroundColor: this.color,gridArea:this.state.c_row + "/" + this.state.c_col}}>
                {this.place_btn()}
            </div>
        );
    }  
}
 
export default Main_block;