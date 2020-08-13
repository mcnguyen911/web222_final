/* Add any JavaScript you need to this file. */

window.onload = function() {
  document.querySelector('#RadioOptions').addEventListener('click', () => {
    //  Order number box will appear if user choose Problem box
    if (document.querySelector('#radioOrder').checked) {
      document.querySelector('#OrderNumberBox').removeAttribute('hidden');
    } else {
      document.querySelector('#OrderNumberBox').setAttribute('hidden', 'true');
    }
  });
};
