console.log("connected")
showbooks();
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type
}

function Display() { };


Display.prototype.add = function (book) {

    let store = localStorage.getItem('books');
    if (store == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(store);
    }

    arr.push(book);
    localStorage.setItem('books',JSON.stringify(arr));
    
    showbooks();

//     console.log("adding to UI")
//     tableBody = document.getElementById('t');
//     let UiString = `    <tr>
         
//     <td>${book.name}</td>
//     <td>${book.author}</td>
//     <td>${book.type}</td>
//   </tr>
//   <tr>`

//     tableBody.innerHTML += UiString;
}

Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();
}

Display.prototype.valid = function (book) {
    if (book.name.length > 2 && book.author.length > 2) {
        return true;
    }
    else {
        return false;
    }
}


Display.prototype.show = function (mess, m) {
    let message = document.getElementById('alt');
    message.innerHTML = `<div class="alert alert-${mess} alert-dismissible fade show" role="alert">
    <strong>Message : !</strong>${m}.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`

    setTimeout(function () {
        message.innerHTML = ``;
    }, 2000)

    //console.log('ok show')
}

function showbooks()
{
    let store = localStorage.getItem('books');
    if (store == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(store);
    }

    let html = ""
    arr.forEach(element => {
        html += `    <tr>
         
             <td>${element.name}</td>
             <td>${element.author}</td>
             <td>${element.type}</td>
           </tr>
          <tr>`
    });
    tableBody = document.getElementById('t');
    if (arr.length != 0) {
        tableBody.innerHTML = html;
    }
    else {
        tableBody.innerHTML = `<p>Kindly add a book</p>`
    }
}


let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    // console.log("You have submited library form")

    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let computer = document.getElementById('computer');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (computer.checked) {
        type = computer.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book)

    let display = new Display();
    if (display.valid(book)) {
        //  console.log("ok")

        display.add(book)
        display.clear();
        display.show('success', 'added in table successfully')
    }
    else {

        // console.log('not ok')
        display.show('danger', 'invalid input')
    }

    e.preventDefault();
}
