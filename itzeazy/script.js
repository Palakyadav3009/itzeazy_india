$(document).ready(function() {
  let totalInputs = $('#license-details-form input[type="text"]').length + $('#license-details-form select').length;
  let totalRadioGroups = $('#license-details-form input[type="radio"]').length / 2; 

  function updateProgressBar() {
    let filledInputs = $('#license-details-form input[type="text"]').filter(function() {
      return $(this).val().length >= 1;
    }).length + $('#license-details-form select').filter(function() {
      return $(this).val() !== "";
    }).length;

    let filledRadioGroups = $('#license-details-form input[type="radio"]:checked').length / 1; 
    let totalFilledInputs = filledInputs + filledRadioGroups;
    let percentage = (totalFilledInputs / (totalInputs + totalRadioGroups)) * 100;
    $('.progress-bar').css('width', percentage + '%');

    if (totalFilledInputs === totalInputs + totalRadioGroups) {
      $('#back-button').show();
    } else {
      $('#back-button').hide();
    }
  }

  $('#license-details-form input[type="text"], #license-details-form select, #license-details-form input[type="radio"]').on('input change', function() {
    updateProgressBar();
  });

  $('#back-button').click(function() {
    window.location.href = "index.html";
  });
});