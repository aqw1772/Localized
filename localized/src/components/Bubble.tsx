import React from "react";


interface BubbleProps{
    name: string
}

class Bubble extends React.Component<BubbleProps>{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Bubble;