var si = document.getElementsByClassName('full-screen-bg')[0].getElementsByClassName('app-container')[0];
			var g = si.getElementsByTagName('div')[0].getElementsByClassName('assignment-submission')[0].getElementsByClassName('ae-grid')[0].getElementsByClassName('item-xs-12')[1].getElementsByClassName('vx-record-detail');
			var conf = document.getElementById('confirm-div');
			if (conf==null)
			{
				for (k = 0; k < g.length; k ++)
				{
					var h = g[k].getElementsByClassName('vx-record-header')[0].getElementsByClassName('vx-record-header__title')[0];
					if (h.innerHTML.split(':').length > 2)
					{
						var finalclassName = h.innerHTML.split(':')[1]
						for (l = 0; l < h.innerHTML.split(':').length - 2; l++)
						{
							finalclassName = finalclassName + ': ' + h.innerHTML.split(':')[2+l];
						}
						h.innerHTML = finalclassName;
					}
					else
					{
						h.innerHTML = h.innerHTML.split(':')[1];
					}
				}
				var confdiv = document.createElement('div');
				confdiv.id = 'confirm-div';
				si.appendChild(confdiv)
			}