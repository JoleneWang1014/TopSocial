const express = require('express');
const axios = require('axios');
const userProfilesRouter = express.Router();


const USER_PROFILES_API_URL = 'http://localhost:8000/userProfiles';

// GET get UserProfile by id /api/userProfiles/:userId
userProfilesRouter.get('/:userId', async (req, res) => {
    console.log('Received userId:', req.params.userId);

    const id = req.params.userId;

    if(!id){
        return res.status(400).json({ msg: 'User ID is required' });
    }
    try {
        const response = await axios.get(`${USER_PROFILES_API_URL}/${id}`);

        const userProfile = response.data;

        res.status(200).json({
            msg:'Get userProfile successfully',
            data: userProfile   
        });
    } catch (error) {
        console.error(error);
    }
}
);  

module.exports = userProfilesRouter;