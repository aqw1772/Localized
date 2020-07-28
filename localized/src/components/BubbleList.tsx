import React from 'react';
import Bubble from './Bubble';

// BubbleList component
// Render the bubbles together for the user to be able to select (for use on the bubbleUI screen)


interface BubbleListProps {
    listOfBubbles: Array<Bubble>
}

// let listOfBubbles = ["Protest","Voting","Zoning","Tax","Schools"];

class BubbleList extends React.Component<BubbleListProps> {
    render() {
        return (
            <div className="BubbleList" >
                <ul>
                    {this.props.listOfBubbles.map((bubble: Bubble) => {
                            return (
                                <li>{bubble.name}</li>
                                // <Bubble name={bubble}></Bubble>
                            )
                        }
                    )}
                </ul>
            </div >
        )
    };
}

export default BubbleList;