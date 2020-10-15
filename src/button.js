import React from 'react';

function ajax(url, callback) {
    const req = new XMLHttpRequest();
    req.onload = function reqComplete(){
        callback(null, JSON.parse(req.responseText));
    };
    req.onerror = (err) => {
        callback(err)
    };
    req.open('GET', url);
    req.send();
}

export function Button(){
    const [data,setData] = React.useState(null)
    let thisUrl = "http://bluesuncorp.co.uk/cgi-bin/api.cgi"
    function callB(err,result){
        setData(result)
    }
    function getData(){
        ajax(thisUrl,callB) 
    }
return <div onClick={getData}>CLICK ME TO GET DATA<div>{JSON.stringify(data)}</div></div>
}

