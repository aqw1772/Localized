import React from "react";
import './Bubble.css';
// @ts-ignore
import { World, Item } from "react-dom-box2d";

interface BubbleProps{
    name: string
}

//created a component for each bubble
class Bubble extends React.Component<BubbleProps,{selected: boolean}>{
    constructor(props: any){
        super(props);
        this.state = {
            selected: false
        };
    }

    //onclick method to change the state of the bubble component
    changeColor = () => {
        this.setState({selected: !this.state.selected})
    }

    render(){
        let btn_class = this.state.selected ? "blueButton" : "grayButton";
        return(
            <div className={btn_class} onClick={this.changeColor.bind(this)}>
                <h2 className="animate__fadeOutUp">{this.props.name}</h2>
            </div>
        )
    }
}

export default Bubble;