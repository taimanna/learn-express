import bcrypt from 'bcryptjs'
import db from '../models/index'

const handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check user email exists
      const userData = await db.User.findOne({ where: { email: email }, raw: true })
      if (userData) {
        // check user password
        const isPasswordCorrect = bcrypt.compareSync(password, userData.password)
        if (isPasswordCorrect) {
          delete userData.password

          resolve({
            errCode: 0,
            message: 'OK',
            user: userData,
          })
        }
        resolve({
          errCode: 1,
          message: 'Password is incorrect',
          user: {},
        })
      }
      resolve({
        errCode: 1,
        message: 'Email is incorrect',
        user: {},
      })
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  handleUserLogin,
}
