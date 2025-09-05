
const users = [];
module.exports={
    createUser: (req,res) =>{
        const {username, email, password} = req.body;
        console.log("Request body:", req.body);

        
        if(!username || !email || !password){
            return res.status(400).json({status:false, message: "Please enter all fields"});
        }
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
        return res.status(400).json({ status: false, message: "User already exists" });
        }
        const newUser = {username, email, password};
        users.push(newUser);
        return res.status(201).json({status:true, message: "User created successfully", user: newUser});
    },
    loginUser: (req,res)=>{
        const{email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({status:false, message: "Please enter all fields"});
        }
        const user = users.find(user => user.email === email && user.password === password);
        if(!user || user.password !== password){
            return res.status(400).json({status:false, message: "Invalid credentials"});
        }
        return res.status(200).json({status:true, message: "Login successful", user});
    }

}