// ACCORDIAN TABS /////////////////////////////////////////////////////////////

$('.tab').on('click', changeTab);
$(window).on('resize', updateTabContent);
$(window).on('load', updateTabContent);

function changeTab() {
  const tabContentID = $(this).clone().children().remove().end().text().toLowerCase().replace(' ', '-');

  if ($(window).width() < 775 && $(this).hasClass('active-tab')) {
    $(this).toggleClass('active-tab');
  } else {
    $('.tab').removeClass('active-tab');
    $(this).addClass('active-tab');
    $('.tab-content').addClass('none');
    $(`#${tabContentID}`).removeClass('none');
  }

  if ($(window).width() < 775) {
    renderMobile(this, tabContentID);
  }
};

function updateTabContent () {
  if ($(window).width() < 775) {
    $('.tab-content-container').appendTo($('.active-tab'));
  } else {
    $('.tabs-container').after($('.tab-content-container'));
    
    if (!$('.tab').hasClass('active-tab')) {
      $('.tab').first().addClass('active-tab');
      $('#tab-1').removeClass('none');
    }
  }
};

function renderMobile(tab, tabContentID) {
  $('.tab-content-container').appendTo($(tab));

  if ($(tab).hasClass('active-tab')) {
    $(`#${tabContentID}`).removeClass('none');
  } else {
    $(`#${tabContentID}`).addClass('none');
  }
};

// HEADER BAR /////////////////////////////////////////////////////////////

const openMenu = () => {
  $('.menu').toggleClass('.open');
  if ($('.menu').hasClass('.open')) {
    $('.Header').after($('.header-content'));
    $('.header-content').css('display', 'flex');
  } else {
    $('.header-content').css('display', 'none');
  }
};

const updateHeader = () => {
  if ($(window).width() < 775) {
    $('.Header').after($('.header-content'));
    if ($('.menu').hasClass('.open')) {
      $('.header-content').css('display', 'flex');
    } else {
      $('.header-content').css('display', 'none');
    }
  } else {
    $('.header-img').after($('.header-content'));
    $('.header-content').css('display', 'flex');
  } 
}

$(window).on('resize', updateHeader);
$('.menu').on('click', openMenu);