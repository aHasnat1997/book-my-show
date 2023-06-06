import { Modal } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form";
import { addToDb } from "../utilities/localDB";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const MyModal = (props) => {
  const { details } = props;
  const { name, language, id } = details;
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const stor = { data, id }
    addToDb(stor)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1000
    });
    navigate('/my-booking');
  };


  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Booking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control type="text" value={name} {...register("showName")} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Language</Form.Label>
                <Form.Control type="text" value={language} {...register("language")} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Booking Date</Form.Label>
                <Form.Control type="date" {...register("bookingDate")} required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Show Time</Form.Label>
                <Form.Select defaultValue="Choose..." {...register("schedule")} required>
                  <option>Choose...</option>
                  <option value={"morning"}>Morning</option>
                  <option value={"evening"}>Evening</option>
                  <option value={"night"}>Night</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <input className="bg-primary fs-4 rounded py-2 px-4" type="submit" />
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyModal;
