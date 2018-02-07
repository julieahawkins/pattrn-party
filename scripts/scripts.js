$('.tab').on('click', changeTab);

function changeTab() {
  if ($(window).width() < 550) {
    changeTabMobile(this);
  }

  $('.tab').removeClass('active-tab');
  $(this).addClass('active-tab');

  $('.tab-content').addClass('none');
  const tab = $(this).text().toLowerCase().replace(' ', '-');

  $(`.${tab}`).removeClass('none');
}

function changeTabMobile(tab) {
  console.log(tab)
}