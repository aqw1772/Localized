import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import {MdLiveTv} from "react-icons/md";
import {LocalNewsCard} from "./LocalNewsCard";

export class LocalNewsDeck extends React.Component<{}>{
    render(){
        return(
            <div>
                <p className="LocalNews"> 
                    <div className="LocalNewsTitle">Catch up on your local news <MdLiveTv/></div>
                    <hr className="lineTitle"></hr>
                </p>
                <CardDeck className="card-deck">
                    <LocalNewsCard image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Election_voting_20180128.jpg/1200px-Election_voting_20180128.jpg" title="Mail Voting gone wrong again -WSJ" caption= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere minus nesciunt deleniti dolore error, voluptate nostrum eligendi assumenda autem possimus nemo natus! Sit inventore dolor rem adipisci quas enim." />
                    <LocalNewsCard image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Election_voting_20180128.jpg/1200px-Election_voting_20180128.jpg" title="Mail Voting gone wrong again -WSJ" caption= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere minus nesciunt deleniti dolore error, voluptate nostrum eligendi assumenda autem possimus nemo natus! Sit inventore dolor rem adipisci quas enim." />
                </CardDeck>
            </div>
        );
    }
}

export default LocalNewsDeck;