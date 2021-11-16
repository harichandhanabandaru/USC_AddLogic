import React from 'react'

function BookDetailsTabs({data}) {


    const[activeTab,setActiveTab]=React.useState(0);
    
    const changeActiveTab=(index)=>{
        setActiveTab(index);
    }

    return (
        <div>
             {/* map data and render tabs and content */}
        </div>
    )
}

export default BookDetailsTabs
