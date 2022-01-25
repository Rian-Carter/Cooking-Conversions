function divide(number1) {
  return number1 / 3;
}

function divide(number1) {
  return number1 / 16;
}

$(document).ready(function() {
  $("form#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#div").val());
    const result = divide(number1, 3);
    $("#output-div").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#div").val());
    const result = divide(number1, 16);
    $("#output-div").text(result);
  });
});