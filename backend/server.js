const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

const PI_API_KEY = "ka09ueynprhfmsx7378om9yctcbckabgliwsai9chuy0evb0ykuvwbbpg4hjgeyr";


// APPROVE
app.post("/approve", async (req,res)=>{

  const { paymentId } = req.body;

  try{

    const result = await axios.post(
      `https://api.minepi.com/v2/payments/${paymentId}/approve`,
      {},
      {
        headers:{
          Authorization:`Key ${PI_API_KEY}`
        }
      }
    );

    res.json(result.data);

  }catch(err){

    console.log(err.response?.data);

    res.status(500).json({
      error:"approve failed"
    });

  }

});


// COMPLETE
app.post("/complete", async (req,res)=>{

  const { paymentId, txid } = req.body;

  try{

    const result = await axios.post(
      `https://api.minepi.com/v2/payments/${paymentId}/complete`,
      {
        txid
      },
      {
        headers:{
          Authorization:`Key ${PI_API_KEY}`
        }
      }
    );

    res.json(result.data);

  }catch(err){

    console.log(err.response?.data);

    res.status(500).json({
      error:"complete failed"
    });

  }

});

app.listen(3000,()=>{
  console.log("SERVER RUNNING");
});
