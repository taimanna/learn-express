import CRUDService from '../services/CRUDService'
import db from '../models/index'

const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll()
    return res.render('crud.ejs')
  } catch (err) {
    console.log(err)
  }
}

const readCRUD = async (req, res) => {
  const data = await CRUDService.getAllUser()
  return res.render('readCRUD.ejs', { data: data })
}

const editCRUD = async (req, res) => {
  const userId = req.query.id
  if (userId) {
    const userData = await CRUDService.getUserById(userId)
    if (userData) {
      return res.render('editCRUD.ejs', { data: userData })
    }
  }
  return res.send('User not found')
}

const postCRUD = async (req, res) => {
  const data = req.body
  await CRUDService.createNewUser(data)
  return res.send('post crud')
}

const putCRUD = async (req, res) => {
  const data = req.body
  const allUsers = await CRUDService.updateUserById(data)
  return res.render('readCRUD.ejs', { data: allUsers })
}

const deleteCRUD = async (req, res) => {
  const userId = req.query.id
  if (userId) {
    const allUsers = await CRUDService.deleteUserById(userId)
    return res.render('readCRUD.ejs', { data: allUsers })
  }
  return res.send('User not found')
}

module.exports = {
  getHomePage,
  readCRUD,
  postCRUD,
  editCRUD,
  putCRUD,
  deleteCRUD,
}
