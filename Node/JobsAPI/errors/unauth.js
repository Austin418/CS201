const CustomAPIError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')

class UnauthError extends CustomAPIError{
  super(message){
  this.statusCode = StatusCodes.UNAUTHORIZED
  }
}