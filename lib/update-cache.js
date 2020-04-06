const axios = require("axios");
const csv2json = require("csvjson-csv2json");
const fs = require("fs");

const SHEET = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSb8E61f73swPO9Mdvo3u2buf-pglEpgLHOa8wFpRzUtn3_8Dcf7cxhi-lGlJL9yOLXjIBBWw4UsYL9/pub?gid=0&single=true&output=csv`;

axios
  .get(SHEET)
  .then((response) => {
    const csv = response && response.data ? response.data : null;
    if (csv) {
      const json = csv2json(csv, { parseNumbers: true });
      const body = `export const services = ${JSON.stringify(
        json.slice(1),
        null,
        2
      )}`;
      fs.writeFileSync("./src/cache.js", body, "utf8");
    }
  })
  .catch((e) => {
    console.error(e);
  });
