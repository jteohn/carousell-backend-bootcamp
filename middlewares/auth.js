const { auth } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "https://carousell/api",
  issuerBaseURL: `https://dev-hqw8bn5ztyq65ziu.us.auth0.com/`,
});

module.exports = checkJwt;

//TODO: store issuerbaseURL in .env
