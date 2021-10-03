console.log('Yup! its working')
shownote();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtext = document.getElementById('addtext');
    let addH = document.getElementById('addH');
     

    let notes = localStorage.getItem('note');
    if (notes == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(notes);
    }
    let myobj={
        title:addH.value,
        note:addtext.value
    }

    arr.push(myobj);
    localStorage.setItem('note', JSON.stringify(arr));
 //   console.log(arr);
    addtext.value = "";
    addH.value = "";
    shownote();
})

function shownote() {
    let notes = localStorage.getItem('note');
    if (notes == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(notes);
    }
    let html = "";
    arr.forEach(function (ele, ind) {
        html += `   <div class="card my-2 mx-4 cardnote" style="width: 18rem;">
       
        <div class="card-body ">
          <h5 class="card-title">Note ${ele.title}</h5>
          <p class="card-text">${ele.note}</p>
          <button id="${ind}" onclick="delet(this.id)" class="btn  btn-outline-danger">DELETE</button>
        </div>
      </div>
      `
    });


    let noteindex = document.getElementById('notes');
    if (arr.length != 0) {
        noteindex.innerHTML = html;
    }
    else {
        noteindex.innerHTML = `<p>Kindly add a note</p>`
    }

}

function delet(index) {
    console.log("I am deleting", index)
    let notes = localStorage.getItem('note')
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
    noteobj.splice(index, 1);
    localStorage.setItem('note', JSON.stringify(noteobj));

    shownote();
}


let search = document.getElementById('searchtext');
search.addEventListener('input', function (e) {
    let inputval = search.value;
    console.log("input event fired", inputval)

    let notecard = document.getElementsByClassName('cardnote');

    Array.from(notecard).forEach(function (element) {
      
        let cardtext = element.getElementsByTagName("p")[0].innerText;

        if(cardtext.includes(inputval))
        {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        console.log(element)
    })

})