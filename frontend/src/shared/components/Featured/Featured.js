import React from 'react';
import './featured.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeaturedProperty from '../PropertyCards/FeaturedProperty';

class Featured extends React.Component{
    state = {
        house1_id : '626755f52b362e4bbac37904',
        house2_id : '626755f52b362e4bbac37906',
        house3_id : '626755f52b362e4bbac37907'
    }
    render(){
      return (  
        <section>
					<Container className='d-flex p-2 justify-content-center'>
						{/* Featured properties that show at top of page, under nav bar */}
						<Card className='featured-card' bg='dark' text='light'>
							<Card.Header><h1>Featured Properties</h1></Card.Header>
							<Card.Body>
								<Row>
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