import React from 'react'
import Cards from '../Card/Cards'
import Contact from '../Contact/Contact'
import FeatureProduct from '../FreatureProduct/FeatureProduct'
import Navbars from '../Navbar/Navbars'

const Home=()=> {
    return (
        <div>
            <Navbars></Navbars>
            <Cards></Cards>
            <Contact></Contact>
            <FeatureProduct></FeatureProduct>
        </div>
    )
}

export default Home
