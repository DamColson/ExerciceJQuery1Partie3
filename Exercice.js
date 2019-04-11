var incremIndex = 0;

function init() {
  $('#increm').text(function() {
    return incremIndex;
  });
}

$('#incremButton').click(function() {
  incremIndex++
  init();
});
