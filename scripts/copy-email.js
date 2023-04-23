function showDiv() {
    document.querySelector(".captcha-box").style.display = "block";
    document.querySelector("#turnstile-widget").style.display = "none";
  }

  window.onloadTurnstileCallback = function() {
    turnstile.render('#turnstile-widget', {
      sitekey: '0x4AAAAAAAELud_4ajT9ou1R',
      theme: 'dark',
      callback: function(token) {
        console.log(`Challenge Success ${token}`);
        showDiv();
      },
    });
  };