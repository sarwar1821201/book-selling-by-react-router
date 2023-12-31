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

            <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;