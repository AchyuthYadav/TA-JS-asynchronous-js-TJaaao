let modalWindow = document.querySelector('.modal_window');
let modalClose = document.querySelector('.modal_close');
let openButton = document.querySelector('.btn');
let booksUL= document.querySelector('.book_list');
const booksURL = "https://www.anapioficeandfire.com/api/books";

function displayCharacters(characters){
   Promise.all(characters.map((character) => fetch(character).then((res) => res.json()))).then(charactersData => {
    charactersUL.innerHTML='';
    charactersData.forEach((ch) => {
        let li = document.createElement('li');
        li.innerText = `${ch.aliases.join(' ')}`
        charactersUL.append(li);
    });
   });
}

function displayBooks(data){
    booksUL.innerHTML = "";
    data.forEach(book => {
        let li = document.createElement('li');

        let h3 = document.createElement('h3');
        h3.innerText = book.name;

        let p = document.createElement('p');
        p.innerText = book.authors.join(' ')

        let button = document.createElement('button');
        
        button.classList.add('btn');
        button.innerText='Show characters (${book.characters.length})'


        button.addEventListener('click',() => {
            modalWindow.style.display = 'block';
            displayCharacters(book.characters);

            modalWindow
            .querySelector('.modal_close')
            .addEventListener('click' , () => {
                modalWindow.style.display = 'none';
            });
        });

        li.append(h3, p, button);
        booksUL.append(li);
    });
}

function fetchBooks (){
    fetch(booksURL).then((res) => res.json()).then(booksdata => {
        displayBooks(booksdata)
    });
} 

fetchBooks();


