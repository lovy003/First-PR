
// let seats = 0
// const rectangles = document.querySelectorAll(".seats");
// Array.from(rectangles).forEach(element => {
//     element.addEventListener("click", (x) => {
//         let result = element.classList.toggle('active');
//         if (result) seats++ 
//         else seats--
//         document.querySelector("booking_seats").innerHTML = "Booked Seats : " + seats;
//         const remaining = document.querySelector("remaining_seats").innerHTML = 34 - seats;
//     }); 
// });

let set=document.querySelectorAll('.seats');
let counts=0
set.forEach(element => {
    element.addEventListener('click',()=>{
        let result = element.classList.toggle('booked');
        if (result) counts++;
        else counts--;
        // console.log(counts);
        book.innerHTML = counts;
        remain.innerHTML =  36-counts;
    })
});