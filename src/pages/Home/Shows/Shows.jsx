import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useLoadData from "../../../hooks/useLoadData";
import { Link } from "react-router-dom";


const Shows = () => {
  const [shows] = useLoadData();

  return (
    <Container className="py-5">
      <Row>
        {
          shows.map(show => <Col key={show.show.id} lg={4} className="p-5">
            <Card className="rounded-3">
              <Card.Img variant="top" src={show.show.image.medium} />
              <Card.Body>
                <Card.Title className="fs-2">{show.show.name}</Card.Title>
                <Card.Text>Genres: {
                  show.show.genres.length > 0 ? show.show.genres.map((genre, i) => <span key={i} className="me-2">{genre}</span>) : ''
                }
                </Card.Text>
                <Card.Text>Language: {show.show.language}</Card.Text>
                <Card.Text>Ratting: {
                  show.show.rating.average ? show.show.rating.average : 'No Ratting'
                }</Card.Text>
                <Link to={`/${show.show.id}`}><Button variant="primary">Learn More</Button></Link>
              </Card.Body>
            </Card>
          </Col>)
        }
      </Row>
    </Container >
  );
};

export default Shows;
