const url = "https://keasem2-6806.restdb.io/rest/succulents?max=10";

const key = {
    headers: {
        "x-apikey": "61361b1443cedb6d1f97ed4f",
    },
};


console.log("hello?");
fetch(url, key)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
    })