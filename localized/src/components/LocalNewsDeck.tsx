import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import {MdLiveTv} from "react-icons/md";
import {LocalNewsCard} from "./LocalNewsCard";
import Carousel from 'react-bootstrap/Carousel';


export class LocalNewsDeck extends React.Component<{}>{
    render(){
        return(
            <div>
                <p className="LocalNews"> 
                    <div className="LocalNewsTitle">Catch up on your local news <MdLiveTv/></div>
                    <hr className="lineTitle"></hr>
                </p>
                <CardDeck className="LocalNewsDeck">
                    <LocalNewsCard image="https://media.king5.com/assets/KING/images/285572476/285572476_1140x641.jpg" title="How secure is your mail-in ballot in Washington State?" caption= "It’s been an unusual time for voting. The COVID-19 pandemic has changed the rules of political participation — less contact, fewer personal appearances by most candidates..." 
                    topic="Voting" videoLink="https://www.king5.com/article/news/politics/where-to-drop-off-your-stamp-free-ballot-before-election-day/281-285557913"/>
                    <LocalNewsCard image="https://seattlemedium.com/wp-content/uploads/2020/06/BLM-silent-march-main-5G4A6549.jpg" title="Highlights of Black Lives Matter Seattle-King County March" caption= "The march was planned as a silent event to honor those killed by police brutality and institutionalized racism. Additionally, according to BLM, the silence was intended to help mitigate the risk of spreading the COVID-19 coronavirus..." 
                    topic="Protests" videoLink="https://www.youtube.com/watch?v=ttEnL5BTn3M"/>
                </CardDeck>
            </div>
        );
    }
}

export default LocalNewsDeck;