// import { v4 as uuidv4 } from "uuid";
// import { ulid } from "ulid";
const { Worker } = require("worker_threads");

const arr = [...Array(100000).keys()];
// const uuids = [];
// console.time();
// arr.map((each) => {
// 	uuids.push(uuidv4());
// });
// console.timeEnd();

// const ulids = [];
// console.time();
// arr.map((each) => {
// 	ulids.push(ulid());
// });
// console.timeEnd();

const worker = new Worker("./generate-ulids.js", {
	workerData: { length: 10000 },
});
worker.on("message", (message) => {
	console.log(message);
});

worker.on("error", (error) => {
    console.log(error);
});

worker.on("exit", (code) => { 
    if (code !== 0) {
        console.error(new Error(`Worker stopped with exit code ${code}`));
    }
});