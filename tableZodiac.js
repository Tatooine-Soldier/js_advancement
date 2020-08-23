let hide = document.getElementById('ask');
            let question = document.getElementById('ask_box');
            let error = document.getElementById('error');
            let table = document.getElementById('table');
            let container = document.getElementById('table_container');
        

            function doit() {
                let str = question.value.trim();
                if (question.value === "") {
                    error.innerHTML = "Enter something";
                    question.placeholder = "**REQUIRED**";
                } else {
                    error.innerHTML = "Success";
                    container.style.visibility = "visible";
                    times(str);
                }
                
            }

            function times(n) {
                
                if (n.toUpperCase() === "ARIES") {
                    table.innerHTML += '<tr><td>2150 BC - I AD</td><td>Aries</td></tr>';
                } else if (n.toUpperCase() === "TAURUS") {
                    table.innerHTML += '<tr><td>4300 BC - 2150 BC</td><td>Taurus</td></tr>';
                } else if (n.toUpperCase() === "PISCES") {
                    table.innerHTML += '<tr><td>1 AD - 2100 AD</td><td>Pisces</td></tr>';
                } else if (n.toUpperCase() === "AQUARIUS") {
                    table.innerHTML += '<tr><td>2100 AD - 4250 AD</td><td>Aquarius</td></tr>';
                } else if (n.toUpperCase() === "LEO") {
                    table.innerHTML += '<tr><td>10,500 BC - 8,300 BC</td><td>Leo</td></tr>';
                } else if (n.toUpperCase() === "CANCER") {
                    table.innerHTML += '<tr><td>8,300 BC - 6,100 BC</td><td>Cancer</td></tr>';
                } else if (n.toUpperCase() === "GEMINI") {
                    table.innerHTML += '<tr><td>6,100 BC - 4,300</td><td>Gemini</td></tr>';
                } else {
                    table.style.visibility = 'hidden';    // if whats entered is not the zodiacs, make empty table invisible
                    error.innerHTML = "Sorry " + n + " is not covered<br>Maybe try a different Zodiac";
                }
            }