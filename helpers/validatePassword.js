const bycrpt = require('bcrypt')

const validatePassword =(password ,hashPassword)=>{
    return bycrpt.compareSync(password ,hashPassword)
}
  module.exports = validatePassword ;