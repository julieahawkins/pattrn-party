$('li').on('click', changeTab);

function changeTab() {
  $('li').removeClass('active-tab');
  $(this).addClass('active-tab');

  $('.tab-content').addClass('none');
  const tab = $(this).text().toLowerCase().replace(' ', '-');
  $(`.${tab}`).removeClass('none');
}