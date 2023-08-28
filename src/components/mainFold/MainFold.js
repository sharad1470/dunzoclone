import React from 'react';
import './MainFold.css';
import { ORDER_CARDS_DATA, ITEM_TYPES } from '../../common/data/data';
const MainFold = () => {
    return (
        <div className='mainfold'>
            <div className='top-strip'>
                <div className='strip-inner max-width flex'>
                    <div className='inner-left flex'>
                        <div className='paan-image-bg flex absolute-center'>
                            <img 
                            src="https://resources.dunzo.com/web-assets/prod/_next/static/images/paan-3514c1ca4be5af789addd127f4c24308.png?tr=w-64,h-64,cm-pad_resize"
                            alt=""
                            height={32}
                            width={32}
                            className='paan-image'
                            />

                        </div>
                        <div className='order-text'>
                        Order Paan items, munchies and much more on our new Dunzo Mo app
                        </div>

                    </div>
                    <div className='cur-po flex absolute-center strip-download'>
                        Download Dunzo Mo app now
                        <div className='flex absolute-center'>
                            <i className="fa-solid fa-caret-right absolute-center"></i>
                        </div>
                        
                    </div>

                </div>
            </div>
        
            <div className='mainfold-main'>
                <div className='mainfold-location flex max-width'>
                    <div className='mainfold-address1'>Home</div>
                    <div className='flex absolute-center location-arrow'>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className='mainfold-address2'>
                        Mumbai
                    </div>
                </div>

                <div className='mainfold-info max-width'>
                    <div className='mainfold-city'>Mumbai</div>
                    <div className='mainfold-desc'>
                    Why step out when you can get everything delivered home with the tap of a button? Bangalore’s favourite delivery app gets you Food, 
                    Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to 
                    the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for
                    you. Why worry about your chores, when you can get it all Dun!
                    </div>

                </div>

                <div className='order-cards max-width flex'>
                    {ORDER_CARDS_DATA.map((card)=>{
                        return (<div className='order-card-container'>
                            <img src={card.banner} alt={card.banner}
                            className='order-card-image cur-po'
                            />
                        </div>
                        );
                    })}
                </div>
                <div className='items-cards max-width flex'>
                    {ITEM_TYPES.map((item)=>{
                        return <div className='item-container cur-po'>
                            <img src={item.banner} alt={item.title} className='item-card-image'/>
                            <div className='item-title'>{item.title}</div>
                        </div>
                    })}
                </div>

            </div>

            
        </div>
    );
};

export default MainFold;