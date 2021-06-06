$(document).ready(() => {
  $('#calculate').click(e => {
    const values = [];
    $('input:not(.result), select:not(.result)').get().forEach(e => { 
      if ($(e).is('select')) {
        values.push($(e).get(0).value);
      } else {
        values.push(e.value);
      }
    });
    console.log(values.join(''));
    $('#result').val(eval(values.join('')));
  });
});
