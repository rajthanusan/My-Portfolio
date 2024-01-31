/* toggole */
function opentab(tabname){
    
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/* side menu */

var menu = document.getElementById("sidemenu");

function openmenu(){
    menu.style.right = "0";
}
function closemenu(){
    menu.style.right = "-200px";
}

/*get sucessful message */

const scriptURL = 'https://script.google.com/macros/s/AKfycbxas12x1nADo6AdplYKXyzsJlNO5LJZxj5jcDs7MiIfTeYyT0Gz0SSaNUz24PqMVeFIew/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    msg.innerHTML = "Message sent successfully"
    setTimeout(function(){
        msg.innerHTML = ""

    },5000)
    form.reset()
})
.catch(error => console.error('Error!', error.message))
})
