import express from 'express';
import { check, validationResult } from 'express-validator';
import pg from '../lib/pg';

const router = express.Router();

router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
], async (req: express.Request, res: express.Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await pg.any(`
    insert into test.user(name, email)
    values($(name), $(email))
  `, req.body);

  res.send('OK');
});

export = router;