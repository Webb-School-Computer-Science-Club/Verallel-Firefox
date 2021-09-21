var lin = document.getElementById('better-link-class-home');
            if (lin == null){ //Link shouldn't appear twice
                var h = ((document.getElementById('container').getElementsByClassName('class-header')[0]).getElementsByTagName('h1')[0]).getElementsByTagName('a')[0];
	        h.innerHTML = (h.innerHTML).split(':')[1]; // Removing mess of numbers (probably class ID) from class page to make it look nicer
                var needrop = document.getElementById('facebox').getElementsByClassName('popup')[0]; // Element exists even when not actually visible
                var link = document.createElement('a');
                link.appendChild(document.createTextNode('Click Here to go to the Dropbox'));
                link.href = "https://portals.veracross.com/webb/student/submit-assignments"; // Changing attributes
                link.target = "_blank";
                link.title = "Dropbox Link";
                var li = document.createElement("div");
                li.id="better-link-class-home";
                li.appendChild(document.createTextNode('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0')); //Spaces (looks nicer)
                li.appendChild(link);
                li.appendChild(document.createElement('br')); // Line breaks (to make it look nicer)
                li.appendChild(document.createElement('br'));
                li.classList.add("body"); // If not added than background would be behind the main page text
                needrop.appendChild(li); // Adding to popup
            }