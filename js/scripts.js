$(window).load(() => {

  const body = $("body"),
    universe = $("#universe"),
    solarsys = $("#solar-system");

  const init = () => {
    body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(() => {
      $(body).removeClass('hide-UI').addClass("set-speed");
      $(body).dequeue();
    });
  };

  $("#toggle-data").click((e) => {
    e.preventDefault();
    body.toggleClass("data-open data-close");
  });

  $("#toggle-controls").click((e) => {
    e.preventDefault();
    body.toggleClass("controls-open controls-close");
  });

  $("#data .planets").click((e) => {
    e.preventDefault();
    let ref = $(e.target).attr("class");
    solarsys.removeClass().addClass(ref);
    $(e.target).parent().find('a').removeClass('active');
    $(e.target).addClass('active');
  });

  $(".set-view").click(() => { body.toggleClass("view-3D view-2D"); });
  $(".set-zoom").click(() => { body.toggleClass("zoom-large zoom-close"); });
  $(".set-speed").click(() => { universe.removeClass().addClass("scale-stretched set-speed"); });
  $(".set-size").click(() => { universe.removeClass().addClass("scale-s set-size"); });
  $(".set-distance").click(() => { universe.removeClass().addClass("scale-d set-distance"); });

  init();

});
