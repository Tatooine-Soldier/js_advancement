document.addEventListener('DOMContentLoaded', changed, false);
let writing = document.getElementById('dtext');
let dpicture = document.getElementById('body');
let hours = new Date();
time = hours.getHours();

            function changed() {
                writing.style.visibility = "visible";
                if (time < 12 && time > 6) {
                    dpicture.style.backgroundImage = "url('gm.jpg')";
                    writing.innerHTML = "GM";
                } else if (time < 20 && time > 17) {
                    dpicture.style.backgroundImage = "url('evening.jpg')";
                    writing.innerHTML = "Good Evening";
                } else if (time > 12 && time < 17) {
                    dpicture.style.backgroundImage = "url('day.jpg')";
                    writing.innerHTML = "G'Day";
                } else {
                    dpicture.style.backgroundImage = "url('night.jpg')";
                    writing.innerHTML = "GN";
                }
            }
