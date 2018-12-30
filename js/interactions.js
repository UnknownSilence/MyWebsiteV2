$.fn.extend({
  animateCss: function (animationName, callback) {
    var animationEnd = (function (el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});


document.body.className += ' fade-out';
$(function () {
  $('body').removeClass('fade-out');
});


$(document).ready(function () {


  $("#myCanvas").animateCss('bounceInDown');
  $(this).animateCss('bounceInDown', function () {
    // Do something after animation
  });

  $(".emptySpace").animateCss('bounceInDown');
  $(this).animateCss('bounceInDown', function () {
    // Do something after animation
  });

  $("#myLogo").animateCss('bounceInUp');
  $(this).animateCss('bounceInUp', function () {
    // Do something after animation
  });

  $("#skillsRow").animateCss('bounceInUp');
  $(this).animateCss('bounceInUp', function () {
    // Do something after animation
  });


  $(".row").animateCss('bounceInUp');
  $(this).animateCss('bounceInUp', function () {
    // Do something after animation
  });

  $("#helloText").hover(
    function () {
      $(this).addClass("glitch2");
    },
    function () {
      $(this).removeClass("glitch2");
    }
  );

  $("#nameText").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  );

  $("#developerTag").hover(
    function () {
      $(this).addClass("glitch2");
    },
    function () {
      $(this).removeClass("glitch2");
    }
  );

  $("#compSciTag").hover(
    function () {
      $(this).addClass("glitch2");
      $("#scienceTag").addClass("glitch2");
    },
    function () {
      $(this).removeClass("glitch2");
      $("#scienceTag").removeClass("glitch2");
    }
  );

  $("#meTag").hover(
    function () {
      $(this).addClass("glitch2");
    },
    function () {
      $(this).removeClass("glitch2");
    }
  )

  $("#2016tag").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  )

  $("#conceptTag").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  )

  $("#syntaxTag").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  )

  $("#myTag").hover(
    function () {
      $(this).addClass("glitch2");
    },
    function () {
      $(this).removeClass("glitch2");
    }
  )

  $("#proficiencyTag").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  )

  $("#commonlyTag").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  )

  $("#usedTag").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  )

  $("#hardTag").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  )

  $("#collinsTag").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  )

  $("#engineeringTag").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  )

  $("#digitalTag").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  )

  $("#physicsTag").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  )

  $("#userTag").hover(
    function () {
      $(this).addClass("glitch");
    },
    function () {
      $(this).removeClass("glitch");
    }
  )

  $("#tioTag").hover(
    function () {
      $(this).addClass("glitch2");
    },
    function () {
      $(this).removeClass("glitch2");
    }
  )

  $("#ducTag").hover(
    function () {
      $(this).addClass("glitch2");
    },
    function () {
      $(this).removeClass("glitch2");
    }
  )

  $(".linkBtn").hover(
    function () {
      $(this).animateCss('pulse');
      $(this).animateCss('pulse', function () {
        // Do something after animation
      });
    }
  )

  $(".viewCert").hover(
    function () {
      $(this).animateCss('pulse');
      $(this).animateCss('pulse', function () {
        // Do something after animation
      });
    }
  )




});