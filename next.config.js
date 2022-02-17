const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "nextjs-user",
        mongodb_password: "L0ngAndBeautifulPassw0rd!",
        mongodb_clustername: "cluster0",
        mongodb_database: "prueba-dev",
      },
    };
  } else {
    return {
      env: {
        mongodb_username: "nextjs-user",
        mongodb_password: "L0ngAndBeautifulPassw0rd!",
        mongodb_clustername: "cluster0",
        mongodb_database: "prueba-prod",
      },
    };
  }
};
