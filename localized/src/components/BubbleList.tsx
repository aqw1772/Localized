import React from 'react';
import Bubble from './Bubble';
import './Bubble.css';

// BubbleList component
// Render the bubbles together for the user to be able to select (for use on the bubbleUI screen)


interface BubbleListProps {
    listOfBubbles?: Array<Bubble>
}

// let listOfBubbles = ["Protest","Voting","Zoning","Tax","Schools"];

class BubbleList extends React.Component<BubbleListProps> {
    render() {
        return (
            <div className="BubbleList" >
                <ul id="menu">
                    {/* {this.props.listOfBubbles.map((bubble: Bubble) => {
                            return (
                                <li>{bubble.name}</li>
                                // <Bubble name={bubble}></Bubble>
                            )
                        }
                    )} */}
                    <li><Bubble name="Voting"/></li>
                    <li><Bubble name="Budget" /></li>
                    <li><Bubble name="Traffic" /></li>
                    <li><Bubble name="Petitions" /></li>
                    <li><Bubble name="Schools" /></li>
                    <li><Bubble name="Tax" /></li>
                    <li><Bubble name="Protest" /></li>
                </ul>
            </div >
        )
    };
}

export default BubbleList;