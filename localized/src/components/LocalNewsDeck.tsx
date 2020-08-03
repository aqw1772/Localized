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
                    <LocalNewsCard image="https://komonews.com/resources/media/e5a4f1a7-15ad-4064-8364-f19067e6321f-large16x9_thumb_85010.png?1595385874086" title="2020 Primary Voter's Guide - The Seattle Times" caption= "It’s been an unusual time for campaigning. The COVID-19 pandemic has changed the rules of engagement with voters — less contact, fewer personal appearances by most candidates, but not all." 
                    topic="Voting"/>
                    <LocalNewsCard image="https://seattlemedium.com/wp-content/uploads/2020/06/BLM-silent-march-main-5G4A6549.jpg" title="Highlights of Black Lives Matter Seattle-King County March" caption= "The march was planned as a silent event to honor those killed by police brutality and institutionalized racism. Additionally, according to BLM, the silence was intended to help mitigate the risk of spreading the COVID-19 coronavirus..." 
                    topic="Protests"/>
                </CardDeck>
            </div>
        );
    }
}

export default LocalNewsDeck;