const userCtrl = {}

const User = require('../models/User')

userCtrl.getUsers = async (req,res) => {
    const users = await User.find()
    res.json(users)
}

userCtrl.createUser = async (req,res) => {
    const {name,lastname,age,phone,email} = req.body
    const newUser = new User({
        name: name,
        lastname: lastname,
        age: age,
        phone: phone,
        email: email
    })
    await newUser.save()
    res.json({message: 'User created'})
}

userCtrl.getUser = async (req,res) => {
    const user = await User.findById(req.params.id)
    res.json({message: 'User found', user})
}
userCtrl.deleteUser = async (req,res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    res.json({message: 'User deleted', user})
}
userCtrl.updateUser = async (req,res) => {
    const {name,lastname,age,phone,email} = req.body
    const user = await User.findByIdAndUpdate(req.params.id, {
        name,
        lastname,
        age,
        phone,
        email,
    })   
    res.json({message: 'User updated', user})
}

module.exports = userCtrl
