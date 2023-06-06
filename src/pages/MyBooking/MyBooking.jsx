import { Container } from "react-bootstrap";
import { getBookingCart, removeFromDb } from "../../utilities/localDB";
import Table from 'react-bootstrap/Table';
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";



const MyBooking = () => {
  useTitle('My Booking');
  const bookings = getBookingCart();
  const navigate = useNavigate();
  const handelRemove = i => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromDb(i);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        navigate('/my-booking');
      }
    })
  };

  return (
    <Container className="my-5">
      {
        bookings?.length > 0 ? (<Table hover>
          <thead>
            <tr>
              <th></th>
              <th>Show Name</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map((booking) => <tr key={booking?.id}>
                <td><button onClick={() => handelRemove(booking?.id)} className="rounded-circle">X</button></td>
                <td>{booking?.data?.showName}</td>
                <td>{booking?.data?.bookingDate}</td>
                <td>{booking?.data?.schedule}</td>
              </tr>)
            }
          </tbody>
        </Table>) : <p className="fs-1 fw-bold">No Booking Available</p>
      }
    </Container>
  );
};

export default MyBooking;
