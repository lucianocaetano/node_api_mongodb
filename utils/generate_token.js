
export const generate_token = (user) => {
  return jwt.sign({uid: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 15})
}
