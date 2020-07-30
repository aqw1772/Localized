import React from "react";
import './Bubble.css';

interface BubbleProps{
    name: string
}

class Bubble extends React.Component<BubbleProps>{
    
    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <div>
                <h2 className="animate__fadeOutUp">{this.props.name}</h2>
            </div>
        )
    }
}

export default Bubble;