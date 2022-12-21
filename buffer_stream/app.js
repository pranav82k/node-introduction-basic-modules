const fs = require('fs');

const readStream = fs.createReadStream('./largetext.txt', { encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./newlarge.txt');
// readStream.on('data', chunk => {
//     console.log("### new chunk");
//     writeStream.write("\n ####### New Chunk \n");
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);