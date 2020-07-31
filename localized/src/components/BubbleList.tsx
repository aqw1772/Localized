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
                <ul>
                    {/* {this.props.listOfBubbles.map((bubble: Bubble) => {
                            return (
                                <li>{bubble.name}</li>
                                // <Bubble name={bubble}></Bubble>
                            )
                        }
                    )} */}
                    <div id="Protest"><Bubble name="Protest"/></div>
                    <div id="Voting"><Bubble name="Voting"/></div>
                    <div id="Budget"><Bubble name="Budget"/></div>
                    <div id="Traffic"><Bubble name="Traffic"/></div>
                    <div id="Petitions"><Bubble name="Petitions"/></div>
                    <div id="Schools"><Bubble name="Schools"/></div>
                    <div id="Tax"><Bubble name="Tax"/></div>
                    
                    <div id="Zoning"><Bubble name="Zoning"/></div>
                    
                </ul>
            </div >
        )
    };
}

export default BubbleList;