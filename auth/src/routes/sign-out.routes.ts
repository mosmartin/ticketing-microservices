import express from 'express';

const router = express.Router();

router.post('/api/v1/users/signout', (req, res) => {
  res.status(200).json({
    message: 'Sign Out',
  });
});

export { router as signOutRouter };
