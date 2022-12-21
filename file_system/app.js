const fs = require('fs');

// console.log(fs);

// Read a file
// fs.readFile('./note.txt', (err, data) => {
//     if(err) console.log(err)
//     console.log(data.toString());
// })


// Write a file
// fs.writeFile('./note.txt', 'Content Replaced', (err, data) => {
//     if(err) console.log(err)
//     console.log("Content Replaced");
// })


// Append file
// fs.appendFile('./note.txt', 'Content Appended at the last\r\n', (err, data) => {
//     if(err) console.log(err);
//     console.log("Data Appended");
// })

// Create Folder
// fs.mkdir('newfolder', (err, data) => {
//     if(err) console.log(err);
//     console.log('New Folder created');
// })

// Check Folder exist or not, if not exist create one

// if(!fs.existsSync('newfolder')) {
//     fs.mkdir('newfolder', (err, data) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log("Folder created");
//     })
// } else {
//     console.log("Folder Already exist");
// }

// Remove Directory if exist

// if(fs.existsSync('newfolder')) {
//     fs.rmdir('newfolder', (err, data) => {
//         if(err) console.log(err);
//         console.log('Folder deleted');
//     })
// } else {
//     console.log("Folder not exist");
// }

// Delete File

if(fs.existsSync('./note.txt')) {
    fs.unlink('./note.txt', (err, data) => {
        if(err) console.log(err);
        console.log("File deleted");
    });
} else{
    console.log("File not exist");
}