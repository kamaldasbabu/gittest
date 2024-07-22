// const { readFile } = require("../../services/v1/file.services");
const fs = require("fs");
const path = require("path");


const fileExample = (req, res) => {
    // eslint-disable-next-line no-undef
    const file_path = path.join(__dirname, "..","..", "public", "uploads", "demo.txt");
    console.log("file_path", file_path);

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'inline'); 

    const readStream = fs.createReadStream(file_path);

    readStream.on('data', (chunk) => res.write(chunk));
    readStream.on('end', () => res.end());
};

module.exports = { fileExample };