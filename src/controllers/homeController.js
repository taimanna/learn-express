import CRUDService from '../services/CRUDService'
import db from '../models/index'

const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll()
    return res.render('homepage.ejs', {
      data: JSON.stringify(data),
    })
  } catch (err) {
    console.log(err)
  }
}

const readCRUD = async (req, res) => {
  const data = await CRUDService.getAllUser()
  console.log(data)
  return res.render('readCRUD.ejs', { data: data })
}

const editCRUD = async (req, res) => {
  const userId = req.query.id
  if (userId) {
    const userData = await CRUDService.getUserById(userId)
    console.log(userData)
    if (userData) {
      return res.render('editCRUD.ejs', { data: userData })
    }
  }
  return res.send('User not found')
}

const postCRUD = async (req, res) => {
  const message = await CRUDService.createNewUser(req.body)
  console.log(message)
  return res.send('post crud')
}

const putCRUD = async (req, res) => {
  const userId = req.query.id
  console.log(userId)
  // const message = await CRUDService.updateUserById(userId, req.body)
  // console.log('update user')
  // console.log(message)
  return res.send('put crud')
}

module.exports = {
  getHomePage,
  readCRUD,
  postCRUD,
  editCRUD,
  putCRUD,
}
