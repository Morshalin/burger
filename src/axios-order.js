import axios from "axios";

/* var cors = require('cors')

app.use(cors()) // Use this after the variable declaration */

const instance =  axios.create({
    baseURL:'https://burger-91802-default-rtdb.firebaseio.com/',
});

export default instance;