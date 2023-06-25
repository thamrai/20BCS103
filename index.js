const express = require("express");
const fetch = (...args) =>
    import ("node-fetch").then(({ default: fetch }) => fetch(...args));
const app = express();
const PORT = 8008;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/numbers", async(req, res) => {
    const urls = req.query["url"];
    let inputs = [];
    if (!Array.isArray(urls)) {
        inputs.push(urls);
    } else {
        inputs = [...urls];
    }
    output = new Set();
    const getNumbersFromRemote = async(url) => {
        const response = await fetch(url);
        return response.json().then((data) => {
            return data;
        });
    };
    Promise.all(
        inputs.map(async(url) => {
            try {
                let nums = await getNumbersFromRemote(url);
                console.log(nums);
                if (nums ? .numbers) return nums.numbers;
                else return [];
            } catch (err) {
                return [];
            }
        })
    ).then((values) => {
        console.log(values);
        values.forEach((response) => {
            if (response !== undefined) response.forEach((i) => output.add(i));
        });
        let arr = Array.from(output);
        console.log(arr);
        return res.send(arr.sort((a, b) => a - b));
    });
});

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log("Server started at port 8008");
});
