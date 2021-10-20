var lin = document.getElementById('link-to-dropbox');
if(lin == null)
{
    var h = document.getElementsByClassName('full-screen-bg')[0].getElementsByClassName('app-container')[0].getElementsByClassName('detail-assignment')[0].getElementsByClassName('vx-record-header')[0].getElementsByClassName('ae-grid')[0].getElementsByClassName('ae-grid__item')[0].getElementsByClassName('vx-record-header__title')[0];
    h.innerHTML = h.innerHTML.split(':')[1];
    h.style="font-size: 150%;"
    var nedrop = document.getElementsByClassName('full-screen-bg')[0].getElementsByClassName('app-container')[0].getElementsByClassName('detail-assignment')[0].getElementsByClassName('vx-record-body')[0];
    var link = document.createElement('a');
    link.appendChild(document.createTextNode('Click Here to go to the Dropbox'));
    link.href = "https://portals.veracross.com/webb/student/submit-assignments";
    link.target = "_blank";
    link.style = "font-size: 125%;"
    link.title = "Dropbox Link";
    var li = document.createElement("div");
    li.id="link-to-dropbox";
    li.appendChild(document.createElement('br'));
    li.appendChild(document.createTextNode('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0')); //Spaces (looks nicer)
    li.appendChild(link);
    li.appendChild(document.createElement('br')); // Line breaks (to make it look nicer)
    li.appendChild(document.createElement('br'));
    nedrop.appendChild(li);      
}