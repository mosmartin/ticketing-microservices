import express from 'express';

const router = express.Router();

router.post('/api/v1/users/signin', (req, res) => {
  res.status(200).json({
    message: 'Sign In',
  });
});

export { router as signInRouter };
