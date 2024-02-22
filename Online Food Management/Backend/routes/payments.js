

const router = require("express").Router();
let payment = require("../models/payment");


router.route("/add").post((req,res)=>{
    const PaymentID = req.body.PaymentID;
    const Type = req.body.Type;
    const Quantity = req.body.Quantity;
    const Total = req.body.Total;

    const newpayment = new payment({
        PaymentID,
        Type,
        Quantity,
        Total
    })
    newpayment.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err);
    })
})




router.route("/").get(()=>{
    payment.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{PaymentID,Type,Quantity,Total}= req.body;

    const updatepayment = {
        PaymentID,
        Type,
        Quantity,
        Total
    }
    const update = await payment.findByIdAndUpdate(userId,updatepayment)
    .then(()=>{
        res.status(200).send({status: "Payment updated"})
    }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with updating data"});
    })
})



router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await payment.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "Payment deleted"});
    }).catch((errr)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await payment.findById(userId)
    .then((payment)=>{
        res.status(200).send({status:"Payment fetched",payment})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});
    })
})

module.exports = router;