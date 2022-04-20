const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get()
    .post();

// /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// /api/users/:userId/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

module.exports = router;