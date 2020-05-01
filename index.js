const http = require('http');
const fs = require('fs');

const parseJSON = () =>
{
    var contents = fs.readFileSync('Data.json');
    var jsonContent = JSON.parse(contents);
    
    return jsonContent;
}
const requesthandler = (req,res) => {
    if (req.url === '/')
    {
        
            res.setHeader('Access-Control-Allow-Origin', "*");
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify(parseJSON()));
    }
}

const server = http.createServer(requesthandler);
server.listen(process.env.PORT || 3000, err =>{
    if(err)
        throw err;
});