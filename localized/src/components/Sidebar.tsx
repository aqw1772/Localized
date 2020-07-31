import React from 'react';
import { pages } from "../App"; {/* Not sure if I need this */}

//SideBar for the My Content page
//The component will include buttons (eventually draggable) portraying user interest categories

interface IMyContentSidebarProps {
    changePage: (page: pages) => void;
    userInterests: (any); // **update this line when user interests redux is implemented**
}


class MyContentSidebar extends React.Component<IMyContentSidebarProps> {
    render() {
        return (
            <div className="myContentSidebar">
                
            </div>
        )
    };
}

export default MyContentSidebar;