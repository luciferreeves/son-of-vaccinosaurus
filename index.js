const express = require('express');
const cors = require('cors')({
    origin: true
});
const axios = require('axios');
const app = express();
const port = 4000;

app.use(cors);
app.options('*', cors);

app.get('/', (req, res) => {
    res.send('Son of Vaccinosaurus says Grrrrr!');
})

// app.get('/', (req, res) => {
    // var config = {
    //     method: 'get',
    //     url: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=700016&date=07-05-2021',
    //     headers: {
    //         'accept': 'application/json',
    //         'Accept-Language': 'hi_IN'
    //     }
    // };

    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
// })

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})