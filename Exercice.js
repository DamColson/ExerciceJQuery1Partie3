var incremIndex = 0;

$('#incremButton').click(function(){
  incremIndex++
  $('#increm').text(function(){
    return incremIndex;
  })
})
