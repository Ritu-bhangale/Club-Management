import express from 'express';
const router = express.Router();
signUpTemplateCopy = require('../models/signupmodels')

router.post('/signup', (request, response) => {
    const signedupUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        email: request.body.email,
        password: request.body.password,
    })
    signedupUser.save()
        .then(data => { response.json(data) })
        .catch(err => { response.json(err) })
})

export default router;