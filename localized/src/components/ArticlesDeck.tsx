import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import { BsNewspaper } from "react-icons/bs";
import { LocalNewsCard } from "./LocalNewsCard";
import {ArticlesCard} from "./ArticlesCard";

export class ArticlesDeck extends React.Component<{}>{
    render(){
        return(
            <div>
                <br/>
                <br></br>
                <p className="p3"> 
                    <div className="ArticlesTitle"> Latest articles for you based on your interests<BsNewspaper /></div>
                    <hr></hr>
                </p>
                <CardDeck className="ArticlesDeck">
                   <ArticlesCard link="https://www.goredmond.com/schools" image=" https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/BostonSchoolSt3.JPG/1200px-BostonSchoolSt3.JPG" title="School Pool Program" caption="The Redmond SchoolPool program encourages students and their families to Walk and Roll when traveling to their neighborhood school in October!
                    By leaving the car behind, we're reducing neighborhood traffic..." topic="Schools"/>
                   <ArticlesCard link="https://www.redmond.gov/CivicAlerts.aspx?AID=169" image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Election_voting_20180128.jpg/1200px-Election_voting_20180128.jpg" title="Ballot boxes for General Elections are open!" caption="Ballot boxes for the 2019 General Election are open! No postage required for ballots returned via US Mail. Ballots must be postmarked or dropped off 
                   at a ballot... " 
                    topic="Voting"/>
                    <ArticlesCard link="https://www.redmond.gov/CivicAlerts.aspx?AID=286" image="https://media1.s-nbcnews.com/j/newscms/2017_33/2124231/170817-black-lives-matter-protest-ac-926p_024173f5245dacd5c6cccbbed5fef4af.nbcnews-ux-2880-1000.jpg" title="Community Gathers In Solidarity" caption="Hundreds of people have peacefully gathered on several occasions to protest in Redmond’s Downtown Park. We stand in solidarity with those that are speaking out against racism, violence and inequity..."
                    topic="Protests"/>
                </CardDeck>
            </div>
        );
    }
}

export default ArticlesDeck;