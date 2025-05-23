/*! url - v1.8.6 - 2013-11-22 */window.url=function(){function a(a){return!isNaN(parseFloat(a))&&isFinite(a)}return function(b,c){var d=c||window.location.toString();if(!b)return d;b=b.toString(),"//"===d.substring(0,2)?d="http:"+d:1===d.split("://").length&&(d="http://"+d),c=d.split("/");var e={auth:""},f=c[2].split("@");1===f.length?f=f[0].split(":"):(e.auth=f[0],f=f[1].split(":")),e.protocol=c[0],e.hostname=f[0],e.port=f[1]||("https"===e.protocol.split(":")[0].toLowerCase()?"443":"80"),e.pathname=(c.length>3?"/":"")+c.slice(3,c.length).join("/").split("?")[0].split("#")[0];var g=e.pathname;"/"===g.charAt(g.length-1)&&(g=g.substring(0,g.length-1));var h=e.hostname,i=h.split("."),j=g.split("/");if("hostname"===b)return h;if("domain"===b)return/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(h)?h:i.slice(-2).join(".");if("sub"===b)return i.slice(0,i.length-2).join(".");if("port"===b)return e.port;if("protocol"===b)return e.protocol.split(":")[0];if("auth"===b)return e.auth;if("user"===b)return e.auth.split(":")[0];if("pass"===b)return e.auth.split(":")[1]||"";if("path"===b)return e.pathname;if("."===b.charAt(0)){if(b=b.substring(1),a(b))return b=parseInt(b,10),i[0>b?i.length+b:b-1]||""}else{if(a(b))return b=parseInt(b,10),j[0>b?j.length+b:b]||"";if("file"===b)return j.slice(-1)[0];if("filename"===b)return j.slice(-1)[0].split(".")[0];if("fileext"===b)return j.slice(-1)[0].split(".")[1]||"";if("?"===b.charAt(0)||"#"===b.charAt(0)){var k=d,l=null;if("?"===b.charAt(0)?k=(k.split("?")[1]||"").split("#")[0]:"#"===b.charAt(0)&&(k=k.split("#")[1]||""),!b.charAt(1))return k;b=b.substring(1),k=k.split("&");for(var m=0,n=k.length;n>m;m++)if(l=k[m].split("="),l[0]===b)return l[1]||"";return null}}return""}}(),"undefined"!=typeof jQuery&&jQuery.extend({url:function(a,b){return window.url(a,b)}});
/*! rgbHex - v1.1.2 - 2013-09-27 */window.rgbHex=function(){function a(a){return!isNaN(parseFloat(a))&&isFinite(a)}function b(a){return a.replace(/^\s+|\s+$/g,"")}function c(c){return c=b(c),a(c)&&c>=0&&255>=c}function d(a){return/^[0-9a-f]{3}$|^[0-9a-f]{6}$/i.test(b(a))}function e(a){return a=parseInt(a,10).toString(16),1===a.length?"0"+a:a}function f(a){return parseInt(a,16).toString()}function g(b){return b=b.split(","),(3===b.length||4===b.length)&&c(b[0])&&c(b[1])&&c(b[2])?4!==b.length||a(b[3])?"#"+e(b[0]).toUpperCase()+e(b[1]).toUpperCase()+e(b[2]).toUpperCase():null:null}function h(a){return d(a)?(3===a.length&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)),"rgb("+f(a.substr(0,2))+","+f(a.substr(2,2))+","+f(a.substr(4,2))+")"):void 0}function i(a){return a.replace(/\s/g,"")}return function(a){if(!a)return null;var c=null,d=/^rgba?\((.*)\);?$/,e=/^#/;return a=b(a.toString()),"transparent"===a||"rgba(0,0,0,0)"===i(a)?"transparent":d.test(a)?g(a.match(d)[1]):e.test(a)?h(a.split("#").reverse()[0]):(c=a.split(","),1===c.length?h(a):3===c.length||4===c.length?g(a):void 0)}}(),jQuery&&jQuery.extend({rgbHex:function(a){return window.rgbHex(a)}});
/* colourBrightness.js by @jamiebrittain */!function(r){r.fn.colourBrightness=function(){function r(r){for(var t="";"html"!=r[0].tagName.toLowerCase()&&(t=r.css("background-color"),"rgba(0, 0, 0, 0)"==t||"transparent"==t);)r=r.parent();return t}var t,a,s,e,n=r(this);return n.match(/^rgb/)?(n=n.match(/rgba?\(([^)]+)\)/)[1],n=n.split(/ *, */).map(Number),t=n[0],a=n[1],s=n[2]):"#"==n[0]&&7==n.length?(t=parseInt(n.slice(1,3),16),a=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16)):"#"==n[0]&&4==n.length&&(t=parseInt(n[1]+n[1],16),a=parseInt(n[2]+n[2],16),s=parseInt(n[3]+n[3],16)),e=(299*t+587*a+114*s)/1e3,125>e?this.removeClass("light").addClass("dark"):this.removeClass("dark").addClass("light"),this}}(jQuery);

// TypeScript: Extend the Window interface for 'url'
  var $hex = $('#hex'),
      $rgb = $('#rgb'),
      $hsl = $('#hsl'),
      $cmyk = $('#cmyk');
  var $hex = $('#hex'),
      $rgb = $('#rgb'),
      $hsl = $('#hsl'),
      $cmyk = $('#cmyk'),
      $hex_val = $('#hex').val(),
      $rgb_val = $('#rgb').val(),
      $hsl_val = $('#hsl').val(),
      $cmyk_val = $('#cmyk').val();

  window.onhashchange = hashColour;
  hashColour();
    // @ts-ignore
    urlHash = window.url('#', url);
    // @ts-ignore
    if(window.url('#', url)) {
      // @ts-ignore
      urlColour = window.url('#', url);
    } else {
      // @ts-ignore
      urlColour = window.url('-1', url);
    }
    if(window.url('#', url)) {
      urlColour = window.url('#', url);
    } else {
      urlColour = window.url('-1', url);
    }

    if(urlColour) {
      if(urlColour.match('^[0-9A-Fa-f]{3}$') || urlColour.match('^[0-9A-Fa-f]{6}$')) {
        $hex.val('#' + urlColour);

        var colour = $.rgbHex($hex.val());

        if(colour) {
          $rgb.val(colour);
          $rgb.select();

          // Convert HEX to HSL and CMYK and set values
          var rgb = hexToRgb($hex.val());
          if (rgb) {
            var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
            $hsl.val('hsl(' + hsl.h + ', ' + hsl.s + '%, ' + hsl.l + '%)');
            var cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
            $cmyk.val('cmyk(' + cmyk.c + '%, ' + cmyk.m + '%, ' + cmyk.y + '%, ' + cmyk.k + '%)');
          } else {
            $hsl.val('');
            $cmyk.val('');
          }
        } else {
          $rgb.val('');
          $hsl.val('');
          $cmyk.val('');
        }

        $('body').css('background-color', $rgb.val());
        $('body').colourBrightness();
      } else {
        $hex.focus();
      }
    }
  }

  // Helper: HEX to RGB
  function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
      hex = hex.split('').map(function (x) { return x + x; }).join('');
    }
    var num = parseInt(hex, 16);
    if (isNaN(num)) return null;
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  // Helper: RGB to HSL
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }

  // Helper: RGB to CMYK
  function rgbToCmyk(r, g, b) {
    var c = 1 - (r / 255),
        m = 1 - (g / 255),
        y = 1 - (b / 255),
        k = Math.min(c, m, y);

    if (k === 1) {
      return {c: 0, m: 0, y: 0, k: 100};
    }

    c = Math.round(((c - k) / (1 - k)) * 100);
    m = Math.round(((m - k) / (1 - k)) * 100);
    y = Math.round(((y - k) / (1 - k)) * 100);
    k = Math.round(k * 100);

    return {c: c, m: m, y: y, k: k};
  }

  $hex.bind('blur keyup', function(e){
    colour = $.rgbHex($('#hex').val());

    if(colour){
      $('#rgb').val(colour);
    }
    else {
      $('#rgb').val('');
    }

    $('body').css('background-color', $rgb.val());
    $('body').colourBrightness();

    if(e.keyCode == 13){
      $rgb.select();
    }
  });

  $rgb.bind('blur keyup', function(e){
    colour = $.rgbHex($('#rgb').val());

    if(colour){
      $('#hex').val(colour);
    }
    else {
      $('#hex').val('');
    }

    $('body').css('background-color', $hex.val());
    $('body').colourBrightness();

    if(e.keyCode == 13){
      $hex.select();
    }
  });
  $hsl.bind('blur keyup', function(e){
    colour = $.rgbHex($('#hsl').val());

    if(colour){
      $('#hex').val(colour);
    }
    else {
      $('#hex').val('');
    }

    $('body').css('background-color', $hex.val());
    $('body').colourBrightness();

    if(e.keyCode == 13){
      $hex.select();
    }
  });
  $cmyk.bind('blur keyup', function(e){
    colour = $.rgbHex($('#cmyk').val());

    if(colour){
      $('#hex').val(colour);
    }
    else {
      $('#hex').val('');
    }
  $('.tweet').click(function(){
    var width  = 575,
        height = 400,
        left   = ($(window).width() - width) / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(url, 'twitter', opts);

    return false;
  });
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(url, 'twitter', opts);

    return false;
  });
});
