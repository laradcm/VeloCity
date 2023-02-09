const express = require('express');
const cors = require('cors');
const reqTracking = require('./src/middlewares/reqTracking');
const errorHandler = require('./src/middlewares/errorHandler');
const bicyclesRouter = require('./src/routes/bicycles');

const PORT = process.env.PORT || 3000;
const app = express();

const corsOptions =  {
    origin: "*",// to be changed to the port num or external address for security
    optionsSuccessStatus: 200 //for legacy browsers, 204 is default
}

//middlewares
app.use(cors(corsOptions));//allows different ip/PORTS comms 
app.use(express.json());//body json parser
app.use(reqTracking);//logs requests received

//routing
app.use('/bicycles', bicyclesRouter);

app.use(errorHandler);

//listen
app.listen(PORT, "127.0.0.1",() => {
    console.log("listening on port:" + PORT);
})

