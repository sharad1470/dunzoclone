import React from 'react';
import './TopPicks.css';
import { TOP_PICKS } from '../../common/data/data';
const TopPicks = () => {
    return (
        <div className='top-picks max-width'>
            <div>
                <div className='top-picks-title'>Top picks for you</div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="7px" display="block" fill="#25D366" viewBox="0 0 57 4" class="sc-64ptou-0 fRuWqJ"><rect width="39" height="4" rx="2"></rect><rect x="43" width="14" height="4" rx="2"></rect></svg>
                </div>
            </div>
            <div className='top-picks-cards flex'>
                {TOP_PICKS.map((item)=>{
                    return <div className='top-picks-card'>
                        <img src={item.banner} alt={item.banner}/>
                    </div>
                })}
            </div>
            
        </div>
    );
};

export default TopPicks;