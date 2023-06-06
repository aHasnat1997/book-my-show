import React from "react";
import { useLoaderData } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import MyModal from "../../components/MyModal";
import { useTitle } from "../../hooks/useTitle";


const ShowDetails = () => {
  // const [shows] = useLoadData();
  // const id = useParams();
  // const showDetail = shows.find(show => show.show.id === parseInt(id.id));
  // console.log(showDetail);

  const showDetail = useLoaderData();
  const { image, name, genres, summary, language, rating, runtime, premiered, schedule, ended } = showDetail;
  useTitle(name);
  const [modalShow, setModalShow] = React.useState(false);

  const summaryParagraph = () => {
    return { __html: summary };
  }


  return (
    <Container className="my-5">
      <Row>
        <Col sm>
          <img src={image?.original} alt="Poster" className="img-fluid" />
        </Col>
        <Col sm>
          <h1 className="fw-bold">{name}</h1>
          <p>
            {
              genres.map((genre, i) => <span key={i} className="me-2 border p-2 rounded">
                {genre}
              </span>)
            }
          </p>
          <p>Language: {language}</p>
          <p>
            Ratting: {rating?.average ? rating?.average : 'No Ratting'}
          </p>
          <p>Runtime: {runtime} minutes</p>
          <p>Premiered: {premiered}</p>
          <p>End: {ended ? ended : 'No Data Found'}</p>
          <p>
            Schedule: <span>{
              schedule?.days.length === 0 ? "No Days" : schedule?.days
            }</span>, <span>{
              schedule?.time.length > 0 ? schedule?.time : 'No Time'
            }</span>
          </p>
          <p dangerouslySetInnerHTML={summaryParagraph()} />
          <Button variant="primary" size="lg" className="ms-auto" onClick={() => setModalShow(true)}>
            Book The Show
          </Button>
          <MyModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            details={showDetail}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ShowDetails;
