const button = document.getElementById('trigger');
const container = document.getElementById('container');
const iframe = document.getElementById('iframe');

function addLoadingMaskFromParentWindow() {
  container.style.position = 'relative';
  container.appendChild($(`<div class="loading"><div>Loading ...</div></div>`)[0])
}

function clearLoadingMask() {
  $(container).find('.loading').remove();
}

button.onclick = function () {
  iframe.contentWindow.location.reload();
  addLoadingMaskFromParentWindow();
};

iframe.onload = function () {
  clearLoadingMask();
};
