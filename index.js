const express = require("express");
const cors = require("cors")({
  origin: true,
});
const axios = require("axios");
const app = express();
const port = 4000;

app.use(cors);
app.options("*", cors);

app.get("/", (req, res) => {
  res.send("Son of Vaccinosaurus says Grrrrr!");
});

app.get("/calenderByPin", (req, res) => {
  const pincode = req.query.pincode;
  const date = req.query.date;
  const config = {
    method: "get",
    url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`,
    headers: {
      accept: "application/json",
      "Accept-Language": "hi_IN",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.62 Safari/537.36",
    },
  };

  axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });
});
app.get("/calenderByDistrict", (req, res) => {
  const districtID = req.query.district_id;
  const date = req.query.date;
  const config = {
    method: "get",
    url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtID}&date=${date}`,
    headers: {
      accept: "application/json",
      "Accept-Language": "hi_IN",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.62 Safari/537.36",
    },
  };

  axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
