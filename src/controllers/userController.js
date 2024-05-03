import UserService from '../services/UserService'

const handleLogin = async (req, res) => {
  const userData = await UserService.handleUserLogin(req.body.email, req.body.password)

  if (userData) {
    return res.status(200).json({
      ...userData,
    })
  }

  return res.status(400).json({
    message: 'Login failed',
  })
}

module.exports = {
  handleLogin,
}
