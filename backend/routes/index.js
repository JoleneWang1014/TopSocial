const express = require('express');
const userProfilesRouter = express.Router();
const userPostsRouter = express.Router();

const router = express.Router();

router.use('/userProfiles', userProfilesRouter);
router.use('/userPosts', userPostsRouter);

module.exports = router;
