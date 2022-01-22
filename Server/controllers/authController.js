import Profile from '../models/registerModels.js'

export const registerData = async (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
        return res.status(422).json({ error: "Add all data" })
    }
    let User = new Profile(req.body)
    User.save()
        .then(reg => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.status(400).send("Failed to store to database");
        });
}

    export const loginData = (req, res) => {
        const { email, password } = req.body;
        User.findone({ email: email }, (err, user) => {
            if (user) {
                if (password === user.password) {
                    res.send({ message: "login sucess", user: user })
                    console.log('here')
                } else {
                    res.send({ message: "wrong credentials" })
                }
            } else {
                res.send("not register")
            }
        })
    }