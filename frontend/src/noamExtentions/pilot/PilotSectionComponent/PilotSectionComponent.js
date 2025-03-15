import './PilotSecionComponent.css';
import { useState } from 'react';
import Group2Component from '../Group2/Group2Component';
import Group3Component from '../Group3/Group3Component';

const PilotSecionComponent = () => {
    const [groupIdx, setGroupIdx] = useState(0);

    return (
        <div className="pilot-section-container">
            <h2>Pilot Section</h2>
            {groupIdx === 0 && (
                <div className='display-container'>
                    <button className="group2-button" onClick={() => setGroupIdx(2)}> 
                        Group 2 
                    </button>
                    <button className="group3-button" onClick={() => setGroupIdx(3)}> 
                        Group 3 
                    </button>
                </div>
            )}

            {groupIdx === 2 && <Group2Component />}
            {groupIdx === 3 && <Group3Component />}
        </div>
    );
};

export default PilotSecionComponent;