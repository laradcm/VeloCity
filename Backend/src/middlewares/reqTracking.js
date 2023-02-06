

function reqTracking(req, res, next){
    console.log(`${req.method} request received for ${req.url} from ${req.ip}`);
    next();
}

module.exports = reqTracking;