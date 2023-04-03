const cssFile = document.querySelector('link[rel="stylesheet"]');
const cssToggle = document.querySelector('#css');
const src = cssFile.href;
const divToCopy = document.querySelector('main');
const htmlCopyButton = document.querySelector('header button');

cssToggle.addEventListener('click', () => {
  if (cssToggle.checked) {
    cssFile.removeAttribute('href');
  } else {
    cssFile.setAttribute('href', src);
  }
});

htmlCopyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(divToCopy.innerHTML);
});
