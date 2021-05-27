// Скрытие хэдера при скролле вниз и отображение при скролле вверх
var prevScrollpos = window.pageYOffset;
jQuery(window).on("scroll", function() {
  // var currentScrollPos = window.pageYOffset;
  // var headerDivHeight = jQuery("#navbar").outerHeight();
  // if (prevScrollpos > currentScrollPos) {
  //   jQuery(".header-bg").css('top', '0')
  // } else {
  //   jQuery(".header-bg").css('top', `-${headerDivHeight}px`)
  // }
  // prevScrollpos = currentScrollPos;

  // Добавление непрозрачного фона хэдеру при скролле ниже 70 пикселей
  // Добавление прозрачного фона при нахождении наверху страницы
  if (jQuery(window).scrollTop() > 70) {

  } else {
    jQuery(".header-bg").css('top', '0');
    jQuery(".header-bg").css({
      "background-color": "transparent"
    });
  }

  if (jQuery(window).scrollTop() > 150) {
    jQuery(".header-bg").css({
      "background-color": "#0062FF"
    });
  }
});

// Анимирование кнопки

jQuery(function () {
  var onboardingDiv = document.querySelector('#onboarding');
  if (onboardingDiv) {
    jQuery(window).scroll(function () {
        var distanceFromBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;
        var footerDivHeight = jQuery("#footer").outerHeight();
        
        var onboardingDiv = document.querySelector('#onboarding');
        var onboardingDivBottom = onboardingDiv.getBoundingClientRect().bottom;
        
        var buttonWidth = document.querySelector('#action-button').offsetWidth;
        var leftButtonIndent = (jQuery(window).width() - buttonWidth) / 2 + 'px';
        
        if (onboardingDivBottom < document.documentElement.clientHeight) {
          jQuery(".onboarding-button").css({
            "opacity": "0"
          });

          if (onboardingDivBottom < document.documentElement.clientHeight - 70) {
            jQuery(".onboarding-button").removeClass("button-transparent button-transparent-big");
            jQuery(".onboarding-button").addClass("button-blue");
            jQuery(".onboarding-button-text").css({
              "display":"none",
            });
            jQuery(".onboarding-button").css({
              "opacity": "1",
              "left":"2rem",
              "padding": "1rem",
              "bottom":"15%"
            });

            if (distanceFromBottom <= footerDivHeight - distanceFromBottom + 350) {
              jQuery(".onboarding-button").css({
                "opacity": "0"
              });


              if (distanceFromBottom <= footerDivHeight - distanceFromBottom + 50) {
                jQuery(".onboarding-button-text").css({
                  "display":"inline",
                });
                jQuery(".onboarding-button").css({
                  "opacity": "1",
                  "left": leftButtonIndent,
                  "padding": "1rem 2rem",
                  "bottom": `${footerDivHeight - distanceFromBottom + 50}px`
                });
              } else if (distanceFromBottom <= footerDivHeight - distanceFromBottom + 250) {
                jQuery(".onboarding-button-text").css({
                  "display":"inline",
                });
                jQuery(".onboarding-button").css({
                  "opacity": "0",
                  "left": leftButtonIndent,
                  "padding": "1rem 2rem",
                  "bottom": `${footerDivHeight - distanceFromBottom + 50}px`
                });
              }
            }
          }
        } else {
          jQuery(".onboarding-button").css({
            "opacity":"1",
            "left":"10.5%",
            "bottom":"15%",
            "padding":"1rem 2rem"
          });
          jQuery(".onboarding-button").removeClass("button-blue");
          jQuery(".onboarding-button").addClass("button-transparent button-transparent-big");
          jQuery(".onboarding-button-text").css({
            "display":"inline",
          })
        }
    });
  }
});


// Анимация клиентского пути

let item1Css = {
  'left': '0',
  'top': '-3.5rem',
  'transform': 'rotate(180deg)'
};
let item2Css = {
  'left': '12.982rem',
  'top': '1rem',
  'transform': 'rotate(0deg)'
};
let item3Css = {
  'left': '26.04rem',
  'top': '-3.5rem',
  'transform': 'rotate(180deg)'
};
let item4Css = {
  'left': '39.21rem',
  'top': '1rem',
  'transform': 'rotate(0deg)'
};
let item5Css = {
  'left': '52.081rem',
  'top': '-3.5rem',
  'transform': 'rotate(180deg)'
};


// let regex = /client-path-steps-item-/;

// jQuery(".client-path-steps-item").click(function(){
//   let classes = this.className.split(' ');
//   classes.forEach(class => {
//     return class.match(regex);
//   });
// });

jQuery(".client-path-steps-item").hover(function(){
    let stepName = this.className.split(' ')[1];
    let stepNumber = stepName[stepName.length - 1];
    jQuery(`.dot-${stepNumber}`).addClass('dot-hovered');
    jQuery('.dot-clicked').removeClass('dot-clicked');
    jQuery(`.dot-${stepNumber}`).addClass('dot-clicked');
    jQuery('.arrows').css(eval('item'+ stepNumber + 'Css'));
  }, function(){
    let stepName = this.className.split(' ')[1];
    let stepNumber = stepName[stepName.length - 1];
    jQuery(`.dot-${stepNumber}`).removeClass('dot-hovered');
  }
);


jQuery(".dot").hover(function(){
  jQuery('.dot-clicked').removeClass('dot-clicked');
  jQuery(this).addClass('dot-clicked');
  if (jQuery(this).hasClass("dot-1")) {
    jQuery('.arrows').css(item1Css);
  } else if (jQuery(this).hasClass("dot-2")) {
    jQuery('.arrows').css(item2Css);
  } else if (jQuery(this).hasClass("dot-3")) {
    jQuery('.arrows').css(item3Css);
  } else if (jQuery(this).hasClass("dot-4")) {
    jQuery('.arrows').css(item4Css);
  } else if (jQuery(this).hasClass("dot-5")) {
    jQuery('.arrows').css(item5Css);
  }
});


// Переключение между публичным и уникальным разделом на странице Каталога API
jQuery('#public-api').click(function(){
  jQuery('.catalog-switch-line').css({
    'margin-left': '0',
    'width': '12.063rem'
  });
  jQuery('.catalog-bg-plus-img, .catalog-switch-plus-img').fadeToggle();
  jQuery('.catalog-info-unique').hide();
  jQuery('.catalog-info-public').show();
  jQuery('.catalog-info-unique').fadeOut();
});

jQuery('#unique-api').click(function(){
  jQuery('.catalog-switch-line').css({
    'margin-left': '12.5rem',
    'width': '12.5rem'
  });
  jQuery('.catalog-bg-plus-img, .catalog-switch-plus-img').fadeToggle();
  jQuery('.catalog-info-public').hide();
  jQuery('.catalog-info-unique').show();
});

// КУКИ БАННЕР
function closeCookieBanner() {
  jQuery(".cookie-banner").css('display', 'none');
}

// Страница поддержки
if (jQuery(".feedbackCollapse")) {
  jQuery(".feedbackCollapse").addClass('in');
}

// Добавление классов кнопке отмены
if (jQuery('[data-drupal-selector="edit-cancel"]')) {
  jQuery('[data-drupal-selector="edit-cancel"]').addClass('button-transparent button-transparent-blue');
}

jQuery(function() {
  // Отмена стилей большого заголовка в форме приглашения участников организации
  if (jQuery('.consumerorg-invite-user-form').length === 0) {
    jQuery('.page-header').css({
      'font-weight': '600',
      'font-size': '3rem',
      'line-height': '3.25rem'
    });
  } else {
    jQuery('.page-header').css({
      'font-style': 'normal',
      'font-weight': '600',
      'font-size': '20px',
      'line-height': '24px'
    });
  }

  // Изменение текста кнопки на странице организации
  if (jQuery('.apicNewUserWrapper')) {
    jQuery('.orgInvite').html('<span>Пригласить участника</span>');
  }
});