  /////////////////////////////////////
  //         BEGIN API HOOKS         //
  /////////////////////////////////////

  //        Facebook API HOOKS       //
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1546907485605938',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  /////////////////////////////////////
  //           END API HOOKS         //
  /////////////////////////////////////



  /////////////////////////////////////
  //      BEGIN SHARE MECHANISMS     //
  /////////////////////////////////////
  //      Facebook Share function    //
  function fbShare() {
    FB.ui(
    {
      // SHARE INFO
      method: 'feed',
      name: 'Welcome to the #FearlessSummer Olympics', // name of the product or content you want to share
      link: 'http://fearlesssummer.fearlessrecords.com/', // link back to the product or content you are sharing
      picture: 'https://s3.amazonaws.com/myfangate.com/fearlesswarped2016/shareimage.jpg', // path to an image you would like to share with this content
      caption: 'Win weekly prizes from The Fearless Family and #fearlesssummer partners!', // caption
      description: 'Enter the #FearlessSummer sweepstakes to win prizes from The Fearless Family and #fearlesssummer partners!' // description of your product or content
    },
    function(response) {
      if (response && response.post_id) {
        // Successful Facebook Share Callback
        $('#fbshareinput').prop('checked', true);
        $('#fbshareinput').next('.error-box').next('span.error').html('');
      } else {
        // Unsuccessful Facebook Share Callback
        $('#fbshareinput').prop('checked', false);
      }
    });
  }
