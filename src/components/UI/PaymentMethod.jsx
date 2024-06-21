import React, { useState } from 'react';
import '../../styles/payment.css'

const PaymentForm = () => {
  const [cardname, setCardname] = useState('');
  const [cardno, setCardno] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvv, setCvv] = useState('');

  const [vprice, setVprice] = useState(0);
  const handleVpriceChange = (event) => {
    setVprice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or perform payment processing here
    console.log('Form submitted:', {
      cardname,
      cardno,
      expMonth,
      expYear,
      cvv,
    });
  };

  return (
    <div className="container-payment">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h3 className="title">Payment</h3>
            <div className="inputBox-payment">
              <span>Amount</span>
              <input type="text" value={vprice} onChange={handleVpriceChange} placeholder={vprice} />
            </div>
            <div className="inputBox-payment">
              <span>Cards Accepted :</span>
              <img src={require("../../assets/all-imges/card_img.png")} alt="" />
            </div>
            <div className="inputBox-payment">
              <span>Name on Card :</span>
              <input
                type="text"
                value={cardname}
                onChange={(event) => setCardname(event.target.value)}
                placeholder="Mr. John Deo"
              />
            </div>
            <div className="inputBox-payment">
              <span>Credit Card Number :</span>
              <input
                type="number"
                value={cardno}
                onChange={(event) => setCardno(event.target.value)}
                placeholder="1111-2222-3333-4444"
              />
            </div>
            <div className="inputBox-payment">
              <span>Exp Month :</span>
              <input
                type="text"
                value={expMonth}
                onChange={(event) => setExpMonth(event.target.value)}
                placeholder="January"
              />
            </div>

            <div className="flex">
              <div className="inputBox-payment">
                <span>Exp Year :</span>
                <input
                  type="number"
                  value={expYear}
                  onChange={(event) => setExpYear(event.target.value)}
                  placeholder="2022"
                />
              </div>
              <div className="inputBox-payment">
                <span>CVV :</span>
                <input
                  type="text"
                  value={cvv}
                  onChange={(event) => setCvv(event.target.value)}
                  placeholder="1234"
                />
              </div>
            </div>
          </div>
        </div>

<input type="submit" value="Proceed to Checkout" className="submit-btn" />
      </form>
    </div>
  );
};

export default PaymentForm;