let url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=30"
let newsElm = document.querySelector(".news");
let select = document.querySelector("select");
let allNews = [] ;


function displayOptions(sources){
    sources.forEach((source) => {
        let option = document.createElement("option");
        option.innerText = source;
        option.value = source;
        select.append(option);
    })
}

select.addEventListener('change', (event) => {
    let source = event.target.value.trim();
    if(source){
       var filterdNews = allNews.filter((news) => news.newsSite === source)
    }else {
        filterdnews = allNews;
    }
    renderNews(filterNews);
})


fetch(url).then(res=>res.json())
          .then((news)=>{ 
            console.log(news); 
            allNews = news;
            renderNews(news);


           let allSource = Array.from(new Set(news.map((n) => n.newsSite)))
           console.log(allSource);
        })

function renderNews(news){
    newsElm.innerText=" ";
    news.forEach((newsIteam) => {
        let li =  document.createElement('li');
        let img = document.createElement('img');
        img.src = newsIteam.imageUrl;
        let div = document.createElement('div');
        let span = document.createElement('span');
        span.classList.add('source');
        span.innerText = newsIteam.newsSite;
        let h3 = document.createElement('h3');
        h3.innerText=newsIteam.title;
        let a = document.createElement("a")
        a.href = newsIteam.url;
        let button = document.createElement('button');
        a.append(button);
        button.innerText = "read more";
        
        div.append(span, h3, a)
        li.append(img,div)
        newsElm.append(li);
    });
}