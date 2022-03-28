import axios from "axios";


export async function login(
    userName,
    password
){
    const payload = {
        user_name: userName,
        user_password: password
    }

    try{
        const results = await axios.post('http://192.168.0.109:7000/login/2/3',payload);
        console.log("succes",results.data);
    } catch (error) {
        console.log(error);
    }
        // console.log(payload);
}
