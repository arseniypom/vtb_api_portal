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
  if (jQuery('.route-apic-appcreate .main-container .row, .route-apic-appcreate-step-two .main-container .row, .route-applicationcreate .main-container .row, .route-applicationcreate-step-two .main-container .row, .route-apic-appverify-clientsecret .main-container .row, .route-apic-appcredentials-create .main-container .row, .route-apic-appreset-clientid .main-container .row, .route-apic-appreset-clientsecret .main-container .row, .route-apic-appcredentials-update .main-container .row, .route-apic-appcredentials-delete .main-container .row, .route-apic-appupdate .main-container .row, .route-apic-appdelete .main-container .row, .route-apic-apppromote .main-container .row, .route-apic-appimage-upload .main-container .row, .route-apic-appimage-delete .main-container .row, .route-consumerorgcreate .main-container .row, .route-consumerorgupdate .main-container .row, .route-consumerorgdelete .main-container .row, .route-consumerorgchangeowner .main-container .row, .route-consumerorginvite .main-container .row, .route-consumerorgremove-user .main-container .row, .route-consumerorgresend-invite .main-container .row, .route-change-pwd-pagechange-password-form .main-container .row .apic-change-pwd-form, .route-entityuseredit-form .main-container .row .user-form, .route-ibm-apimsubscription-wizardnoplan .modal-dialog .form-item input, form.user-pass-reset, .apicForm, .apic-user-form').length === 1) {
    jQuery('.page-header').css({
      'font-style': 'normal',
      'font-weight': '600',
      'font-size': '1.25rem',
      'line-height': '24px'
    });
  } else {
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
  }
});

jQuery(function() {
  // Изменение текста кнопки на странице организации
  const inviteMemberSpan = jQuery(`
    <span class="invite-btn">
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

  if (jQuery('.apicMyOrgMembers').length > 0) {
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

  if (jQuery('.client-path-bg').length > 0) {
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

  if (jQuery('.subscriptionsTable').length > 0 && jQuery('.noSubsFound').length === 0) {
    jQuery('.subscriptionsTable').append(scrollRight.clone());

    if (jQuery(window).width() < 374) {
      jQuery('.scroll-right').css("display", "block");
    } else {
      jQuery('.scroll-right').css("display", "none");
    }
  }
});

jQuery(function() {
  // Замена иконки поиска в шапке профиля
  const searchIconSvg = jQuery(`
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7C0 3.13 3.13 0 7 0C10.87 0 14 3.13 14 7C14 8.76212 13.3511 10.3708 12.2789 11.6005L15.7802 15.111C16.0337 15.3652 16.0332 15.7767 15.779 16.0302C15.5248 16.2837 15.1133 16.2832 14.8598 16.029L11.3373 12.4973C10.1453 13.4386 8.639 14 7 14C3.13 14 0 10.87 0 7ZM12.7 7C12.7 3.86 10.14 1.3 7 1.3C3.86 1.3 1.3 3.86 1.3 7C1.3 10.14 3.86 12.7 7 12.7C10.14 12.7 12.7 10.14 12.7 7Z" fill="white"/>
    </svg>
  `);
  // const searchIcon = jQuery(
  //   "<img alt='search'></img>"
  // ).attr('src', '../images/search-icon.svg');
  if (jQuery( ".ibmapimSearch > .imageContainer > a" ).length > 0) {
    jQuery( ".ibmapimSearch > .imageContainer > a" ).html(searchIconSvg);
  }
});

jQuery(function() {
  // Замена стрелки дропменю в шапке профиля и добавление такой же стрелки в раздел поддержки FAQ
  const dropitArrowCreate = (color) => {
    return (jQuery(`
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.713751 0.996319C0.713751 0.816319 0.78375 0.64632 0.92375 0.51632C1.19375 0.27632 1.60375 0.29632 1.84375 0.55632L4.99001 4.04946L8.00782 0.560219C8.24782 0.290219 8.65782 0.280219 8.92782 0.520219C9.18782 0.760219 9.20782 1.17022 8.96782 1.44022L5.51001 5.41945C5.23001 5.72945 4.75001 5.72945 4.47001 5.41945L0.883749 1.43632C0.763749 1.30632 0.713751 1.15632 0.713751 0.996319Z" fill="${color}"/>
    </svg>
  `));
  }

  if (jQuery(".orgmenu.dropit > .dropit-trigger > a > .dropit-icon").length > 0) {
    jQuery( ".orgmenu.dropit > .dropit-trigger > a > .dropit-icon").html(dropitArrowCreate('white'));
  }
  if (jQuery(".faqfield-question").length > 0) {
    jQuery( ".faqfield-question").append(dropitArrowCreate('#7B7E86'));
  }
});

jQuery(function() {
  const spinningArrowsSvg = jQuery(`
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.98267 4.87419C7.87334 4.77149 7.81003 4.63197 7.81096 4.47277C7.81924 4.17184 8.06532 3.93424 8.36018 3.93682L10.1538 3.92331L10.1625 3.91397C9.28852 3.23656 8.19135 2.83334 7 2.83334C4.14653 2.83334 1.83333 5.14653 1.83333 8.00001C1.83333 8.1535 1.84003 8.30544 1.85314 8.45553C1.87741 8.73341 1.71656 9.0017 1.44939 9.08185C1.14137 9.17426 0.818361 8.98213 0.784676 8.66231C0.761753 8.44468 0.75 8.22371 0.75 8.00001C0.75 4.54823 3.54822 1.75001 7 1.75001C8.47021 1.75001 9.82185 2.25764 10.8892 3.1072L10.7338 1.41018C10.7067 1.11036 10.9346 0.855634 11.2344 0.828583C11.5285 0.807606 11.7889 1.02939 11.816 1.32922L12.0558 4.37231C12.0843 4.71925 11.8104 5.01079 11.4624 5.00397L8.34691 5.02199C8.19948 5.0207 8.07985 4.96548 7.98267 4.87419Z" fill="#3A85FF"/>
      <path d="M5.57521 10.7447C5.68453 10.8474 5.74784 10.9869 5.74692 11.1461C5.73863 11.447 5.49255 11.6846 5.1977 11.682L3.40407 11.6955L3.39702 11.7031C4.32775 12.6088 5.59873 13.1667 7 13.1667C9.85347 13.1667 12.1667 10.8535 12.1667 8.00001C12.1667 7.68164 12.1379 7.37 12.0827 7.06754C12.0314 6.78582 12.1757 6.49671 12.4449 6.39885C12.7393 6.29177 13.0655 6.45424 13.1273 6.76142C13.2078 7.16176 13.25 7.57595 13.25 8.00001C13.25 11.4518 10.4518 14.25 7 14.25C5.31819 14.25 3.79153 13.5857 2.66808 12.5052L2.82411 14.2087C2.85116 14.5085 2.6233 14.7632 2.32348 14.7903C2.02936 14.8112 1.76893 14.5895 1.74188 14.2896L1.5021 11.2465C1.47358 10.8996 1.74746 10.6081 2.0955 10.6149L5.21097 10.5969C5.3584 10.5981 5.47803 10.6534 5.57521 10.7447Z" fill="#3A85FF"/>
    </svg>
  `);

  if (jQuery('.reload-captcha').length > 0) {
    jQuery('.reload-captcha').prepend(spinningArrowsSvg);
  }
});

jQuery(function() {
  // Замена иконки загрузки документа опенапи на странице документации апи
  const downloadIconSvg = jQuery(`
    <svg class="download-arrow" aria-labelledby="swaggerDownloadTitle">
      <path d="M2.21885 7.25218C2.21885 7.07218 2.28885 6.90218 2.42885 6.77218C2.69885 6.53218 3.10885 6.55218 3.34885 6.81218L7.351 10.6386L7.351 0.65C7.351 0.291015 7.64201 0 8.001 0C8.35998 0 8.651 0.291015 8.651 0.65V10.5752L12.2988 6.73217C12.5388 6.46217 12.9488 6.45217 13.2188 6.69217C13.4788 6.93217 13.4988 7.34217 13.2588 7.61217L8.52099 12.63C8.24099 12.94 7.761 12.94 7.481 12.63L2.38885 7.69218C2.26885 7.56218 2.21885 7.41218 2.21885 7.25218Z" fill="#3A85FF"/>
      <path d="M1.0001 14.85C0.641113 14.85 0.350098 15.141 0.350098 15.5C0.350098 15.859 0.641113 16.15 1.0001 16.15H15.0001C15.3591 16.15 15.6501 15.859 15.6501 15.5C15.6501 15.141 15.3591 14.85 15.0001 14.85H1.0001Z" fill="#3A85FF"/>
    </svg>
  `);

  if (jQuery( ".swaggerDownload" ).length > 0) {
    jQuery( ".swaggerDownload" ).html(downloadIconSvg);

    // Захват ссылки на скачивание апи и других атрибутов
    const href = jQuery('.swaggerDownload').attr('href');
    const downloadAttr = jQuery('.swaggerDownload').attr('download');
    // Создание ссылки со всеми нужными атрибутами
    const buttonDownload = document.createElement('a');
    buttonDownload.classList.add("operationInformation", "operationDownloadOpenApi");
    buttonDownload.href = href;
    buttonDownload.download = downloadAttr;
    buttonDownload.title = "Загрузить документ Open API";
    const divDownload = jQuery('.operationDownloadOpenApi');
    buttonDownload.innerHTML = divDownload.html();
    // Замена div на ссылку
    divDownload.replaceWith(jQuery(buttonDownload));
  }
});

jQuery(function() {
  // Изменение высоты textarea в разделе поддержки
  if (jQuery(".form-textarea").length > 0) {
    jQuery( ".form-textarea").attr('rows', '6');
  }
});

jQuery(function() {
  // Удаление иконок на модальном окне создания приложения
  jQuery('.icon-before > span').hide();
});