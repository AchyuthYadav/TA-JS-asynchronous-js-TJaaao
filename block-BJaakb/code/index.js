function fetch(url){
    return  new Promise ((resolve, reject) => {
        let xhr = new HMLHttpReqest();
        xhr.open('GET',url);
        xhr.onload = ()=> resolve(JSON.parse(fKingXHR.response));
        xhr.onerror = ()=> reject("something wrong");
        xhr.send();
    })
}