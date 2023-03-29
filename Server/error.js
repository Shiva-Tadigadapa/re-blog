export const createError = (message, statusCode) => {
    const err =  new Error();
    err.status = statusCode
    err.message = message
    return err
}