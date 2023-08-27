import React from 'react';
import Header from'../components/header/Header;
import TopPicks from '../components/topPicks/TopPicks';
import MainFold from '../components/mainFold/MainFold';
import Footer from '../components/Footer/footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <MainFold/>
            <TopPicks/>
            <AppDownload/>
            <Footer/>
            
        </div>
    );
};

export default Home;