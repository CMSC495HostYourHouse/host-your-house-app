import React from 'react';
import './propertyCards.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

// need to take in what property card to make for properties from the database.

class PropertyCards extends React.Component{
state = {
        items: [],
        house: this.props.featHouse
    }

    constructor(props) {
        super(props);

        fetch("http://localhost:5000/api/houses/" + this.state.house, {
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
    render(){
        const { items, DataisLoaded } = this.state;
        if (!DataisLoaded) return <div>
            <h1></h1> </div> ;
      return (
        <section>
          <Container className='d-flex p-2'>
            <Card style={{ width: '18.1rem', height: '28rem', text:'black'}} bg='light' text='dark' border="primary" className='container-fluid'>
              <Card.Header id='propertycardHeader'>{ items.name} </Card.Header>
              <Card.Img style={{width:"250px", height:"150px"}} src={items.image}/>
              <Card.Body bg='dark'>
                <Card.Text>
                  <span>Location: {items.city}, {items.state} {items.zipCode}</span><br/>
                  <span>Price: {items.price} / Night</span><br/>
                  <span>Rating: {items.rating}</span><br/>
                  <span>Vaccant: {items.reservations}</span><br/>
                </Card.Text>
                <Button href="/reservation" variant="primary">Reserve</Button>
                <Button variant="success">Save</Button>
              </Card.Body>
            </Card>
          </Container>
        </section>
      )
    }
}

export default PropertyCards;