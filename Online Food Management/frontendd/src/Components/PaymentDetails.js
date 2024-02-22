import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PaymentDetails() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    function getPayment(){
    axios
      .get("http://localhost:8070/Payment")
      .then((res) => {
        setPayments(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    }
    getPayment();
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Payment Details</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Update</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>{payment.paymentID}</td>
              <td>{payment.type}</td>
              <td>{payment.quantity}</td>
              <td>{payment.total}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary">Update</button>
              </td>
              <td>
                <button className="btn btn-sm btn-outline-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
