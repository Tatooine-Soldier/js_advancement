let dbody = document.getElementById('body');
let first = document.getElementById('fname');
let last = document.getElementById('lname');
let ask = document.getElementById('ask');
let appear = document.getElementById('actual');
let ask_error = document.getElementById('error');
let welcome = document.getElementById('welcome');
let put_name = document.getElementById('name');

    function access() {                              
        first.value = first.value.toLowerCase();
        last.value = last.value.toLowerCase();
        if (first.value === "") {
            first.placeholder = "REQUIRED";                //checks if name is empty
        } else if (last.value === "") {
            last.placeholder = "REQUIRED";                 //checks if last name is empty
        } else {
            if (first.value === "tom" && last.value === "osiris") {     //if both entered are correct, proceeed
                appear.style.visibility = "visible";                    //profile page visible
                ask.style.display = "none";                             //original login disappears
                putStuff();                                       //function inserts your name that you entered
            } else {
                ask_error.style.visibility = "visible";            //else error becomes visibl
                ask_error.innerHTML = "WRONG CREDENTIALS";
            }
        }
    }

    function putStuff() {                           //func to put the name entered on the the profile page
        dbody.style.backgroundColor = "red";                        
        welcome.innerHTML = "Welcome " + first.value;       
        put_name.innerHTML = first.value + "'s page";
    }

    function goBack() {                             //button func to go back to original login page
        appear.style.display = "none";              
        dbody.style.backgroundColor = "limegreen";
        ask.style.display = "initial";
    }