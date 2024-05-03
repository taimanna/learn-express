import bcrypt from 'bcryptjs'
import db from '../models/index'

const createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const passwordHash = bcrypt.hashSync(data.password, 10)
      await db.User.create({
        email: data.email ? data.email : '',
        password: passwordHash ? passwordHash : '',
        firstName: data.firstName ? data.firstName : '',
        lastName: data.lastName ? data.lastName : '',
        image: data.image ? data.image : '',
        address: data.address ? data.address : '',
        phoneNumber: data.phoneNumber ? data.phoneNumber : '',
        gender: data.gender === '1' ? true : false,
        roleId: data.roleId ? data.roleId : '',
        positionId: data.positionId ? data.positionId : '',
      })

      resolve('success')
    } catch (e) {
      reject(e)
    }
  })
}

const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.User.findAll({ raw: true })
      resolve(users)
    } catch (e) {
      reject(e)
    }
  })
}

const getUserById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userData = await db.User.findOne({ where: { id: userId }, raw: true })
      resolve(userData)
    } catch (e) {
      reject(e)
    }
  })
}

const updateUserById = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.update(data, { where: { id: data.id } })
      const allUsers = await db.User.findAll()
      resolve(allUsers)
    } catch (e) {
      reject(e)
    }
  })
}

const deleteUserById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.destroy({ where: { id: userId } })
      const allUsers = await db.User.findAll()
      resolve(allUsers)
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  createNewUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
}
