import React from 'react';
import './AppDownload.css';
const AppDownload = () => {
    return (
        <div className='main'>
        <div className='app-download max-width flex absolute-center'>
            <img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/dunzo-daily-app-preview-7c97560e963bcd173c11c470b2ff63ed.png?tr=w-410,h-474,cm-pad_resize"
            alt="phone"
            height={237}
            width={205}
            />

        <div className='download-btns flex column'>
            <div className='app-download-text'>
            All this from the convenience of your phone.<br />
            Download the Dunzo mobile app.
            </div>
            <div className='download-buttons'>
                <img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/playstore-ee5b43e66d1583a6066423fb42fb69d8.svg" alt="download-button"/>
                <img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/appstore-078da620a293bb95473ae21624a55872.svg"
                alt="download-button"
                />
            </div>
        </div>
            
        </div>
        </div>
    );
};

export default AppDownload;