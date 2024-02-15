import express from 'express';

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
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth',authUser);
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
router
    .route('/:id')
    .delete(protect, admin, checkObjectId, deleteUser)
    .get(protect, admin, checkObjectId, getUserById)
    .put(protect, admin, checkObjectId, updateUser);

export default router;