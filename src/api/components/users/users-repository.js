const { User } = require('../../../models');

/**
 * Get a list of users
 * @returns {Promise}
 */
async function getUsers() {
  return User.find({});
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function getUser(id) {
  return User.findById(id);
}

/**
 * Create new user
 * @param {string} name - Name
 * @param {string} email - Email
 * @param {string} password - Hashed password
 * @returns {Promise}
 */
async function createUser(name, email, password) {
  return User.create({
    name,
    email,
    password,
  });
}

/**
 * Update existing user
 * @param {string} id - User ID
 * @param {string} name - Name
 * @param {string} email - Email
 * @returns {Promise}
 */
async function updateUser(id, name, email) {
  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name,
        email,
      },
    }
  );
}

async function changePassword(id, oldPassword, newPassword) {
  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        newPassword
      }
    }
  )
  // // Get the user from the database
  // const user = await User.findById(id);

  // // Check if user exists
  // if (!user) {
  //   return false; // User not found
  // }

  // // Verify old password
  // if (hashPassword(oldPassword) !== user.password) {
  //   return false; // Old password does not match
  // }

  // // Update password in the database
  // user.password = hashPassword(newPassword);
  // await user.save();

  // return true; // Password changed successfully
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function deleteUser(id) {
  return User.deleteOne({ _id: id });
}

/**
 * Check if email already exists
 * @param {string} email - Email
 * @returns {Promise<boolean>}
 */
async function checkEmailExists(email) {
  const existingUser = await User.findOne({ email });
  return !!existingUser;
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  checkEmailExists,
  changePassword
};
