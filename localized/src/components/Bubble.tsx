import React from "react";
import './Bubble.css';

interface BubbleProps{
    name: string
}

class Bubble extends React.Component<BubbleProps>{

    constructor(props: any){
        super(props);
        this.state = {color: "white"};
    }

    // changeColor = () => {
    //     console.log("Clicked");
    // }

    render(){
        return(
            <div onClick={this.changeColor}>
                <h2 className="animate__fadeOutUp">{this.props.name}</h2>
            </div>
        )
    }
}

export default Bubble;