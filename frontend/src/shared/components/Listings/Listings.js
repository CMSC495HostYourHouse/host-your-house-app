import React from 'react';
import './Listings.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import PropertyCards from '../PropertyCards/propertyCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        <section>
            <Container className='d-flex p-2 justify-content-center flex-row'>
                {/* Listings card diplays on main page, shows all the properties */}
                <Card className='listings-card' bg='dark' text='light'>
                    <Card.Header><h1>All Properties</h1>
                        {/* bring in the search/sort bars */}
                        {/* this will need to be modified to get what the user selected and modify the order or what listings show in the card  */}
                        <MainPageSearch />
                    </Card.Header>
                    <Card.Body>
                        {/* This needs to be modified to be dynamic. it needs to initially display all properties, but then needs to be able to show the properties sorted
                            or only show matching properties to search. This will require the dynamic creation of the collomuns based on how many properties shown */}
                        <Row>
                            {this.state.items.map(item =>(
                              <Col key={item._id}>
                              <PropertyCards featHouse = {item._id}/>
                              </Col>  
                            ))}
                            {/* <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col> */}
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}
}
export default listings;