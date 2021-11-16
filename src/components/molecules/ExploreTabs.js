import React from 'react'
import ExploreGridItems from './ExploreGridItems'

function ExploreTabs({data}) {

       const [activeTab, setActiveTab] = React.useState(0);

       const changeActiveTab = (index) => {
         setActiveTab(index);
       };
       
       
    return (
      <div>
        {/* map data and render tabs and content */}

        {/* set grid items in tab 1 */}
        <ExploreGridItems />
      </div>
    );
}

export default ExploreTabs

