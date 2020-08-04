import React from 'react';
import Bubble from './Bubble';
import './Bubble.css';
// @ts-ignore
import { World, Item } from "react-dom-box2d";

// BubbleList component
// Render the bubbles together for the user to be able to select (for use on the bubbleUI screen)


interface BubbleListProps {
    listOfBubbles?: Array<Bubble>
}

class BubbleList extends React.Component<BubbleListProps> {
    render() {
        return (
            <div className="BubbleList" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                    {/* {this.props.listOfBubbles.map((bubble: Bubble) => {
                            return (
                                <li>{bubble.name}</li>
                                // <Bubble name={bubble}></Bubble>
                            )
                        }
                    )} */}
                    <ul>
                    <World
                        height={700}
                        width={1000}
                        gravity={[0,2]}
                        className="world"
                    >
                        <Item restitution={1} initialImpulse={[70,70]}><div id="Protests"><Bubble name="Protests"/></div></Item>
                        <Item restitution={1} initialImpulse={[70,70]}><div id="Voting"><Bubble name="Voting"/></div></Item>
                        <Item restitution={1} initialImpulse={[70,70]}><div id="Budget"><Bubble name="Budget"/></div></Item>
                        <Item restitution={1} initialImpulse={[70,70]}><div id="Traffic"><Bubble name="Traffic"/></div></Item>
                        <Item restitution={1} initialImpulse={[70,70]}><div id="Petitions"><Bubble name="Petitions"/></div></Item>
                        <Item restitution={1} initialImpulse={[70,70]}><div id="Schools"><Bubble name="Schools"/></div></Item>
                        <Item restitution={1} initialImpulse={[70,70]}><div id="Tax"><Bubble name="Tax"/></div></Item>
                        <Item restitution={1} initialImpulse={[70,70]}><div id="Zoning"><Bubble name="Zoning"/></div></Item>
                    </World>
                    </ul>
            </div >
        )
    };

    implulse = () => {
        return [4,7];
    }
}

export default BubbleList;