import User from "../../../helper/Modal/User";
import initDB from "../../../helper/initDB";
import bcrypt from "bcrypt";

initDB()

export default async (req,res) =>{

    const { identifier, password } = req.body;

    if (!identifier || !password) {
      
      return res
        .status(404)
        .json({ error: "You Have Not Provided All The Informations" });
    }
  
    if (identifier.includes(".com")) {
    return res.status(502).json({ error: "Please Enter UserID"} )
    } else {
      console.log(identifier)
      const number = await User.find({ SponserCode: identifier });


      console.log(number)

      if (!number) {
        return res.status(404).json({ error: "User Don't Exists" });
      }

      console.log("entered password ===> "+password)
      console.log("my hash ===> "+number[0].Passsword)
  
      const doMatch = await bcrypt.compare(password, number[0].Passsword);
  
      if (doMatch) {
        res.status(201).json(number);
      } else {
        return res.status(401).json({ error: "userid or password don't match" });
      }
    }







}