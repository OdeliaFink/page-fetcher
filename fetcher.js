const request = require('request');
const fs = require('fs');

let siteDomain = process.argv[2];
let localPath = process.argv[3];

request(siteDomain, (error, response, body) => {
  fs.writeFile(localPath, body, function(error) {
    console.log("body", body)
    if(error) {
      console.log("error:", error)
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    }
  })
  console.log('error:', error)
  console.log('statusCode:', response && response.statusCode)
  console.log('body:', body)
})
