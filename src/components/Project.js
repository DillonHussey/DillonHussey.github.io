import { Container, Card, Row, Col, Carousel, CarouselItem } from 'react-bootstrap'


//<Card.Img variant="bottom" src={prj.image.default}/>
//className='starter-template text-center mt-5'
/*
<img
            alt="" 
            src={prj.image.default}
            height='250'
            width='250'
            className="d-flex align-items-center"
          />
*/
const Project = ({prj}) => {
  //console.log(prj)
  return (
    <Container className="mt-5" >
      <Card>
        <Card.Title className="p-2">{prj.title}</Card.Title>
        <Card.Body>
          <Row>
            <Col>
          <Card.Text>
          {prj.description}
          </Card.Text>
          </Col>
          <Col>
          <Carousel interval={null} className="d-blcok align-items-center">
            {
              prj.images.map(image => {
                return <CarouselItem>
                  <img
                    alt="" 
                    src={image.default}
                    height='350'
                    width='auto'
                    className="d-flex align-items-center"
                  />
                </CarouselItem>
              })
            }
          </Carousel>
          
          </Col>
          </Row>
          </Card.Body>
          
          <Card.Footer>
         <a target="_blank" href={prj.form}
          rel="noreferrer"
        className="d-flex align-items-center text-dark text-decoration-none"
        >see the code (opens google form to request deploy token)</a>
        </Card.Footer>
        
      </Card>
      </Container>
  )
}



export default Project
