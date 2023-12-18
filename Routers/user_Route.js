const router = require('express').Router
const {User} = require('../Models/userModel')

/**
 * @desc get all
 * @route /api/usser
 * @method GET
 * @access public
 */
router.get("/", async(req, res) => {
    try {
      const User = await User.find();
      res.status(200).json(User)
    } catch (error) {
      console.log(error)
      res.status(500).json({message :"somthing went wrong ! in server connction"})
    }
  });
  