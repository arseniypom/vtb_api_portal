// Скрытие хэдера при скролле вниз и отображение при скролле вверх
var prevScrollpos = window.pageYOffset;
jQuery(window).on("scroll", function() {

  // Добавление непрозрачного фона хэдеру при скролле ниже 70 пикселей
  // Добавление прозрачного фона при нахождении наверху страницы
  if (jQuery(window).scrollTop() > 70) {

  } else {
    jQuery(".header-bg").css('top', '0');
    jQuery(".header-bg").css({
      "background-color": "transparent"
    });
  }

  if (jQuery(window).scrollTop() > 110) {
    jQuery(".header-bg").css({
      "background-color": "#0062FF"
    });
  }
});

jQuery('.header-burger').click(function(event) {
  jQuery('.header-burger,.header-menu').toggleClass('active');
  jQuery('.content').toggleClass('lock');
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
            jQuery(".onboarding-button").removeClass("button-transparent onboarding-button-big");
            jQuery(".onboarding-button").addClass("button-blue onboarding-button-small");
            jQuery(".onboarding-button-text").css({
              "display":"none",
            });
            jQuery(".onboarding-button").css({
              "opacity": "1",
              "left": "",
              "right": "",
              "bottom": ""
            });

            if (distanceFromBottom <= footerDivHeight - distanceFromBottom + 350) {
              jQuery(".onboarding-button").css({
                "opacity": "0"
              });


              if (distanceFromBottom <= footerDivHeight - distanceFromBottom + 50) {            
                jQuery(".onboarding-button").removeClass("onboarding-button-small");    
                jQuery(".onboarding-button-text").css({
                  "display":"inline",
                });
                jQuery(".onboarding-button").css({
                  "opacity": "1",
                  "left": leftButtonIndent,
                  "right": "auto",
                  "bottom": `${footerDivHeight - distanceFromBottom + 50}px`
                });
              } else if (distanceFromBottom <= footerDivHeight - distanceFromBottom + 250) {
                jQuery(".onboarding-button-text").css({
                  "display":"inline",
                });
                jQuery(".onboarding-button").css({
                  "opacity": "0"
                });
              }
            }
          }
        } else {
          jQuery(".onboarding-button").css({
            "opacity":"1",
            "left": "",
            "right": "",
            "bottom": ""
          });
          jQuery(".onboarding-button").removeClass("button-blue onboarding-button-small");
          jQuery(".onboarding-button").addClass("button-transparent onboarding-button-big");
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
};
let item2Css = {
  'left': '16.875rem',
};
let item3Css = {
  'left': '34.25rem',
};
let item4Css = {
  'left': '51.625rem',
};

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
    if (jQuery(window).width() < 768) {
      jQuery('.page-header').css({
        'font-weight': '600',
        'font-size': '2rem',
        'line-height': '2.25rem'
      });

      if (jQuery(window).width() < 374) {
        jQuery('.page-header').css({
          'font-size': '1.75rem',
        });
      }
    } else {
      jQuery('.page-header').css({
        'font-weight': '600',
        'font-size': '3rem',
        'line-height': '3.25rem'
      });
    }
  } else {
    jQuery('.page-header').css({
      'font-style': 'normal',
      'font-weight': '600',
      'font-size': '20px',
      'line-height': '24px'
    });
  }

  // Изменение текста кнопки на странице организации
  const inviteMemberSpan = jQuery(`
    <span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.54167 1.16667C7.54167 0.867513 7.29915 0.625 7 0.625C6.70085 0.625 6.45833 0.867513 6.45833 1.16667L6.45833 6.45833H1.16667C0.867512 6.45833 0.625 6.70085 0.625 7C0.625 7.29915 0.867512 7.54167 1.16667 7.54167H6.45833L6.45833 12.8333C6.45833 13.1325 6.70085 13.375 7 13.375C7.29915 13.375 7.54167 13.1325 7.54167 12.8333V7.54167H12.8333C13.1325 7.54167 13.375 7.29915 13.375 7C13.375 6.70085 13.1325 6.45833 12.8333 6.45833H7.54167V1.16667Z" fill="#3A85FF"/>
      </svg>
      <p>Пригласить участника</p>
    </span>
  `);
  if (jQuery('.apicNewUserWrapper')) {
    jQuery('.orgInvite').html(inviteMemberSpan);
  }
});


jQuery(function() {
  const arrowRight = jQuery('.card-read_more-arrow').clone().css('position', 'static');
  const scrollRight = jQuery(
    "<div class='scroll-right'><p class='text-muted'>Скрольте вправо</p></div>"
  );

  if (jQuery('.apicMyOrgMembers').length === 1) {
    jQuery('.organizationMembers').append(scrollRight);
    if (arrowRight) {
      jQuery('.scroll-right').append(arrowRight);
    }

    if (jQuery(window).width() < 768) {
      jQuery('.scroll-right').css("display", "block");
    } else {
      jQuery('.scroll-right').css("display", "none");
    }
  }

  if (jQuery('.client-path-bg').length === 1) {
    jQuery('.client-path-bg').append(scrollRight.clone().css({
      'position':'absolute',
      'bottom':'2rem'
    }));
    jQuery('.news').append(scrollRight.clone());
    if (jQuery(window).width() < 1023
    ) {
      jQuery('.scroll-right').css("display", "block");
    } else {
      jQuery('.scroll-right').css("display", "none");
    }
  }

  if (jQuery('.subscriptionsTable').length === 1 && jQuery('.noSubsFound').length === 0) {
    jQuery('.subscriptionsTable').append(scrollRight.clone());

    if (jQuery(window).width() < 374) {
      jQuery('.scroll-right').css("display", "block");
    } else {
      jQuery('.scroll-right').css("display", "none");
    }
  }
});

jQuery(function() {
  // Замена иконок в шапке профиля
  const searchIconSvg = jQuery(`
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7C0 3.13 3.13 0 7 0C10.87 0 14 3.13 14 7C14 8.76212 13.3511 10.3708 12.2789 11.6005L15.7802 15.111C16.0337 15.3652 16.0332 15.7767 15.779 16.0302C15.5248 16.2837 15.1133 16.2832 14.8598 16.029L11.3373 12.4973C10.1453 13.4386 8.639 14 7 14C3.13 14 0 10.87 0 7ZM12.7 7C12.7 3.86 10.14 1.3 7 1.3C3.86 1.3 1.3 3.86 1.3 7C1.3 10.14 3.86 12.7 7 12.7C10.14 12.7 12.7 10.14 12.7 7Z" fill="white"/>
    </svg>
  `);
  const dropitArrowSvg = jQuery(`
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.713751 0.996319C0.713751 0.816319 0.78375 0.64632 0.92375 0.51632C1.19375 0.27632 1.60375 0.29632 1.84375 0.55632L4.99001 4.04946L8.00782 0.560219C8.24782 0.290219 8.65782 0.280219 8.92782 0.520219C9.18782 0.760219 9.20782 1.17022 8.96782 1.44022L5.51001 5.41945C5.23001 5.72945 4.75001 5.72945 4.47001 5.41945L0.883749 1.43632C0.763749 1.30632 0.713751 1.15632 0.713751 0.996319Z" fill="white"/>
    </svg>
  `);
  // const searchIcon = jQuery(
  //   "<img alt='search'></img>"
  // ).attr('src', '../images/search-icon.svg');
  if (jQuery( ".ibmapimSearch > .imageContainer > a" ).length === 1) {
    jQuery( ".ibmapimSearch > .imageContainer > a" ).html(searchIconSvg);
  }
  if (jQuery(".orgmenu.dropit > .dropit-trigger > a > .dropit-icon").length === 1) {
    jQuery( ".orgmenu.dropit > .dropit-trigger > a > .dropit-icon").html(dropitArrowSvg);
  }
});