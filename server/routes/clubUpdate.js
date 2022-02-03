const router = require('express').Router();
let Club = require('../models/clubModel');

router.route('/').get((req, res) => {
    Club.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const wingname = req.body.wingname;
    const website = req.body.website;
    const description = req.body.description;

    const newClub = new Club({
        name,
        wingname,
        website,
        description,
    });

    newClub.save()
        .then(() => res.json('Cllub added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;