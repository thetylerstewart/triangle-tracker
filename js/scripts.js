
$(document).ready(function () {
  $("form#triangle-form").submit(function (event) {
    event.preventDefault();

    const sideA = parseInt($('input#sideA').val());
    const sideB = parseInt($('input#sideB').val());
    const sideC = parseInt($('input#sideC').val());

    console.log(sideA)
    console.log(sideB)
    console.log(sideC)

    if (((sideA + sideB) < sideC) || ((sideC + sideA) < sideB) || ((sideB + sideC) < sideA)) {

      $('.not-triangle').show();
      $('.isosceles').hide();
      $('.scalene').hide();
      $('.equilateral').hide();

    } else if

      (((sideA === sideB) && (sideA != sideC)) || ((sideA != sideB)) && (sideA === sideC) || ((sideB === sideC) && (sideB != sideA))) {

      $('.isosceles').show();
      $('.not-triangle').hide();
      $('.scalene').hide();
      $('.equilateral').hide();
    } else if

      (sideA != sideB && sideA != sideB && sideB != sideC) {
      $('.scalene').show();
      $('.isosceles').hide();
      $('.not-triangle').hide();
      $('.equilateral').hide();

    } else if
      ((sideA === sideB) && (sideA === sideC)) {
      $('.equilateral').show();
      $('.scalene').hide();
      $('.isosceles').hide();
      $('.not-triangle').hide();
    }

  })
})

