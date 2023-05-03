import React from 'react';
import QZ1 from '../../assets/qZone1.png'
import QZ2 from '../../assets/qZone2.png'
import QZ3 from '../../assets/qZone3.png'
const Q_Zone = () => {
    return (
        <div className='bg-light text-center' >
            <h4>Q-ZONE</h4>
            <div>
                <img src={QZ1} alt="" />
                <img src={QZ2} alt="" />
                <img src={QZ3} alt="" />
            </div>
        </div>
    );
};

export default Q_Zone;