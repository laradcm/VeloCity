const express = require('express');
const cors = require('cors');
const reqTracking = require('./src/middlewares/reqTracking')
const bicyclesRouter = require('./src/routes/bicycles');

const PORT = process.env.PORT || 3000;
const app = express();

const corsOptions =  {
    origin: "*",// to be changed to the port num or external address for security
    optionsSuccessStatus: 200 //for legacy browsers, 204 is default
}

//middlewares
app.use(cors(corsOptions));//allows different ip/PORTS comms 
app.use(reqTracking);//logs requests received

//routing
app.use('/bicycles', bicyclesRouter);

//listen
app.listen(PORT, () => {
    console.log("listening on port:" + PORT);
})

