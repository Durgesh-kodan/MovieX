const responseWithData = (res , statusCode , data) =>res.status(statusCode).json(data);

const error = responseWithData(res , 500 ,{
    status:500,
    message:"Oops! something is wrong"
})

const badrequest = (res , message)=> responseWithData(res ,400 , {
    status:400,
    message
})

const ok =(res , data)=> responseWithData(res , 200 , data);

const created = (res , data )=>responseWithData(res , 201 , data);

const unauthorise = (res )=> responseWithData(res ,401, {
    status:401,
    message:"unauthorise"
})

const notFound = (res )=> responseWithData(res ,404, {
    status:404,
    message:"Error not found"
})

export default {error , badrequest , ok , created , unauthorise , notFound}