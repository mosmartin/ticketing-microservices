import express from 'express';

const router = express.Router();

router.post('/api/v1/users/signup', (req, res) => {
  res.status(200).json({
    message: 'Sign Up',
  });
});

export { router as signUpRouter };
