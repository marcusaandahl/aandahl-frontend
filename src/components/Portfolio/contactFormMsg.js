import $ from 'jquery';

$(() => {
  $("#message").on("input", function () {
    $("#message").css("height", "auto");
    $("#message").css("height", `${$("#message").prop('scrollHeight')}px`);
    
    $("#contactFormBreak").css("height", "auto");
    $("#contactFormBreak").css("height", `${$("#message").prop('scrollHeight')+230}px`);
  });
})  