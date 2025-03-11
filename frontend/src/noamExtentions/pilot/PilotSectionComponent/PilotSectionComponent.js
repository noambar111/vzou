import './PilotSecionComponent.css'
import { useState } from 'react';

const PilotSecionComponent = () => {

    const [isGroup1, setIsGroup1] = useState(0);

    return (
        <>
 <div className="pilot-section-container">
            <h2>Pilot Section</h2>
            <div className='display-container'>
                <button className="group2-button"> Group 2 </button>
                <button className="group3-button"> Group 3 </button>
            </div>
        </div>
    </>
)

}

export default PilotSecionComponent;