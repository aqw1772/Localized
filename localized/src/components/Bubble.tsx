import React from "react";
import './Bubble.css';

interface BubbleProps{
    name: string
}

class Bubble extends React.Component<BubbleProps,{selected: boolean}>{
    constructor(props: any){
        super(props);
        this.state = {
            selected: false
        };
    }

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