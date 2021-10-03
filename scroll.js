//<![CDATA[
function shortCodeIfy(_0xdafax3, _0xdafax4, _0xdafax5) {
    for (var _0xdafax6 = _0xdafax3.split('$'), _0xdafax7 = /[^{\}]+(?=})/g, _0xdafax8 = 0; _0xdafax8 < _0xdafax6.length; _0xdafax8++) {
        var _0xdafax9 = _0xdafax6[_0xdafax8].split('=');
        if (_0xdafax9[0].trim() == _0xdafax4) {
            return null != (_0xdafax5 = _0xdafax9[1]).match(_0xdafax7) && String(_0xdafax5.match(_0xdafax7)).trim()
        }
    };
    return !1
}

function msgError() {
    return '<span class="error-msg"><b>Error:</b>&nbsp;No Results Found</span>'
}

function beforeLoader() {
    return '<div class="loader"></div>'
}

function getFeedUrl(_0xdafax3, _0xdafax4, _0xdafax5, _0xdafax6) {
    switch (_0xdafax5) {
    case 'recent':
        _0xdafax6 = '/feeds/posts/default?alt=json&max-results=' + _0xdafax4;
        break;
    case 'comments':
        _0xdafax6 = 'list1' == _0xdafax3 ? '/feeds/comments/default?alt=json&max-results=' + _0xdafax4 : '/feeds/posts/default/-/' + _0xdafax5 + '?alt=json&max-results=' + _0xdafax4;
        break;
    default:
        _0xdafax6 = '/feeds/posts/default/-/' + _0xdafax5 + '?alt=json&max-results=' + _0xdafax4
    };
    return _0xdafax6
}

function getPostLink(_0xdafax3, _0xdafax4) {
    for (var _0xdafax5 = 0; _0xdafax5 < _0xdafax3[_0xdafax4].link.length; _0xdafax5++) {
        if ('alternate' == _0xdafax3[_0xdafax4].link[_0xdafax5].rel) {
            var _0xdafax6 = _0xdafax3[_0xdafax4].link[_0xdafax5].href;
            break
        }
    };
    return _0xdafax6
}

function getPostTitle(_0xdafax3, _0xdafax4, _0xdafax5) {
    return _0xdafax3[_0xdafax4].title.$t ? _0xdafax3[_0xdafax4].title.$t : exportify.noTitle
}

function getFirstImage(_0xdafax3, _0xdafax4) {
    var _0xdafax5 = $('<div>').html(_0xdafax3).find('img:first').attr('src'),
        _0xdafax6 = _0xdafax5.lastIndexOf('/') || 0,
        _0xdafax7 = _0xdafax5.lastIndexOf('/', _0xdafax6 - 1) || 0,
        _0xdafax8 = _0xdafax5.substring(0, _0xdafax7),
        _0xdafax9 = _0xdafax5.substring(_0xdafax7, _0xdafax6),
        _0xdafax10 = _0xdafax5.substring(_0xdafax6);
    return (_0xdafax9.match(/\/s[0-9]+/g) || _0xdafax9.match(/\/w[0-9]+/g) || '/d' == _0xdafax9) && (_0xdafax9 = '/w72-h72-p-k-no-nu'), _0xdafax8 + _0xdafax9 + _0xdafax10
}

function getPostImage(_0xdafax3, _0xdafax4, _0xdafax5, _0xdafax6) {
    var _0xdafax7 = _0xdafax3[_0xdafax4].content.$t;
    return _0xdafax5 = _0xdafax3[_0xdafax4].media$thumbnail ? _0xdafax3[_0xdafax4].media$thumbnail.url : 'https://resources.blogblog.com/img/blank.gif', _0xdafax7.indexOf(_0xdafax7.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? _0xdafax7.indexOf('<img') > -1 ? _0xdafax7.indexOf(_0xdafax7.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < _0xdafax7.indexOf('<img') ? _0xdafax5.replace('/default.', '/maxresdefault.') : getFirstImage(_0xdafax7) : _0xdafax5.replace('/default.', '/maxresdefault.') : _0xdafax7.indexOf('<img') > -1 ? getFirstImage(_0xdafax7) : 'https://resources.blogblog.com/img/blank.gif'
}

function getPostImageType(_0xdafax3, _0xdafax4) {
    return _0xdafax3.match('img.youtube.com') ? 'is-video' : 'is-image'
}

function getPostComments(_0xdafax3, _0xdafax4, _0xdafax5, _0xdafax6) {
    var _0xdafax7 = _0xdafax3[_0xdafax4].author[0].name.$t,
        _0xdafax8 = _0xdafax3[_0xdafax4].author[0].gd$image.src.replace('/s113', '/w35-h35-p-k-no-nu'),
        _0xdafax9 = _0xdafax3[_0xdafax4].title.$t;
    return (_0xdafax8.match('//img1.blogblog.com/img/blank.gif') || _0xdafax8.match('//img1.blogblog.com/img/b16-rounded.gif')) && (_0xdafax8 = '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w35-h35-p-k-no-nu/avatar.jpg'), '<div class="cmm1-item item-' + _0xdafax4 + '"><a class="entry-inner wrap-all-link" href="' + _0xdafax5 + '" title="' + _0xdafax7 + '"><span class="entry-image-wrap cmm-avatar"><span class="entry-thumb" data-image="' + _0xdafax8 + '"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">' + _0xdafax7 + '</h2><p class="cmm-snippet excerpt">' + _0xdafax9 + '</p></div></a></div>'
}

function getAjax(_0xdafax3, _0xdafax4, _0xdafax5, _0xdafax6) {
    switch (_0xdafax4) {
    case 'msimple':
        ;
    case 'list1':
        ;
    case 'related':
        0 == _0xdafax6 && (_0xdafax6 = 'geterror404');
        var _0xdafax7 = getFeedUrl(_0xdafax4, _0xdafax5, _0xdafax6);
        $.ajax({
            url: _0xdafax7,
            type: 'GET',
            dataType: 'json',
            cache: !0,
            beforeSend: function (_0xdafax5) {
                switch (_0xdafax4) {
                case 'list1':
                    _0xdafax3.html(beforeLoader());
                    break;
                case 'related':
                    _0xdafax3.html(beforeLoader()).parent().addClass('show-ify')
                }
            },
            success: function (_0xdafax5) {
                var _0xdafax7 = '';
                switch (_0xdafax4) {
                case 'msimple':
                    _0xdafax7 = '<div class="ul mega-items">';
                    break;
                case 'list1':
                    _0xdafax7 = 'comments' != _0xdafax6 ? '<div class="list1-items sidebar-posts">' : '<div class="cmm1-items">';
                    break;
                case 'related':
                    _0xdafax7 = '<div class="related-posts">'
                };
                var _0xdafax8 = _0xdafax5.feed.entry;
                if (null != _0xdafax8) {
                    for (var _0xdafax9 = 0, _0xdafax10 = _0xdafax8; _0xdafax9 < _0xdafax10.length; _0xdafax9++) {
                        var _0xdafax15 = getPostLink(_0xdafax10, _0xdafax9),
                            _0xdafax16 = getPostTitle(_0xdafax10, _0xdafax9),
                            _0xdafax17 = getPostImage(_0xdafax10, _0xdafax9),
                            _0xdafax18 = getPostImageType(_0xdafax17, _0xdafax9),
                            _0xdafax19 = '';
                        switch (_0xdafax4) {
                        case 'msimple':
                            _0xdafax19 += '<div class="mega-item post"><div class="mega-content"><a title="' + _0xdafax16 + '" class="entry-image-wrap ' + _0xdafax18 + '" href="' + _0xdafax15 + '"><span class="entry-thumb" data-image="' + _0xdafax17 + '"></span></a><h2 class="entry-title"><a href="' + _0xdafax15 + '" title="' + _0xdafax16 + '">' + _0xdafax16 + '</a></h2></div></div>';
                            break;
                        case 'list1':
                            switch (_0xdafax6) {
                            case 'comments':
                                _0xdafax19 += getPostComments(_0xdafax10, _0xdafax9, _0xdafax15);
                                break;
                            default:
                                _0xdafax19 += '<div class="list1-item post item-' + _0xdafax9 + '"><a title="' + _0xdafax16 + '" class="entry-image-wrap ' + _0xdafax18 + '" href="' + _0xdafax15 + '"><span class="entry-thumb" data-image="' + _0xdafax17 + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + _0xdafax15 + '" title="' + _0xdafax16 + '">' + _0xdafax16 + '</a></h2></div></div>'
                            };
                            break;
                        case 'related':
                            _0xdafax19 += '<div class="related-item post item-' + _0xdafax9 + '"><a title="' + _0xdafax16 + '" class="entry-image-wrap ' + _0xdafax18 + '" href="' + _0xdafax15 + '"><span class="entry-thumb" data-image="' + _0xdafax17 + '"></span></a><div class="entry-header"><h2 class="entry-title"><a href="' + _0xdafax15 + '" title="' + _0xdafax16 + '">' + _0xdafax16 + '</a></h2></div></div>'
                        };
                        _0xdafax7 += _0xdafax19
                    }
                } else {
                    switch (_0xdafax4) {
                    case 'msimple':
                        _0xdafax7 = '<div class="ul mega-items no-items">' + msgError() + '</div>';
                        break;
                    default:
                        _0xdafax7 = msgError()
                    }
                };
                switch (_0xdafax4) {
                case 'msimple':
                    _0xdafax7 += '</div>', _0xdafax3.append(_0xdafax7).addClass('msimple'), _0xdafax3.find('a:first').attr('href', function (_0xdafax3, _0xdafax4) {
                        switch (_0xdafax6) {
                        case 'recent':
                            _0xdafax4 = _0xdafax4.replace(_0xdafax4, '/search');
                            break;
                        default:
                            _0xdafax4 = _0xdafax4.replace(_0xdafax4, '/search/label/' + _0xdafax6)
                        };
                        return _0xdafax4
                    });
                    break;
                default:
                    _0xdafax7 += '</div>', _0xdafax3.html(_0xdafax7)
                };
                _0xdafax3.find('span.entry-thumb').lazyify()
            },
            error: function () {
                switch (_0xdafax4) {
                case 'msimple':
                    _0xdafax3.append('<div class="ul mega-items no-items">' + msgError() + '</div>');
                    break;
                default:
                    _0xdafax3.html(msgError())
                }
            }
        })
    }
}

function ajaxMega(_0xdafax3, _0xdafax4, _0xdafax5, _0xdafax6, _0xdafax7) {
    if (_0xdafax7.match('getmega')) {
        if ('msimple' == _0xdafax4) {
            return getAjax(_0xdafax3, _0xdafax4, _0xdafax5, _0xdafax6)
        };
        _0xdafax3.append('<div class="ul mega-items no-items">' + msgError() + '</div>')
    }
}

function ajaxWidget(_0xdafax3, _0xdafax4, _0xdafax5, _0xdafax6, _0xdafax7) {
    if (_0xdafax7.match('getwidget')) {
        if ('list1' == _0xdafax4) {
            return getAjax(_0xdafax3, _0xdafax4, _0xdafax5, _0xdafax6)
        };
        _0xdafax3.html(msgError())
    }
}

function ajaxRelated(_0xdafax3, _0xdafax4, _0xdafax5, _0xdafax6, _0xdafax7) {
    if (_0xdafax7.match('getrelated')) {
        return getAjax(_0xdafax3, _0xdafax4, _0xdafax5, _0xdafax6)
    }
}

function fixedSidebarIfy() {
    $('#main-wrapper, #sidebar-wrapper').each(function () {
        1 == fixedSidebar && $(this).theiaStickySidebarIfy({
            containerSelector: '#content-wrapper > .container',
            additionalMarginTop: 20,
            additionalMarginBottom: 20
        })
    })
}

function disqusComments(_0xdafax3) {
    var _0xdafax4 = document.createElement('script');
    _0xdafax4.type = 'text/javascript', _0xdafax4.async = !0, _0xdafax4.src = '//' + _0xdafax3 + '.disqus.com/blogger_item.js', (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(_0xdafax4)
}

function beautiAvatar(_0xdafax3) {
    $(_0xdafax3).attr('src', function (_0xdafax3, _0xdafax4) {
        return _0xdafax4 = _0xdafax4.replace('//resources.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg')
    })
}
$('#seopro-preview-main-nav').menuify(), $('#seopro-preview-main-nav .widget').addClass('show-menu'), $('.show-search').on('click', function () {
    $('body').addClass('search-active'), $('#main-search-wrap').fadeIn(170).find('input').focus()
}), $('.hide-search').on('click', function () {
    $('body').removeClass('search-active'), $('#main-search-wrap').fadeOut(170).find('input').val('').blur()
}), $('html').each(function () {
    var _0xdafax3 = $(this);
    1 != darkMode && 0 != userDarkMode && ('dark' == localStorage.themeColor && _0xdafax3.addClass('is-dark'), $('.darkmode-toggle').on('click', function () {
        'dark' != localStorage.themeColor ? (_0xdafax3.addClass('is-dark'), localStorage.themeColor = 'dark') : (_0xdafax3.removeClass('is-dark'), localStorage.themeColor = 'light')
    }))
}), $('.FollowByEmail .widget-content').each(function (_0xdafax3, _0xdafax4) {
    var _0xdafax5 = $(this),
        _0xdafax6 = _0xdafax5.data('shortcode');
    null != _0xdafax6 && (_0xdafax3 = shortCodeIfy(_0xdafax6, 'title'), _0xdafax4 = shortCodeIfy(_0xdafax6, 'text'), 0 != _0xdafax3 && _0xdafax5.find('.follow-by-email-title').text(_0xdafax3), 0 != _0xdafax4 && _0xdafax5.find('.follow-by-email-text').text(_0xdafax4))
}), $('.post-body a').each(function () {
    var _0xdafax3 = $(this),
        _0xdafax4 = _0xdafax3.html(),
        _0xdafax5 = _0xdafax4.toLowerCase(),
        _0xdafax6 = shortCodeIfy(_0xdafax4, 'text'),
        _0xdafax7 = shortCodeIfy(_0xdafax4, 'icon'),
        _0xdafax8 = shortCodeIfy(_0xdafax4, 'color');
    _0xdafax5.match('getbutton') && 0 != _0xdafax6 && (_0xdafax3.addClass('button btn').text(_0xdafax6), 0 != _0xdafax7 && _0xdafax3.addClass(_0xdafax7), 0 != _0xdafax8 && _0xdafax3.addClass('colored-button').attr('style', 'background-color:' + _0xdafax8 + ';'))
}), $('.post-body b').each(function () {
    var _0xdafax3 = $(this),
        _0xdafax4 = _0xdafax3.text(),
        _0xdafax5 = _0xdafax4.toLowerCase().trim();
    _0xdafax5.match(/(?:\$ads\=\{1\})/g) && _0xdafax3.replaceWith('<div id="seopro-preview-new-before-ad"/>'), _0xdafax5.match(/(?:\$ads\=\{2\})/g) && _0xdafax3.replaceWith('<div id="seopro-preview-new-after-ad"/>'), _0xdafax5.match('{tocify}') && (_0xdafax4 = 0 != shortCodeIfy(_0xdafax4, 'title') ? shortCodeIfy(_0xdafax4, 'title') : 'Table of Contents', _0xdafax3.replaceWith('<div class="tocify-wrap"><div class="tocify-inner"><a href="javascript:;" class="tocify-title" role="button" title="' + _0xdafax4 + '">' + _0xdafax4 + '</a><ol id="tocify"></ol></div></div>'), $('.tocify-title').each(function (_0xdafax3) {
        (_0xdafax3 = $(this)).on('click', function () {
            _0xdafax3.toggleClass('is-expanded'), $('#tocify').slideToggle(170)
        })
    }), $('#tocify').toc({
        content: '#post-body',
        headings: 'h2,h3,h4'
    }), $('#tocify li a').each(function (_0xdafax3) {
        (_0xdafax3 = $(this)).click(function () {
            return $('html,body').animate({
                scrollTop: $(_0xdafax3.attr('href')).offset().top - 20
            }, 500), !1
        })
    })), _0xdafax5.match('{contactform}') && (_0xdafax3.replaceWith('<div class="contact-form"/>'), $('.contact-form').append($('#ContactForm1'))), _0xdafax5.match('{leftsidebar}') && _0xdafax3.replaceWith('<style>#main-wrapper,.is-left #main-wrapper{float:right}#sidebar-wrapper,.is-left #sidebar-wrapper{float:left}</style>'), _0xdafax5.match('{rightsidebar}') && _0xdafax3.replaceWith('<style>#main-wrapper,.is-left #main-wrapper{float:left}#sidebar-wrapper,.is-left #sidebar-wrapper{float:right}</style>'), _0xdafax5.match('{fullwidth}') && _0xdafax3.replaceWith('<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>')
}), $('#seopro-preview-new-before-ad').each(function () {
    var _0xdafax3 = $(this);
    _0xdafax3.length && $('#before-ad').appendTo(_0xdafax3)
}), $('#seopro-preview-new-after-ad').each(function () {
    var _0xdafax3 = $(this);
    _0xdafax3.length && $('#after-ad').appendTo(_0xdafax3)
}), $('#seopro-preview-main-before-ad .widget').each(function () {
    var _0xdafax3 = $(this);
    _0xdafax3.length && _0xdafax3.appendTo($('#before-ad'))
}), $('#seopro-preview-main-after-ad .widget').each(function () {
    var _0xdafax3 = $(this);
    _0xdafax3.length && _0xdafax3.appendTo($('#after-ad'))
}), $('.post-body blockquote').each(function () {
    var _0xdafax3 = $(this),
        _0xdafax4 = _0xdafax3.text().toLowerCase().trim(),
        _0xdafax5 = _0xdafax3.html();
    if (_0xdafax4.match('{alertsuccess}')) {
        const _0xdafax4 = _0xdafax5.replace('{alertSuccess}', '');
        _0xdafax3.replaceWith('<div class="alert-message alert-success">' + _0xdafax4 + '</div>')
    };
    if (_0xdafax4.match('{alertinfo}')) {
        const _0xdafax4 = _0xdafax5.replace('{alertInfo}', '');
        _0xdafax3.replaceWith('<div class="alert-message alert-info">' + _0xdafax4 + '</div>')
    };
    if (_0xdafax4.match('{alertwarning}')) {
        const _0xdafax4 = _0xdafax5.replace('{alertWarning}', '');
        _0xdafax3.replaceWith('<div class="alert-message alert-warning">' + _0xdafax4 + '</div>')
    };
    if (_0xdafax4.match('{alerterror}')) {
        const _0xdafax4 = _0xdafax5.replace('{alertError}', '');
        _0xdafax3.replaceWith('<div class="alert-message alert-error">' + _0xdafax4 + '</div>')
    };
    if (_0xdafax4.match('{codebox}')) {
        const _0xdafax4 = _0xdafax5.replace('{codeBox}', '');
        _0xdafax3.replaceWith('<pre class="code-box">' + _0xdafax4 + '</pre>')
    }
}), $('.seopro-preview-share-links .window-ify').on('click', function () {
    var _0xdafax3 = $(this),
        _0xdafax4 = _0xdafax3.data('url'),
        _0xdafax5 = _0xdafax3.data('width'),
        _0xdafax6 = _0xdafax3.data('height'),
        _0xdafax7 = window.screen.width,
        _0xdafax8 = window.screen.height,
        _0xdafax9 = Math.round(_0xdafax7 / 2 - _0xdafax5 / 2),
        _0xdafax10 = Math.round(_0xdafax8 / 2 - _0xdafax6 / 2);
    window.open(_0xdafax4, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + _0xdafax5 + ',height=' + _0xdafax6 + ',left=' + _0xdafax9 + ',top=' + _0xdafax10).focus()
}), $('.seopro-preview-share-links').each(function () {
    var _0xdafax3 = $(this);
    _0xdafax3.find('.show-hid a').on('click', function () {
        _0xdafax3.toggleClass('show-hidden')
    })
}), $('.about-author .author-text').each(function () {
    var _0xdafax3 = $(this),
        _0xdafax4 = _0xdafax3.find('a');
    _0xdafax4.each(function () {
        var _0xdafax3 = $(this),
            _0xdafax4 = _0xdafax3.text().trim(),
            _0xdafax5 = _0xdafax3.attr('href');
        _0xdafax3.replaceWith('<li class="' + _0xdafax4 + '"><a href="' + _0xdafax5 + '" title="' + _0xdafax4 + '" rel="noopener noreferrer" target="_blank"/></li>')
    }), _0xdafax4.length && _0xdafax3.parent().append('<ul class="author-links social social-color"></ul>'), _0xdafax3.find('li').appendTo('.author-links')
}), $('#seopro-preview-main-nav-menu li.mega-menu').each(function (_0xdafax3, _0xdafax4) {
    var _0xdafax5 = $(this),
        _0xdafax6 = _0xdafax5.find('a').data('shortcode');
    null != _0xdafax6 && (_0xdafax3 = _0xdafax6.toLowerCase(), ajaxMega(_0xdafax5, 'msimple', 5, shortCodeIfy(_0xdafax6, 'label'), _0xdafax3))
}), $('.seopro-preview-widget-ready .HTML .widget-content').each(function (_0xdafax3, _0xdafax4, _0xdafax5) {
    var _0xdafax6 = $(this),
        _0xdafax7 = $(window),
        _0xdafax8 = _0xdafax6.data('shortcode');
    null != _0xdafax8 && (_0xdafax3 = _0xdafax8.toLowerCase(), _0xdafax4 = shortCodeIfy(_0xdafax8, 'results'), _0xdafax5 = shortCodeIfy(_0xdafax8, 'label'), _0xdafax7.on('scroll', function _0xdafax8() {
        _0xdafax7.scrollTop() + _0xdafax7.height() >= _0xdafax6.offset().top && (_0xdafax7.off('scroll', _0xdafax8), ajaxWidget(_0xdafax6, 'list1', _0xdafax4, _0xdafax5, _0xdafax3))
    }).trigger('scroll'))
}), $('#seopro-preview-related-posts .HTML').each(function (_0xdafax3, _0xdafax4) {
    var _0xdafax5 = $(this).data('shortcode');
    if (null != _0xdafax5) {
        function _0xdafax6() {
            return _0xdafax3 = shortCodeIfy(_0xdafax5, 'title'), _0xdafax4 = shortCodeIfy(_0xdafax5, 'results'), [_0xdafax3, _0xdafax4]
        }
        $('#related-wrap').each(function (_0xdafax3, _0xdafax4) {
            var _0xdafax5 = $(this),
                _0xdafax7 = $(window),
                _0xdafax8 = _0xdafax5.find('.seopro-preview-related-content'),
                _0xdafax9 = _0xdafax6();
            _0xdafax3 = 0 != _0xdafax9[1] ? _0xdafax9[1] : 3, 0 != _0xdafax9[0] && _0xdafax5.find('.related-title .title').text(_0xdafax9[0]), _0xdafax4 = _0xdafax5.find('.related-tag').data('label'), _0xdafax7.on('scroll', function _0xdafax5() {
                _0xdafax7.scrollTop() + _0xdafax7.height() >= _0xdafax8.offset().top && (_0xdafax7.off('scroll', _0xdafax5), ajaxRelated(_0xdafax8, 'related', _0xdafax3, _0xdafax4, 'getrelated'))
            }).trigger('scroll')
        })
    }
}), $('.seopro-preview-blog-post-comments').each(function () {
    1 != darkMode && 'dark' == localStorage.themeColor && (fbCommentsTheme = 'dark');
    var _0xdafax3 = $(this),
        _0xdafax4 = _0xdafax3.data('shortcode'),
        _0xdafax5 = shortCodeIfy(_0xdafax4, 'type'),
        _0xdafax6 = 'comments-system-' + _0xdafax5,
        _0xdafax7 = _0xdafax3.find('#top-continue .comment-reply');
    switch (_0xdafax5) {
    case 'blogger':
        _0xdafax3.addClass(_0xdafax6).show(), $('.entry-meta .entry-comments-link').addClass('show'), _0xdafax7.addClass('btn'), beautiAvatar('.avatar-image-container img');
        break;
    case 'disqus':
        var _0xdafax8 = shortCodeIfy(_0xdafax4, 'shortname');
        0 != _0xdafax8 && (disqus_shortname = _0xdafax8), disqusComments(disqus_shortname), _0xdafax3.addClass(_0xdafax6).show();
        break;
    case 'facebook':
        _0xdafax3.addClass(_0xdafax6).find('#comments').html('<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-colorscheme="' + fbCommentsTheme + '" data-numposts="5" data-lazy="true"></div>'), _0xdafax3.show();
        break;
    case 'hide':
        _0xdafax3.hide();
        break;
    default:
        _0xdafax3.addClass('comments-system-blogger').show(), $('.entry-meta .entry-comments-link').addClass('show'), _0xdafax7.addClass('btn'), beautiAvatar('.avatar-image-container img')
    };
    var _0xdafax9 = _0xdafax3.find('.comments .comment-reply'),
        _0xdafax10 = _0xdafax3.find('.comments #top-continue'),
        _0xdafax15 = _0xdafax3.find('#show-comment-form');
    _0xdafax9.on('click', function () {
        _0xdafax10.show(), _0xdafax3.addClass('comment-form-visible'), _0xdafax15.remove()
    }), _0xdafax10.on('click', function () {
        _0xdafax10.hide()
    }), _0xdafax15.on('click', function () {
        _0xdafax3.addClass('comment-form-visible'), _0xdafax15.remove(), fixedSidebarIfy()
    })
}), $(function () {
    $('.index-post .entry-image-wrap .entry-thumb, .PopularPosts .entry-image-wrap .entry-thumb, .FeaturedPost .entry-image-wrap .entry-thumb,.entry-author .author-avatar,.about-author .author-avatar').lazyify(), $('#seopro-preview-mobile-menu').each(function () {
        var _0xdafax3 = $(this),
            _0xdafax4 = $('#seopro-preview-main-nav-menu').clone();
        _0xdafax4.attr('id', 'main-mobile-nav'), _0xdafax4.find('.mega-items').remove(), _0xdafax4.find('.mega-menu > a').each(function (_0xdafax3, _0xdafax4) {
            var _0xdafax5 = $(this);
            _0xdafax4 = 'recent' == (_0xdafax3 = shortCodeIfy(_0xdafax5.data('shortcode').trim(), 'label')) ? '/search' : '/search/label/' + _0xdafax3, _0xdafax5.attr('href', _0xdafax4)
        }), _0xdafax4.appendTo(_0xdafax3), $('.mobile-menu-toggle, .hide-seopro-preview-mobile-menu, .overlay').on('click', function () {
            $('body').toggleClass('nav-active')
        }), $('.seopro-preview-mobile-menu .has-sub').append('<div class="submenu-toggle"/>'), $('.seopro-preview-mobile-menu .mega-menu').find('.submenu-toggle').remove(), $('.seopro-preview-mobile-menu ul li .submenu-toggle').on('click', function (_0xdafax3) {
            $(this).parent().hasClass('has-sub') && (_0xdafax3.preventDefault(), $(this).parent().hasClass('show') ? $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170) : $(this).parent().addClass('show').children('.m-sub').slideToggle(170))
        })
    }), $('.mobile-navbar-social').each(function () {
        var _0xdafax3 = $(this);
        $('#seopro-preview-about-section ul.social').clone().appendTo(_0xdafax3)
    }), $('.mobile-navbar-menu').each(function () {
        var _0xdafax3 = $(this);
        $('#footer-menu ul.link-list').clone().appendTo(_0xdafax3)
    }), $('.header-inner').each(function () {
        var _0xdafax3 = $(this);
        if (1 == fixedMenu && _0xdafax3.length > 0) {
            var _0xdafax4 = $(document).scrollTop(),
                _0xdafax5 = _0xdafax3.offset().top,
                _0xdafax6 = _0xdafax3.height(),
                _0xdafax7 = _0xdafax5 + _0xdafax6 + _0xdafax6;
            $(window).scroll(function () {
                var _0xdafax5 = $(document).scrollTop();
                _0xdafax5 < $('#footer-wrapper').offset().top - _0xdafax6 && (_0xdafax5 > _0xdafax7 ? _0xdafax3.addClass('is-fixed') : _0xdafax5 <= 0 && _0xdafax3.removeClass('is-fixed'), _0xdafax5 > _0xdafax4 ? _0xdafax3.removeClass('show') : _0xdafax3.addClass('show'), _0xdafax4 = $(document).scrollTop())
            })
        }
    }), fixedSidebarIfy(), $('#post-body iframe').each(function () {
        var _0xdafax3 = $(this);
        _0xdafax3.attr('src').match('www.youtube.com') && _0xdafax3.wrap('<div class="responsive-video-wrap"/>')
    }), $('p.comment-content').each(function () {
        var _0xdafax3 = $(this);
        _0xdafax3.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'), _0xdafax3.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    }), $('a#templateify').each(function () {
        }, 1e3), $('#seopro-preview-load-more-link').each(function () {
        var _0xdafax3 = $(this).data('load');
        _0xdafax3 && $('#seopro-preview-load-more-link').show(), $('#seopro-preview-load-more-link').on('click', function (_0xdafax4) {
            $('#seopro-preview-load-more-link').hide(), $.ajax({
                url: _0xdafax3,
                success: function (_0xdafax4) {
                    var _0xdafax5 = $(_0xdafax4).find('.blog-posts');
                    _0xdafax5.find('.index-post').addClass('post-animated post-fadeInUp'), $('.blog-posts').append(_0xdafax5.html()), (_0xdafax3 = $(_0xdafax4).find('#seopro-preview-load-more-link').data('load')) ? $('#seopro-preview-load-more-link').show() : ($('#seopro-preview-load-more-link').hide(), $('#blog-pager .no-more').addClass('show'))
                },
                beforeSend: function () {
                    $('#blog-pager .loading').show()
                },
                complete: function () {
                    $('#blog-pager .loading').hide(), fixedSidebarIfy(), $('.index-post .entry-image-wrap .entry-thumb').lazyify()
                }
            }), _0xdafax4.preventDefault()
        })
    }), $('#cookie-ify').each(function () {
        var _0xdafax3 = $(this),
            _0xdafax4 = _0xdafax3.find('.widget.Text').data('shortcode');
        null != _0xdafax4 && (ok = shortCodeIfy(_0xdafax4, 'ok'), days = shortCodeIfy(_0xdafax4, 'days'), 0 != ok && _0xdafax3.find('#cookie-ify-accept').text(ok), 0 != days ? days = Number(days) : days = 7), _0xdafax3.length > 0 && ('1' !== $.cookie('cookie_ify_consent') && (_0xdafax3.css('display', 'block'), setTimeout(function () {
            _0xdafax3.addClass('is-visible')
        }, 10)), $('#cookie-ify-accept').off('click').on('click', function (_0xdafax4) {
            _0xdafax4.preventDefault(), _0xdafax4.stopPropagation(), $.cookie('cookie_ify_consent', '1', {
                expires: days,
                path: '/'
            }), _0xdafax3.removeClass('is-visible'), setTimeout(function () {
                _0xdafax3.css('display', 'none')
            }, 500)
        }))
    }), $('#back-top').each(function () {
        var _0xdafax3 = $(this);
        $(window).on('scroll', function () {
            $(this).scrollTop() >= 100 ? _0xdafax3.fadeIn(170) : _0xdafax3.fadeOut(170), _0xdafax3.offset().top >= $('#footer-wrapper').offset().top - 34 ? _0xdafax3.addClass('on-footer') : _0xdafax3.removeClass('on-footer')
        }), _0xdafax3.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    })
})
//]]>
