import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation= useNavigation();
    return (
        <div>
            <Header></Header>
            
            <div className=' justify-center  items-center'>
                {
                    navigation.state=== 'loading' ? 'Loading....' : ' '
                }
            </div>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;