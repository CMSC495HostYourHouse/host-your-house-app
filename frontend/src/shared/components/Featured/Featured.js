import React from 'react';
import './featured.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import PropertyCards from '../PropertyCards/propertyCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeaturedProperty from '../PropertyCards/FeaturedProperty';

class Featured extends React.Component{
    state = {
        house1_id : '626755f52b362e4bbac37904',
        house2_id : '626755f52b362e4bbac37906',
        house3_id : '626755f52b362e4bbac37907'
    }
    // gets all houses
    // componentDidMount() {
    //     fetch("http://localhost:5000/api/houses/")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             this.setState({
    //                 items: json,
    //                 DataisLoaded: true
    //             });
    //         })
    // }
    render(){
        
        return (
            
        <section>
            
            {/* container for featured card */}
            <Container className='d-flex p-2 justify-content-center'>
                {/* Featured properties that show at top of page, under nav bar */}
                <Card className='featured-card' bg='dark' text='light'>
                    <Card.Header><h1>Featured Properties</h1></Card.Header>
                    <Card.Body>
                        <Row>
                            {/* Bring in test property cards, theese need to be updated to be able to select specific properties from the database, and display their information */}
                            {/* I think this could just be static */}
                            <Col><FeaturedProperty featHouse = {this.state.house1_id} /></Col>
                            <Col><FeaturedProperty featHouse = {this.state.house2_id}/></Col>
                            <Col><FeaturedProperty featHouse = {this.state.house3_id}/></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
    }
}

export default Featured;