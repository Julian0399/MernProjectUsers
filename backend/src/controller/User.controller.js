const userCtrl = {}

const User = requiere('../models/User')

userCtrl.gerUser = async (req,res) => {
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
}

userCtrl.deleteUser = async (req,res) => {
    
}

userCtrl.updateUser = async (req,res) => {
    
}

