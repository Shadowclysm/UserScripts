// ==UserScript==
// @name        NJTranshit Filter
// @namespace   ShadowclysmUserScripts
// @match       https://njtranshit.com/schedule/9/northeast-corridor*
// @grant       none
// @version     1.0
// @author      https://github.com/Shadowclysm
// @downloadURL https://raw.githubusercontent.com/Shadowclysm/UserScripts/master/NJTransit.js
// @updateURL   https://raw.githubusercontent.com/Shadowclysm/UserScripts/master/NJTransit.js
// ==/UserScript==

var filter = document.createElement('input');
filter.value = 'NEW BRUNSWICK,NEWARK PENN STATION';
document.body.prepend(filter);
filter.style.width = '50%';

var button = document.createElement('button');
button.innerHTML = 'hide';
document.body.prepend(button);


button.onclick = function(){
  var list = filter.value.split(',');
  list.push('');

  document.querySelectorAll('tbody > tr > th').forEach(function(e){
    e.parentElement.style.display = '';
  });

  if(button.innerHTML=='show'){
    button.innerHTML='filter';
  }else{
    button.innerHTML = 'show';
    document.querySelectorAll('tbody > tr > th').forEach(function(e){
      if(!list.includes(e.innerHTML)) e.parentElement.style.display = 'none';
    });
  }
}

button.click();
