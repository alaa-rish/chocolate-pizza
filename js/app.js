'use strict';

function chcikboxClicked(id) {
  let elCh = document.getElementById('ch' + id);
  let el = document.getElementById(id);
  if (elCh.checked)
    el.style['text-decoration'] = 'line-through';
  else
    el.style['text-decoration'] = 'none';
}
