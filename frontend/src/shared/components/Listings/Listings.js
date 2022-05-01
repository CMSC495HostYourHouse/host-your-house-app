import React from 'react';
import './Listings.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import Property from '../PropertyCards/Property';
import Row from 'react-bootstrap/Row';
import MainPageSearch from '../MainPageSearch/mainpageSearch';

class listings extends React.Component{

    state = {
        items: []
    }

    // gets all houses
    componentDidMount() {
        fetch("http://localhost:5000/api/houses/")
            .then(async(res) => await res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render(){
        return (
            <section id="listings-container">
                <div className="header-container">
                    <h1 className="header1-light">All Properties</h1>
                </div>
                <div id="header-spacer"/>
                        {/* bring in the search/sort bars */}
                        {/* this will need to be modified to get what the user selected and modify the order or what listings show in the card  */}
                <MainPageSearch/>
                <div id="properties-container">
                    {this.state.items.map(item => (<Property featHouse = {item._id}/>))}
                </div>
            </section>
        )
    }
}

export default listings;