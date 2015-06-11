/* getJSONP jQuery Plugin - www.emancipa.com.br */
;(function ( $, window, document ) {
    plugin = {
        pluginName: 'getJSONP',
        setupError: function(e) {
                    debug.error(e.statusText);                
        },
        setupSuccess: function(data) {
                    debug.log( JSON.stringify( data ) );                
        }
    };
    $[plugin.pluginName] = function (  url, success, error, callback ) {
        $.ajax({
              type: 'GET'
            , url: url
            , async: false
            , jsonpCallback: (!callback ? 'jsonCallback' : callback)
            , contentType: "application/json"
            , dataType: 'jsonp'
            , success: (!success ? plugin.setupSuccess : success)
            , error: (!error ? plugin.setupError : error)
            });        
    };
})( jQuery, window, document );