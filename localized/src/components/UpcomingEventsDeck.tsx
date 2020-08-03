import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import { BsNewspaper } from "react-icons/bs";
import { LocalNewsCard } from "./LocalNewsCard";
import {BsCalendar} from "react-icons/bs";
import {UpcomingEventsCard} from "./UpcomingEventsCard";

export class UpcomingEventsDeck extends React.Component<{}>{
    render(){
        return(
            <div>
                <p className="p3"> 
                    <div className="UpcomingEventsTitle">Upcoming Events <BsCalendar /></div>
                    <hr className="lineTitle"></hr>
                </p>
                <CardDeck className="UpcomingEventsDeck">
                   <UpcomingEventsCard link="https://www.redmond.gov/1413/Bike-Decorating-Virtual-Parade" image=" https://www.redmond.gov/ImageRepository/Document?documentId=13870" title="Sunday at 11am" caption= "Decorate your bike and join us for a virtual bike parade to help celebrate virtual Derby Days 2020!" 
                    topic="Bike decorating Parade"/>
                   <UpcomingEventsCard link="https://www.redmond.gov/1139/Redmond-Lights" image="https://www.redmond.gov/ImageRepository/Document?documentID=9912" title="Saturday at 7pm" caption= " This progressive, three-part event starts at Redmond City Hall and takes you to the Redmond Town Center." 
                    topic="Redmond Lights"/>
                    <UpcomingEventsCard link="https://www.redmond.gov/1138/Derby-Days" image="https://www.redmond.gov/ImageRepository/Document?documentId=13898" title="Tuesday at 10pm" caption=" The Derby Days tradition continues in 2020 with our virtual edition."
                    topic="Derby Days"/>
                </CardDeck>
            </div>
        );
    }
}

export default UpcomingEventsDeck;