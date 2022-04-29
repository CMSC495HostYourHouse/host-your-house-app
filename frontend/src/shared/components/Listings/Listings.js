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
        items: [],
        searchType: [0, 1, 2],
        price1: [0, 50],
        price2: [50, 100],
        city: 'Hamlin',
        rating: 3.5
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

    // search houses, searchtype 0 for price, 1 for city, and 2 for rating. replace with states want to use to search.
    //need to get state from form data in mainpagesearch in here to make search bar work
    //need a way to dynamically add the + this.state.searchType[0] + '/'.... to the end of the request to signify if just show all
    // or add search
    componentDidMount() {
        fetch("http://localhost:5000/api/houses/search/" + this.state.searchType[0] + '/' + this.state.price1[0] + "/" + this.state.price2[1] )
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
                              <Col>
                              
                                <PropertyCards featHouse = {item._id}/>
                              </Col>  
                            ))}
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}
}
export default listings;