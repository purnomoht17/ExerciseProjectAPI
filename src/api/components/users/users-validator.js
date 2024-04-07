const joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      passwordConfirm : joi.string().min(6).max(32).required().label('PasswordConfirm')
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changePassword: {
    body : {
      oldPassword : joi.string().min(6).max(32).required().label('oldPassword'),
      newPassword : joi.string().min(6).max(32).required().label('newPassword'),
      newPasswordConfirm : joi.string().min(6).max(32).required().label('newPasswordConfirm')
    },
  },
};
