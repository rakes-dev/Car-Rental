import {React, useState} from "react";
import "../../styles/booking-form.css";
import "../../styles/payment-method.css"
import { Form, FormGroup } from "reactstrap";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useNavigate } from "react-router-dom";

const BookingForm = () => {

    const [value, setValue] = useState('');
    const navigate = useNavigate

    const submitHandler = (event) => {
        event.preventDefault();
        navigate("/payment");
    };
    return (
        <div className="booking-form-home">
            <div className="header-book"><h1> Booking Details</h1></div>
        <Form>
            <FormGroup className="booking-form d-inline-block me-4 mb-4">
                <input type="text" placeholder="First Name" required/>
            </FormGroup>
            <FormGroup className="booking-form d-inline-block ms-1 mb-4">
                <input type="text" placeholder="Last Name" required/>
            </FormGroup>

            <FormGroup className="booking-form d-inline-block me-4 mb-4">
                <input type="email" placeholder="Email" required/>
            </FormGroup>
            <FormGroup className="booking-form d-inline-block ms-1 mb-4">
                <input type="number" placeholder="Phone Number" required/>
            </FormGroup>

            <FormGroup className="booking-form d-inline-block me-4 mb-4">
                <input type="text" placeholder="From Address" required/>
            </FormGroup>
            <FormGroup className="booking-form d-inline-block ms-1 mb-4">
                <input type="text" placeholder="To Address" required/>
            </FormGroup>

            <FormGroup className="booking-form d-inline-block me-4 mb-4">
                <select name="" id="" required>
                    <option value="1 person">1 Person</option>
                    <option value="2 person">2 Person</option>
                    <option value="3 person">3 Person</option>
                    <option value="4 person">4 Person</option>
                    <option value="5+ person">5+ Person</option>
                </select>
            </FormGroup>
            <FormGroup className="booking-form d-inline-block ms-1 mb-4">
                <select name="" id="" required>
                    <option value="1 Luggage">1 Luggage</option>
                    <option value="2 Luggage">2 Luggage</option>
                    <option value="3 Luggage">3 Luggage</option>
                </select>
            </FormGroup>

            <FormGroup className="booking-form d-inline-block me-4 mb-4">
                <input type="date" placeholder="Journey Date" required/>
            </FormGroup>
            <FormGroup className="booking-form d-inline-block ms-1 mb-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker className="journey-time" label=""
         value={value}
         onChange={(newValue) => setValue(newValue)} required/>
          </DemoContainer>
         </LocalizationProvider>
            </FormGroup>
            
                <div className="payment text-end mt-5">
                    <button onSubmit={submitHandler}>Proceed to pay</button>
                </div>
           
           

            {/* <FormGroup>
                <textarea
                    rows={5}
                    type="textarea"
                    className="textarea"
                    placeholder="Write"
                ></textarea>
            </FormGroup> */}
        </Form>
        </div>
    );
};

export default BookingForm;
