//selectors:
// const dateTime = document.getElementById('date-time');
const addBtn = document.getElementById('add-btn');
const notes = document.getElementsByClassName('notes')[0];
// const deleteBtn = document.getElementById('delete-btn');
// const textArea = document.getElementById('textbox');

//AN ARRAY OF NOTES:
let notesArray = [];

// dateTime.addEventListener('mousemove', setDateTime);
addBtn.addEventListener('click', addNote);
addBtn.addEventListener('click', () => {
    // console.log(notesArray.length)
});
// deleteBtn.addEventListener('click', deleteNote);
// textArea.addEventListener('click', changeMode);

//functions:

// function setDateTime() {
//     const dt = new Date();
//     return dt.getDate() + ". " + (dt.getMonth()+1) + ". " + dt.getFullYear() + ". " + " at " +
//     dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + " ";
// }

function addNote() {
    let note = document.createElement('div');
    note.classList.add('note');


    let header = document.createElement('div');
    header.classList.add('header');
    note.appendChild(header);

    // let date = document.createElement('p');
    // date.classList.add('date-time');
    // date.setAttribute('id', '1'); //ovde treba dodati konkretan id tog nota
    // date.innerText = setDateTime();
    // header.appendChild(date);

    let button = document.createElement('div');
    button.classList.add('button');

    // let mode = document.createElement('p');
    // mode.setAttribute('id', 'mode');
    // let iconMode = document.createElement('i');
    // iconMode.classList.add('fas'); 
    // iconMode.classList.add('fa-check'); //ovde moze i drugi icon biti
    // mode.appendChild(iconMode);

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'delete-btn');
    let iconTrash = document.createElement('i');
    iconTrash.classList.add('fas');
    iconTrash.classList.add('fa-trash');
    deleteBtn.appendChild(iconTrash);
    
    // button.appendChild(mode);
    button.appendChild(deleteBtn);

    header.appendChild(button);

    let inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    let textarea = document.createElement('textarea');
    textarea.classList.add('textbox');
    textarea.setAttribute('rows', '12');
    textarea.setAttribute('cols', '80');
    
    // //event listener for when it is clicked inside the box:
    // textarea.addEventListener('click', (e1) => {
    //     let ignoreClick = document.getElementById('textbox');
    //     console.log(e1.target);
    //     document.addEventListener('click', (e) => {
    //         console.log(e1.target.tagName)
    //         if(e1.target.tagName == 'TEXTAREA') {                
    //             let isClickedInside = ignoreClick.contains(e.target);
    //             if(!isClickedInside) {
    //                 date.innerText = setDateTime();
    //             }
    //         }            
    //     })
    // })


    inputContainer.appendChild(textarea);


    note.appendChild(inputContainer);


    note.setAttribute('id', notesArray.length+1);
    notes.appendChild(note);
    // date.setAttribute('id', note.getAttribute('id')); //ovde treba dodati konkretan id tog nota

    //event listener for when it is clicked inside the box:
    // textarea.addEventListener('click', (e1) => {
    //     let ignoreClick = document.getElementById('textbox');
    //     console.log(e1.target);
    //     document.addEventListener('click', (e) => {
    //         console.log(e1.target.tagName)
    //         if(e1.target.tagName === 'TEXTAREA') {                
    //             let isClickedInside = ignoreClick.contains(e.target);
    //             if(!isClickedInside) {
    //                 date.innerText = setDateTime();
    //             }
    //         }            
    //     })
    // })

    //setovati event listener za delete dugme:
    deleteBtn.addEventListener('click', () => {
        notesArray.splice(note.getAttribute('id')-1, 1);
        
        console.log("array lenght"+ notesArray.length);
        refreshView(note.getAttribute('id'));
    });

    // notesArray.push({"id": notesArray.length+1,
    //     "date": date});
    notesArray.push({"id": notesArray.length+1});
   
}

function refreshView(index) {

    //go through notes and set new ids:
    for (let i = index-1; i < notesArray.length; i++) {
        notesArray[i].id = i+1;        
    }

    console.log(index)
    let note = document.getElementsByClassName('note');
    note[index-1].remove();
    // console.log(note)
    for (let i = index-1; i < note.length; i++) {
       note[i].setAttribute('id', i+1);  
    //    console.log(i)      
    }

}
