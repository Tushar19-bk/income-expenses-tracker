

 const globalErrHandler =  (err, req, res, next)=>{
    // err message actual error
    // req status
    // res statusCode 
    //next stack which line of code wrong 
     const statusCode = err.statusCode = err.statusCode || 500;
    const status = err.status = err.status || "error";
    const message = err.message;
    const stack = err.stack ;
    res.status(statusCode).json({
        status,
        message ,
        stack,
    })
};

module.exports = globalErrHandler;