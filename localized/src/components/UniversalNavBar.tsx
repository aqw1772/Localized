import React from 'react';
import { pages } from "../App";

interface UniversalNavBarProps {
    changePage: (page: pages) => void;
}

class UniversalNavBar extends React.Component<UniversalNavBarProps>{
    render () {
        return(
            <div className= "universalnav">
                

            </div>

        )
    }

}