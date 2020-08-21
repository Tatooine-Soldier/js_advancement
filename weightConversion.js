 let asking = document.getElementById('weight');
        let appear = document.getElementById('appear');
            

        function validInfo() {
            if (asking.value === "") {
                appear.innerHTML = "Please enter something";
            } else {
                appear.innerHTML = "Weight entered: " + asking.value;
            }
            conversions(asking.value);
        }

        function conversions(n) {
            let kg = n;
            let stone = n*0.157;
            let pounds = n*2.2;

            appear.innerHTML += "<br>kg: " + kg + "kg";
            appear.innerHTML += "<br>Stone: " + stone + "st";
            appear.innerHTML += "<br>Pounds: " + pounds;
        }
    </script>
