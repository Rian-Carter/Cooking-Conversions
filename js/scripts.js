function tsptbsp(number1) {
  return number1 / 3;
}

// function multiply(number1) {
//   return number1 * 3;
// }

// function divide(number1) {
//   return number1 / 16;
// }

$(document).ready(function() {
  $("form#tsptbsp").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#tsptbsp").val());
    const result = tsptbsp(number1, 3);
    $("#output-tsptbsp").text(result);
  });

  // $("form#multiply").submit(function(event) {
  //   event.preventDefault();
  //   const number1 = parseInt($("#mul").val());
  //   const result = multiply(number1, 16);
  //   $("#output-mul").text(result);
  // });

  // $("form#divide").submit(function(event) {
  //   event.preventDefault();
  //   const number1 = parseInt($("#div").val());
  //   const result = divide(number1, 16);
  //   $("#output-div").text(result);
  // });
});