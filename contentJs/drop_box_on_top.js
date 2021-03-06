var verallelDb = document.getElementById('verallel-db-link');
   	if(verallelDb == null)
   	{
      		var ul = document.getElementsByClassName('full-screen-bg')[0].getElementsByClassName('vx-portal-nav')[0];
		var dirLi = ul.getElementsByTagName('li')[4];         
            	var dirDropDown = document.createElement('div');
            	dirDropDown.classList.add('vx-hover-menu');
            	dirDropDown.classList.add('vx-hover-menu--one-column');
            	var dirdirDropDown = document.createElement('div');
            	dirdirDropDown.classList.add('vx-hover-menu__hover-links-container');
            	var ull = document.createElement('ul');
            	ull.classList.add('vx-hover-menu__hover-links');
            	var stuLi = document.createElement('li');
            	var stuA = document.createElement('a');
            	stuA.setAttribute('href', 'https://portals.veracross.com/webb/student/directory/students');
            	var stuSpan = document.createElement('span');
            	stuSpan.classList.add('vx-hover-menu__item-link-text');
            	stuSpan.appendChild(document.createTextNode('Student Directory'));
            	stuA.appendChild(stuSpan);
            	stuLi.appendChild(stuA);
            	var houseLi = document.createElement('li');
            	var houseA = document.createElement('a');
            	houseA.setAttribute('href', 'https://portals.veracross.com/webb/student/directory/households');
            	var houseSpan = document.createElement('span');
            	houseSpan.appendChild(document.createTextNode('Household Directories'));
            	houseA.appendChild(houseSpan);
            	houseLi.appendChild(houseA);
            	var fsLi = document.createElement('li');
            	var fsA = document.createElement('a');
            	fsA.setAttribute('href', 'https://portals.veracross.com/webb/student/directory/faculty-staff');
            	var fsSpan = document.createElement('span');
            	fsSpan.appendChild(document.createTextNode('Faculty and Staff Directories'));
            	fsA.appendChild(fsSpan);
            	fsLi.appendChild(fsA);
            	ull.appendChild(stuLi);
            	ull.appendChild(houseLi);
            	ull.appendChild(fsLi);
            	dirdirDropDown.appendChild(ull);
            	dirdirDropDown.setAttribute('style', 'min-height: 60px !important;');
            	dirDropDown.appendChild(dirdirDropDown);
            	dirDropDown.setAttribute('style', 'margin-left: 58% !important;')
            	dirLi.appendChild(dirDropDown);
      		var dbLink = document.createElement('a');
      		dbLink.href = 'https://portals.veracross.com/webb/student/submit-assignments';
		var dbIcon = document.createElement('img');
            	dbIcon.classList.add('nc-icon-glyph');
            	dbIcon.classList.add('dropbox-logo');
            	dbIcon.setAttribute('src', 'https://cdn.iconscout.com/icon/free/png-256/dropbox-164-734858.png'); //Image licensed via Creative Commons at iconsout.com
            	dbLink.appendChild(dbIcon);
            	dbLink.appendChild(document.createTextNode('\xa0\xa0'));
      		dbLink.appendChild(document.createTextNode('Dropbox'));
      		dbLink.classList.add('vx-portal-nav__item-link');
      		var li = document.createElement('li');
      		li.classList.add('vx-portal-nav__item');
      		li.id = 'verallel-db-link';
      		li.appendChild(dbLink);
      		ul.appendChild(li);
   	}