import { Container, Card, Row, Col, Carousel, CarouselItem } from 'react-bootstrap'

const Project = ({prj}) => {
  //console.log(prj)
  return (
    <Container className="mt-5" >
      <Card>
        <Card.Title className="p-2 text-secondary">{prj.title}</Card.Title>
        <Card.Body>
          <Row>
            <Col>
          <Card.Text className='bg-lighter text-secondary'>
          {prj.description}
          </Card.Text>
          </Col>
          <Col>
          {
          prj.images.length > 1 ?
            <Carousel interval={null} className="d-flex align-items-center carousel-dark">
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
          :  <img
          alt="" 
          src={prj.images[0].default}
          height='350'
          width='auto'
          className="d-flex align-items-center"
        />
          }
          
          </Col>
          </Row>
          </Card.Body>
          
          <Card.Footer>
         <a target="_blank" href={prj.private ? "DillonHussey" : prj.form}
          rel="noreferrer"
        className="d-flex align-items-center text-dark text-decoration-none"
        >{prj.private ? "see sharing policy" : "see the code" }</a>
        </Card.Footer>
        
      </Card>
      </Container>
  )
}



export default Project
