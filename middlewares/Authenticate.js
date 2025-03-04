import jwt from "jsonwebtoken"

export const Authenticate = (req, res, next) => {

  console.log(req.headers)

  next()

}
