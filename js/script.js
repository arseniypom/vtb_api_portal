jQuery(function() {

  // Скрытие хэдера при скролле вниз и отображение при скролле вверх
  var prevScrollpos = window.pageYOffset;
  jQuery(window).on("scroll", function() {

    // Добавление непрозрачного фона хэдеру при скролле ниже 70 пикселей
    // Добавление прозрачного фона при нахождении наверху страницы
    if (jQuery(window).scrollTop() <= 0) {
      jQuery(".header-bg").css('top', '0');
      jQuery(".header-bg").css({
        "background-color": "transparent"
      });
    } else {
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

  // Отмена стилей большого заголовка в форме приглашения участников организации
  if (jQuery('.route-apic-appcreate .main-container .row, .route-apic-appcreate-step-two .main-container .row, .route-applicationcreate .main-container .row, .route-applicationcreate-step-two .main-container .row, .route-apic-appverify-clientsecret .main-container .row, .route-apic-appcredentials-create .main-container .row, .route-apic-appreset-clientid .main-container .row, .route-apic-appreset-clientsecret .main-container .row, .route-apic-appcredentials-update .main-container .row, .route-apic-appcredentials-delete .main-container .row, .route-apic-appupdate .main-container .row, .route-apic-appdelete .main-container .row, .route-apic-apppromote .main-container .row, .route-apic-appimage-upload .main-container .row, .route-apic-appimage-delete .main-container .row, .route-consumerorgcreate .main-container .row, .route-consumerorgupdate .main-container .row, .route-consumerorgdelete .main-container .row, .route-consumerorgchangeowner .main-container .row, .route-consumerorginvite .main-container .row, .route-consumerorgremove-user .main-container .row, .route-consumerorgresend-invite .main-container .row, .route-change-pwd-pagechange-password-form .main-container .row .apic-change-pwd-form, .route-entityuseredit-form .main-container .row .user-form, .route-ibm-apimsubscription-wizardnoplan .modal-dialog .form-item input, form.user-pass-reset, .apicForm, .apic-user-form').length === 1) {
    jQuery('.page-header').css({
      'font-style': 'normal',
      'font-weight': '600',
      'font-size': '1.25rem',
      'line-height': '24px'
    });

    if (jQuery('.consumerorg-invite-user-form').length) {
      jQuery('.page-header').text('Приглашение участника');
      jQuery('<p class="invite-user-text">Отправьте пользователю приглашение присоединиться к клиентской организации</p>').insertAfter('.page-header');
    }
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

  // Добавление пояснения "скролльте вправо" в блоках с горизонтальным скроллом
  const scrollRight = (addClass) => {
    return jQuery(
      `<div class='scroll-right ${addClass}'>
        <p class='text-muted'>Скрольте вправо</p>
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.72225 12.1482C6.85225 12.2882 7.02225 12.3582 7.20225 12.3582C7.36225 12.3582 7.51225 12.3082 7.64225 12.1882L13.6822 6.69817C13.9922 6.41817 13.9922 5.93817 13.6822 5.65817L7.64225 0.168174C7.37225 -0.0718255 6.96225 -0.0518256 6.72225 0.208174C6.48225 0.478174 6.49225 0.888175 6.76225 1.12817L11.5979 5.52817H0.702246C0.343261 5.52817 0.0522461 5.81919 0.0522461 6.17817C0.0522461 6.53716 0.343261 6.82817 0.702246 6.82817H11.5979L6.76225 11.2282C6.50225 11.4682 6.48225 11.8782 6.72225 12.1482Z" fill="#b1b5bb"/>
        </svg>
      </div>`
    );
  }
  if (jQuery('.apicMyOrgMembers').length) {
    jQuery('.organizationMembers').append(scrollRight('my-org'));
  }
  if (jQuery('.client-path-bg').length) {
    jQuery('.client-path-bg').append(scrollRight('client-path-arrow'));
    jQuery('.news').append(scrollRight('news'));
  }
  if (jQuery('.subscriptionsTable').length && jQuery('.noSubsFound').length === 0) {
    jQuery('.subscriptionsTable').append(scrollRight('subscriptions'));
  }


  // Замена иконки поиска в шапке профиля
  const searchIconSvg = jQuery(`
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7C0 3.13 3.13 0 7 0C10.87 0 14 3.13 14 7C14 8.76212 13.3511 10.3708 12.2789 11.6005L15.7802 15.111C16.0337 15.3652 16.0332 15.7767 15.779 16.0302C15.5248 16.2837 15.1133 16.2832 14.8598 16.029L11.3373 12.4973C10.1453 13.4386 8.639 14 7 14C3.13 14 0 10.87 0 7ZM12.7 7C12.7 3.86 10.14 1.3 7 1.3C3.86 1.3 1.3 3.86 1.3 7C1.3 10.14 3.86 12.7 7 12.7C10.14 12.7 12.7 10.14 12.7 7Z" fill="white"/>
    </svg>
  `);
  if (jQuery( ".ibmapimSearch > .imageContainer > a" ).length) {
    jQuery( ".ibmapimSearch > .imageContainer > a" ).html(searchIconSvg);
  }

  // Замена стрелки дропменю в шапке профиля и добавление такой же стрелки в раздел поддержки FAQ
  const dropitArrowCreate = (color, addClass) => {
    return (jQuery(`
      <svg class=${addClass} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.713751 0.996319C0.713751 0.816319 0.78375 0.64632 0.92375 0.51632C1.19375 0.27632 1.60375 0.29632 1.84375 0.55632L4.99001 4.04946L8.00782 0.560219C8.24782 0.290219 8.65782 0.280219 8.92782 0.520219C9.18782 0.760219 9.20782 1.17022 8.96782 1.44022L5.51001 5.41945C5.23001 5.72945 4.75001 5.72945 4.47001 5.41945L0.883749 1.43632C0.763749 1.30632 0.713751 1.15632 0.713751 0.996319Z" fill="${color}"/>
      </svg>
    `));
  }
  if (jQuery(".dropit-icon").length) {
    jQuery( ".orgmenu.dropit > .dropit-trigger > a > .dropit-icon").html(dropitArrowCreate('white'));
  }
  if (jQuery(".faqfield-question").length) {
    jQuery( ".faqfield-question").append(dropitArrowCreate('#7B7E86'));
  }
  // Замена стрелок в селектах
  if (jQuery('.bx--select__arrow').length) {
    jQuery('.bx--select__arrow').remove();
    jQuery('.bx--select').append(dropitArrowCreate('#7B7E86', 'bx--select__arrow'));
  }

  // Перестановка стрелок на странице документации апи в разделе "Определение"
  if (jQuery('.definitionsBody').length) {
    jQuery('.definitionsBody > div > table > thead > tr > th')[0].remove()
    const definitionsArray = jQuery("tr.definitionRow");
    definitionsArray.each((i, definition) => {
      const arrayTd = jQuery(definition).find('.bx--table-expand-v2');
      arrayTd.appendTo(definition)
    });
  }

  const spinningArrowsSvg = jQuery(`
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.98267 4.87419C7.87334 4.77149 7.81003 4.63197 7.81096 4.47277C7.81924 4.17184 8.06532 3.93424 8.36018 3.93682L10.1538 3.92331L10.1625 3.91397C9.28852 3.23656 8.19135 2.83334 7 2.83334C4.14653 2.83334 1.83333 5.14653 1.83333 8.00001C1.83333 8.1535 1.84003 8.30544 1.85314 8.45553C1.87741 8.73341 1.71656 9.0017 1.44939 9.08185C1.14137 9.17426 0.818361 8.98213 0.784676 8.66231C0.761753 8.44468 0.75 8.22371 0.75 8.00001C0.75 4.54823 3.54822 1.75001 7 1.75001C8.47021 1.75001 9.82185 2.25764 10.8892 3.1072L10.7338 1.41018C10.7067 1.11036 10.9346 0.855634 11.2344 0.828583C11.5285 0.807606 11.7889 1.02939 11.816 1.32922L12.0558 4.37231C12.0843 4.71925 11.8104 5.01079 11.4624 5.00397L8.34691 5.02199C8.19948 5.0207 8.07985 4.96548 7.98267 4.87419Z" fill="#3A85FF"/>
      <path d="M5.57521 10.7447C5.68453 10.8474 5.74784 10.9869 5.74692 11.1461C5.73863 11.447 5.49255 11.6846 5.1977 11.682L3.40407 11.6955L3.39702 11.7031C4.32775 12.6088 5.59873 13.1667 7 13.1667C9.85347 13.1667 12.1667 10.8535 12.1667 8.00001C12.1667 7.68164 12.1379 7.37 12.0827 7.06754C12.0314 6.78582 12.1757 6.49671 12.4449 6.39885C12.7393 6.29177 13.0655 6.45424 13.1273 6.76142C13.2078 7.16176 13.25 7.57595 13.25 8.00001C13.25 11.4518 10.4518 14.25 7 14.25C5.31819 14.25 3.79153 13.5857 2.66808 12.5052L2.82411 14.2087C2.85116 14.5085 2.6233 14.7632 2.32348 14.7903C2.02936 14.8112 1.76893 14.5895 1.74188 14.2896L1.5021 11.2465C1.47358 10.8996 1.74746 10.6081 2.0955 10.6149L5.21097 10.5969C5.3584 10.5981 5.47803 10.6534 5.57521 10.7447Z" fill="#3A85FF"/>
    </svg>
  `);
  if (jQuery('.reload-captcha').length) {
    jQuery('.reload-captcha').prepend(spinningArrowsSvg);
  }

  // Замена иконки загрузки документа опенапи на странице документации апи
  const downloadIconSvg = jQuery(`
    <svg class="download-arrow" aria-labelledby="swaggerDownloadTitle">
      <path d="M2.21885 7.25218C2.21885 7.07218 2.28885 6.90218 2.42885 6.77218C2.69885 6.53218 3.10885 6.55218 3.34885 6.81218L7.351 10.6386L7.351 0.65C7.351 0.291015 7.64201 0 8.001 0C8.35998 0 8.651 0.291015 8.651 0.65V10.5752L12.2988 6.73217C12.5388 6.46217 12.9488 6.45217 13.2188 6.69217C13.4788 6.93217 13.4988 7.34217 13.2588 7.61217L8.52099 12.63C8.24099 12.94 7.761 12.94 7.481 12.63L2.38885 7.69218C2.26885 7.56218 2.21885 7.41218 2.21885 7.25218Z" fill="#3A85FF"/>
      <path d="M1.0001 14.85C0.641113 14.85 0.350098 15.141 0.350098 15.5C0.350098 15.859 0.641113 16.15 1.0001 16.15H15.0001C15.3591 16.15 15.6501 15.859 15.6501 15.5C15.6501 15.141 15.3591 14.85 15.0001 14.85H1.0001Z" fill="#3A85FF"/>
    </svg>
  `);

  if (jQuery( ".swaggerDownload" ).length) {
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

  // Изменение крестика закрытия модального окна
  const crossSvg = jQuery(`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.40942 0.490063C1.15558 0.236222 0.744026 0.236222 0.490185 0.490063C0.236344 0.743904 0.236344 1.15546 0.490185 1.4093L6.0808 6.99991L0.590648 12.4901C0.336807 12.7439 0.336808 13.1555 0.590649 13.4093C0.844489 13.6631 1.25605 13.6631 1.50989 13.4093L7.00004 7.91915L12.4902 13.4093C12.744 13.6631 13.1556 13.6631 13.4094 13.4093C13.6633 13.1555 13.6633 12.7439 13.4094 12.4901L7.91928 6.99991L13.5099 1.4093C13.7637 1.15546 13.7637 0.743904 13.5099 0.490063C13.256 0.236222 12.8445 0.236222 12.5906 0.490063L7.00004 6.08068L1.40942 0.490063Z" fill="#7B7E86"/>
    </svg>
  `)
  if (jQuery( "button.close" ).length) {
    jQuery( "button.close > span" ).html(crossSvg)
  }

  // Изменение высоты textarea в разделе поддержки
  if (jQuery(".form-textarea").length) {
    jQuery( ".form-textarea").attr('rows', '6');
  }

  // Работа с капчей
  if (jQuery('.form-item-captcha-response label').length) {
    jQuery('.form-item-captcha-response label').text('Введите код с картинки');

    jQuery('.reload-captcha-wrapper a').text('Обновить картинку');
    jQuery('.reload-captcha-wrapper').insertAfter(jQuery('[data-drupal-selector="edit-captcha-image"]'));
  }


  // Добавление иконок на страницу подключения
  const icon1 = jQuery(`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.93005 15.1653H6.06338V17.032H7.93005V15.1653Z" fill="#0062FF"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1868 6.03327C23.3046 6.03327 23.3046 7.7666 22.1868 7.7666H20.3335V16.2667H22.1868C22.6655 16.2667 23.0535 16.6547 23.0535 17.1333C23.0535 17.612 22.6655 18 22.1868 18H20.3335V20C20.3335 22.2 18.5468 24 16.3335 24H4.33349C2.12016 24 0.333496 22.2133 0.333496 20V4.04663C0.333496 1.8333 2.12016 0.0466309 4.3335 0.0466309H16.3335C18.5468 0.0466309 20.3335 1.8333 20.3335 4.04663V6.03327H22.1868ZM9.48904 7.28909C9.80148 6.92648 9.7608 6.37925 9.39818 6.06681C9.03557 5.75438 8.48834 5.79506 8.17591 6.15767L6.6651 7.91113L5.7508 7.06222C5.40004 6.73654 4.85167 6.75687 4.52599 7.10764C4.20031 7.4584 4.22064 8.00676 4.57141 8.33245L6.14485 9.79337C6.31738 9.95357 6.54767 10.0367 6.78274 10.0236C7.01781 10.0105 7.23744 9.90233 7.39112 9.72397L9.48904 7.28909ZM11.5583 7.94081C11.5583 8.41945 11.9463 8.80747 12.4249 8.80747L15.4668 8.80746C15.9455 8.80746 16.3335 8.41944 16.3335 7.9408C16.3335 7.46215 15.9455 7.07413 15.4668 7.07413L12.4249 7.07414C11.9463 7.07414 11.5583 7.46216 11.5583 7.94081ZM11.5583 16.0986C11.5583 16.5773 11.9463 16.9653 12.4249 16.9653L15.4668 16.9653C15.9455 16.9653 16.3335 16.5773 16.3335 16.0986C16.3335 15.62 15.9455 15.232 15.4668 15.232L12.4249 15.232C11.9463 15.232 11.5583 15.62 11.5583 16.0986ZM6.06338 13.432C5.10609 13.432 4.33005 14.208 4.33005 15.1653V17.032C4.33005 17.9893 5.10609 18.7653 6.06338 18.7653H7.93005C8.88734 18.7653 9.66338 17.9893 9.66338 17.032V15.1653C9.66338 14.208 8.88734 13.432 7.93005 13.432H6.06338Z" fill="#0062FF"/>
    </svg>
  `);
  const icon2 = jQuery(`
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333496 4C0.333496 1.79086 2.12436 0 4.3335 0H12.9739C13.9902 0 14.9683 0.386803 15.7097 1.08185L20.4026 5.48145C21.2092 6.23764 21.6668 7.29396 21.6668 8.39959V20C21.6668 22.2091 19.876 24 17.6668 24H4.3335C2.12436 24 0.333499 22.2091 0.333497 20L0.333496 4ZM19.2069 7.99999C19.6226 7.99999 19.8308 7.49732 19.5368 7.20334L14.4635 2.12998C14.1695 1.836 13.6668 2.04421 13.6668 2.45996V6.09972C13.6668 7.14922 14.4644 8 15.4484 8L19.2069 7.99999ZM11.0003 8C11.4789 8 11.867 8.38802 11.867 8.86667V12H15.0003C15.4789 12 15.867 12.388 15.867 12.8667C15.867 13.3453 15.4789 13.7333 15.0003 13.7333H11.867V16.8667C11.867 17.3453 11.4789 17.7333 11.0003 17.7333C10.5216 17.7333 10.1336 17.3453 10.1336 16.8667V13.7333L7.00029 13.7333C6.52165 13.7333 6.13363 13.3453 6.13363 12.8667C6.13363 12.388 6.52165 12 7.00029 12H10.1336V8.86667C10.1336 8.38802 10.5216 8 11.0003 8Z" fill="#0062FF"/>
    </svg>
  `)
  if (jQuery('.connection-section-title-icon').length) {
    const iconContainers = jQuery('.connection-section-title-icon');
    jQuery(iconContainers[0]).html(icon1);
    jQuery(iconContainers[1]).html(icon2);
  }

  // Замена иконок стрелок в пагинации
  const arrowPrevSvg = () => {
    return (jQuery(
      `<svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.67828 0.765202C8.0841 1.13981 8.10941 1.77246 7.7348 2.17829L2.36091 8L7.7348 13.8217C8.10941 14.2275 8.0841 14.8602 7.67828 15.2348C7.27246 15.6094 6.6398 15.5841 6.2652 15.1783L0.265197 8.67828C-0.0883988 8.29522 -0.0883988 7.70479 0.265197 7.32172L6.2652 0.821725C6.6398 0.415904 7.27246 0.390598 7.67828 0.765202Z" fill="#576375"/>
      </svg>`
    ))
  }
  if (jQuery('.pagination')) {
    jQuery('a[rel="prev"] > span').html(arrowPrevSvg())
    jQuery('a[rel="next"] > span').html(arrowPrevSvg().css('transform', 'rotate(180deg)'))
  }

  // Замена иконки фильтра
  const filterButton = jQuery(
    `<svg class="filter-icon" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.119629 8.40003C0.119629 8.58003 0.189628 8.75003 0.329628 8.88003C0.599628 9.12003 1.00963 9.10003 1.24963 8.84003L6.98993 2.47089L12.5399 8.88005C12.7799 9.15005 13.1899 9.16005 13.4599 8.92005C13.7199 8.68005 13.7399 8.27005 13.4999 8.00005L7.50993 1.10089C7.22993 0.790893 6.74993 0.790893 6.46993 1.10089L0.289627 7.96003C0.169627 8.09003 0.119629 8.24003 0.119629 8.40003Z" fill="#3A85FF"/>
    </svg>
    <p class="filter-text"> Фильтр</p>`
  )

  if (jQuery('.view-filter-button').length) {
    jQuery('.view-filter-button').html(filterButton)
  }


  // Реогранизация отображения ролей владельца и участников
  if (jQuery('.apicMyOrg').length && jQuery('.apicMyOrgNoMembers').length === 0) {
    // Владелец
    const ownerMail = jQuery('.apicMyOrgOwner .apicMyOrgMemberDetails').find('.apicUserMail').text();
    jQuery('.apicMyOrgOwner .apicMyOrgMemberDetails').find('.ownerTag').remove();
    jQuery(`<div><p>${ownerMail}</p></div><div><p>Владелец</p></div>`).insertAfter('.apicMyOrgOwner .apicMyOrgMemberDetails .orgApicUser');
    jQuery('.apicMyOrgOwner .apicMyOrgMemberDetails').find('.apicUserMail').remove();
    // Участники
    const membersArray = jQuery("tr[class^='member']");
    membersArray.each((i, member) => {
      // Захват роли
      const tdWithRole = jQuery(member).find('td > span.apicMyOrgMemberRoleEnabled');
      console.log(tdWithRole);
      const role = tdWithRole.attr( "title" ).split('_').slice(-1)[0];
      // Захват всех ячеек строки члена организации и удаление тех, что отвечают за роли
      const tds = jQuery(member).find('td')
      for (let i = 1; i <=3; i++) {
        jQuery(tds)[i].remove()
      }
      // Определение текста для роли
      let roleName;
      switch (role) {
        case 'administrator':
          roleName = 'Администратор'
          break;
        case 'developer':
          roleName = 'Разработчик'
          break;
        case 'viewer':
          roleName = 'Наблюдатель'
          break;
        default:
          roleName = 'Участник'
          break;
      }
      // Захват почты
      const emailSpan = jQuery(member).find('.apicUserMail');
      // Добавление роли
      jQuery( `<td></td><td><p>${emailSpan.text()}</p></td><td><p>${roleName}</p></td>` ).insertAfter(tds[0]);
      // Удаление спана с имейлом
      emailSpan.remove()
    });
  }

  // Удаление таблицы, если участников нет
  if (jQuery('.apicMyOrgNoMembers').length) {
    jQuery('.apicMyOrgMembers').html('<p>Пригласите участников для совместной работы</p>')
  }

  // Добавление слова "ver." на страницу документации АПИ
  if (jQuery('.apiconnect-explorer').length) {
    jQuery('.apicProductVersion.apiVersion').prepend('ver. ')
  }

  // Выделение ссылки открытого раздела в хэдере
  if (jQuery('.catalog-info-public-cards-item').length || jQuery('.apicProductApiList').length || jQuery('.apiconnect-explorer-menu').length) {
    jQuery('.header-menu-links-item:contains("Каталог API")').addClass('header-menu-links-item-active')
  } else if (jQuery('.connection').length) {
    jQuery('.header-menu-links-item:contains("Подключение")').addClass('header-menu-links-item-active')
  } else if (jQuery('.application-view').length || jQuery('.applicationWrapper').length || jQuery('.applicationWrapper').length) {
    jQuery('.header-menu-links-item:contains("Приложения")').addClass('header-menu-links-item-active')
  } else if (jQuery('.ibmapimSupport').length) {
    jQuery('.header-menu-links-item:contains("Поддержка")').addClass('header-menu-links-item-active')
  } else if (jQuery('.view-blog').length) {
    jQuery('.header-menu-links-item:contains("Блог")').addClass('header-menu-links-item-active')
  }

  // Стрница с приложениями
  // Перемещение кнопки создания нового приложения
  if (jQuery('.apicNewAppWrapper').length) {
    jQuery('.apicNewAppWrapper').insertAfter('.page-header')
  }
});
