import React from "react";

interface BubbleProps{
    name: string
}

class Bubble extends React.Component<BubbleProps>{
    
    constructor(props: any, name: string){
        super(props);
    }

    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default Bubble;