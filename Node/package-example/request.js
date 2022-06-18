const axios = require("axios");
axios
  .get("https://www.google.com")
  .then((res) => {
    console.log("Get", res);
  })
  .catch((err) => {
    console.log("error", err);
  });
