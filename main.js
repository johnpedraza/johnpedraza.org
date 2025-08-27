function increaseFontSize() {
  txt = document.getElementById('a');
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize + 10) + 'px';
}

