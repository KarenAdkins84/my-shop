import express from 'express';
const router = express.Router();
import { authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser } from '../controllers/userController.js';
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login',authUser);
router
    .route('/profile')
    .get(getUserProfile)
    .put(updateUserProfile);
router
    .route('/:id')
    .delete(checkObjectId, deleteUser)
    .get(checkObjectId, getUserById)
    .put(checkObjectId, updateUser);

export default router;