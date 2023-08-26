const Profile = require('../model/profile.model'); 
const asyncHandler = require('express-async-handler');

const getAllProfiles = asyncHandler(async (req, res) => {
    Profile
        .find()
        .then(profiles => {
            return res.status(200).send(profiles)
        })
        .catch(error => {
            console.log(error);
        })
})



const updateProfile = asyncHandler(async (req, res) => {
    const { _id, bio, gender, userName } = req.body;

    try {
        const profile = await Profile.findByIdAndUpdate(
            _id,
            { bio, gender, userName },
            { new: true }
        );

        if (profile) {
            return res.status(200).json({ message: 'Profile updated successfully' });
        } else {
            return res.status(404).json({ message: 'Profile not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating profile' });
    }
});

  module.exports = {
    getAllProfiles,
    updateProfile
}
