import express from 'express';

import { getCurrentUser } from '../controllers/currentUser.controller';

const router = express.Router();

router.get('/api/v1/users/me', getCurrentUser);

export { router as currentUserRouter };
