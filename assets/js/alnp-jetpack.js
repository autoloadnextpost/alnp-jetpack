;( function ( $, window, document, undefined ) {

  // Ensure alnp_jetpack exists to continue.
  if ( typeof alnp_jetpack === 'undefined' ) {
    return false;
  }

  $('body').on( 'alnp-post-loaded', function( e, post_title, post_url, post_id ) {
    var baseURL   = alnp_jetpack.siteURL,
        moduleDir  = '/jetpack/modules/tiled-gallery/tiled-gallery/',
        javascript = alnp_jetpack.pluginsDir + moduleDir + 'tiled-gallery.js',
        stylesheet = alnp_jetpack.pluginsDir + moduleDir + 'tiled-gallery.css';

    $.getScript( baseURL + javascript );

    // Only load the CSS if it was not loaded before.
    if ( ! $( 'link[href="' + baseURL + stylesheet + '"]').length ) {
      $('<link/>', {
        rel: 'stylesheet',
        type: 'text/css',
        href: stylesheet
      }).appendTo('head');
    }

  });

})( jQuery, window, document );
