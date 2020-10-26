import React ,{Fragment }from 'react'
import Asteroids from './layout/Asteroids'
import NavBar from './layout/NavBar'
const Dashboard = () => {
    return (
        <Fragment>
             <NavBar></NavBar>
            <Asteroids></Asteroids>
        </Fragment>
    
    )
}

export default Dashboard
