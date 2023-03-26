var http=require('https');
var config=require('../config');

var url_base="https://www.fflogs.com/v1/"

exports.getReport=(id, callback)=>
{
    let endpoint="report/fights/"
    http.get(url_base+endpoint+id+"?api_key="+config.fflogs_key, (res)=>{
        let data="";
        res.on("data", (chunk)=>{data+=chunk;})
        res.on("end", ()=>{
            callback(JSON.parse(data));
        });
    });
}