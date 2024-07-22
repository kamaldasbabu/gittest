const path = require("path");
const fs = require("fs");


const readFile = () => {

    // eslint-disable-next-line no-undef
    const file_path = path.join(__dirname, "..", "..", "public", "uploads", "demo.txt");
    console.log("file_path", file_path);
    const readStream = fs.createReadStream(file_path);
    readStream.on('data', (chunk) => {
        // Process each chunk of data
        console.log(chunk.toString());
    })

    return readStream;
}


module.exports = { readFile }