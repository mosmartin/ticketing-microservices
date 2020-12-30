import express from 'express';

import { getCurrentUser } from '../controllers/current-user.controller';
import { currentUser } from '../middlewares/current-user';

const router = express.Router();

router.get('/api/v1/users/me', currentUser, getCurrentUser);

export { router as currentUserRouter };
