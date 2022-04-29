import React from 'react';
import './featured.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import PropertyCards from '../PropertyCards/propertyCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Featured extends React.Component{
    state = {
        house1_id : '626755f52b362e4bbac37904',
        house2_id : '626755f52b362e4bbac37906',
        house3_id : '626755f52b362e4bbac37907'
    }

    constructor(props) {
        super(props);

        fetch("http://localhost:5000/api/houses/626755f52b362e4bbac37904", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            
        }).then(async(res) => {
            let house = await res.json()
            console.log(house)
            this.setState({
                items: house,
                DataisLoaded: true
            });
        })
    }

    // gets all houses works ------------------------------------------

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
        const { items, DataisLoaded } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

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
                            <Col>house name: { items.name} </Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
    }
}

export default Featured;