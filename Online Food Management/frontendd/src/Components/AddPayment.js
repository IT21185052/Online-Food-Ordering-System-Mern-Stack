import React,{useState} from "react"
import axios from "axios"

export default function AddPayment(){
  const [PaymentID,setPaymentID] = useState("");
  const [Type,setType] = useState("");
  const [Quantity,setQuantity] = useState("");
  const [Total,setTotal] = useState("");

  function sendData(e){
    e.preventDefault();
        const newPayment ={
          PaymentID,
          Type,
          Quantity,
          Total
        };
        axios.post("http://localhost:8070/Payment/add",newPayment).then(()=>{
          alert("Payment Added")
          setPaymentID("");
          setType("");
          setQuantity("");
          setTotal("");
        }).catch((err)=>{
          alert(err)
        })
  }
    return(
        <div className ="container">
        <form onSubmit={sendData}>
  <div className="mb-3">
    <label for="PaymentID" className="form-label">Payment ID</label>
    <input type="text" className="form-control" id="exampleInputID1" aria-describedby="IDHelp" placeholder="Enter the payment ID" onChange={(e)=>{

      setPaymentID(e.target.value);
    }}/>
  </div>
  <div className="mb-3">
    <label for="Type" className="form-label">Type</label>
    <input type="text" className="form-control" id="exampleInputType1" placeholder="Enter the Type" onChange={(e)=>{

setType(e.target.value);
}}/>
    <div id="idHelp" className="form-text">Please type as the menu</div>
  </div>
  <div className="mb-3">
    <label for="Quantity" className="form-label">Quantity</label>
    <input type="text" className="form-control" id="exampleInputqty1" placeholder="Enter the Quantity" onChange={(e)=>{

setQuantity(e.target.value);
}}/>
  </div>
  <div className="mb-3">
    <label for="Total" className="form-label">Total</label>
    <input type="text" className="form-control" id="exampleInputTotal1" placeholder="Enter the Total"onChange={(e)=>{

setTotal(e.target.value);
}}/>
  </div>
  <button type="submit" className="btn btn-primary">Add Payment</button>
</form>
</div>
    )
}