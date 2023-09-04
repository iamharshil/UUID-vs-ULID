const { workerData } = require("worker-threads");
const ulid = require("ulid");

const { length } = workerData;
const ids = [];
[...Array(length).keys()].map((each) => ids.push(ulid()));
