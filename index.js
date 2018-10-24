$(function() {
  $(".project-info").slideUp(1);

  $(".project-container").on("click", function() {
    $(this)
      .find(".project-info")
      .slideToggle(400);
  });
});
