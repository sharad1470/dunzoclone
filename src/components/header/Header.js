import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header-container'>
            <div className='header max-width flex'>
                <div className='header-left flex'>
                    <img 
                    src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png?tr=w-244,h-56,cm-pad_resize"
                     alt=""
                     className='header-logo'
                     height={28}
                     width={122}
                     />
                     <div className='flex absolute-center header-location'>
                        <i class="fa-solid fa-location-dot absolute-center "></i>
                     
                     <div className='location-text '>Set Location</div>
                     <div><i className="fa-solid fa-caret-down absolute-center" style={{color: "#1f5129"}}></i></div>

                     </div>
                </div>
                <div className='header-right flex'>

                    <div className='cur-po hover-change absolute-center'>Dunzo for partners</div>
                    <div className='cur-po hover-change flex absolute center'>
                        Business with Dunzo
                        <i className="fa-solid fa-caret-down absolute-center"></i>
                    </div>
                    <div className='flex column absolute-center cur-po hover-over'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <div className='header-icon-text'>Search</div>
                    </div>

                    <div className='flex column absolute-center cur-po hover-over'>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <div className='header-icon-text'>Cart</div>
                    </div>

                    <div className='header-button cur-po absolute-center'>SignIn</div>

                </div>
            </div>
            
        </div>
    );
};

export default Header;