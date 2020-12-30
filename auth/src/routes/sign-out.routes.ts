import express from 'express';

import { signOut } from '../controllers/sign-out.controller';

const router = express.Router();

router.post('/api/v1/users/signout', signOut);

export { router as signOutRouter };
