import express from 'express';

import { getCurrentUser } from '../controllers/current-user.controller';
import { auth } from '../middlewares/auth';
import { currentUser } from '../middlewares/current-user';

const router = express.Router();

router.get('/api/v1/users/me', currentUser, auth, getCurrentUser);

export { router as currentUserRouter };
