import express from 'express';

const router = express.Router();

router.get('/api/v1/users/me', (req, res) => {
  res.status(200).json({
    message: 'Current User',
  });
});

export { router as currentUserRouter };
