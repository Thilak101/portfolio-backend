const router = require("express").Router()
const { User } = require('../models')


router.get("/", (req, res) => {
    res.json({ msg: "user router" })
})

router.post("/", async (req, res) => {
    try {
        const user = await User.create({
            email: req.body.email,
            name: req.body.name,
            message: req.body.message
        })
        res.json({ msg: user, success: true })

    }
    catch (err) {
       console.log(err.message)
    }
})

module.exports = router