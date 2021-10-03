<!-- Theme Scripts -->
<script type='text/javascript'>
//<![CDATA[
function shortCodeIfy(_0x8d1dx3, _0x8d1dx4, _0x8d1dx5) {
    for (var _0x8d1dx6 = _0x8d1dx3.split('$'), _0x8d1dx7 = /[^{\}]+(?=})/g, _0x8d1dx8 = 0; _0x8d1dx8 < _0x8d1dx6.length; _0x8d1dx8++) {
        var _0x8d1dx9 = _0x8d1dx6[_0x8d1dx8].split('=');
        if (_0x8d1dx9[0].trim() == _0x8d1dx4) {
            return null != (_0x8d1dx5 = _0x8d1dx9[1]).match(_0x8d1dx7) && String(_0x8d1dx5.match(_0x8d1dx7)).trim()
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

function getFeedUrl(_0x8d1dx3, _0x8d1dx4, _0x8d1dx5, _0x8d1dx6) {
    switch (_0x8d1dx5) {
    case 'recent':
        _0x8d1dx6 = '/feeds/posts/default?alt=json&max-results=' + _0x8d1dx4;
        break;
    case 'comments':
        _0x8d1dx6 = 'list1' == _0x8d1dx3 ? '/feeds/comments/default?alt=json&max-results=' + _0x8d1dx4 : '/feeds/posts/default/-/' + _0x8d1dx5 + '?alt=json&max-results=' + _0x8d1dx4;
        break;
    default:
        _0x8d1dx6 = '/feeds/posts/default/-/' + _0x8d1dx5 + '?alt=json&max-results=' + _0x8d1dx4
    };
    return _0x8d1dx6
}

function getPostLink(_0x8d1dx3, _0x8d1dx4) {
    for (var _0x8d1dx5 = 0; _0x8d1dx5 < _0x8d1dx3[_0x8d1dx4].link.length; _0x8d1dx5++) {
        if ('alternate' == _0x8d1dx3[_0x8d1dx4].link[_0x8d1dx5].rel) {
            var _0x8d1dx6 = _0x8d1dx3[_0x8d1dx4].link[_0x8d1dx5].href;
            break
        }
    };
    return _0x8d1dx6
}

function getPostTitle(_0x8d1dx3, _0x8d1dx4, _0x8d1dx5) {
    return _0x8d1dx3[_0x8d1dx4].title.$t ? _0x8d1dx3[_0x8d1dx4].title.$t : exportify.noTitle
}

function getFirstImage(_0x8d1dx3, _0x8d1dx4) {
    var _0x8d1dx5 = $('<div>').html(_0x8d1dx3).find('img:first').attr('src'),
        _0x8d1dx6 = _0x8d1dx5.lastIndexOf('/') || 0,
        _0x8d1dx7 = _0x8d1dx5.lastIndexOf('/', _0x8d1dx6 - 1) || 0,
        _0x8d1dx8 = _0x8d1dx5.substring(0, _0x8d1dx7),
        _0x8d1dx9 = _0x8d1dx5.substring(_0x8d1dx7, _0x8d1dx6),
        _0x8d1dx10 = _0x8d1dx5.substring(_0x8d1dx6);
    return (_0x8d1dx9.match(/\/s[0-9]+/g) || _0x8d1dx9.match(/\/w[0-9]+/g) || '/d' == _0x8d1dx9) && (_0x8d1dx9 = '/w72-h72-p-k-no-nu'), _0x8d1dx8 + _0x8d1dx9 + _0x8d1dx10
}

function getPostImage(_0x8d1dx3, _0x8d1dx4, _0x8d1dx5, _0x8d1dx6) {
    var _0x8d1dx7 = _0x8d1dx3[_0x8d1dx4].content.$t;
    return _0x8d1dx5 = _0x8d1dx3[_0x8d1dx4].media$thumbnail ? _0x8d1dx3[_0x8d1dx4].media$thumbnail.url : 'https://resources.blogblog.com/img/blank.gif', _0x8d1dx7.indexOf(_0x8d1dx7.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? _0x8d1dx7.indexOf('<img') > -1 ? _0x8d1dx7.indexOf(_0x8d1dx7.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < _0x8d1dx7.indexOf('<img') ? _0x8d1dx5.replace('/default.', '/maxresdefault.') : getFirstImage(_0x8d1dx7) : _0x8d1dx5.replace('/default.', '/maxresdefault.') : _0x8d1dx7.indexOf('<img') > -1 ? getFirstImage(_0x8d1dx7) : 'https://resources.blogblog.com/img/blank.gif'
}

function getPostImageType(_0x8d1dx3, _0x8d1dx4) {
    return _0x8d1dx3.match('img.youtube.com') ? 'is-video' : 'is-image'
}

function getPostComments(_0x8d1dx3, _0x8d1dx4, _0x8d1dx5, _0x8d1dx6) {
    var _0x8d1dx7 = _0x8d1dx3[_0x8d1dx4].author[0].name.$t,
        _0x8d1dx8 = _0x8d1dx3[_0x8d1dx4].author[0].gd$image.src.replace('/s113', '/w35-h35-p-k-no-nu'),
        _0x8d1dx9 = _0x8d1dx3[_0x8d1dx4].title.$t;
    return (_0x8d1dx8.match('//img1.blogblog.com/img/blank.gif') || _0x8d1dx8.match('//img1.blogblog.com/img/b16-rounded.gif')) && (_0x8d1dx8 = '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w35-h35-p-k-no-nu/avatar.jpg'), '<div class="cmm1-item item-' + _0x8d1dx4 + '"><a class="entry-inner wrap-all-link" href="' + _0x8d1dx5 + '" title="' + _0x8d1dx7 + '"><span class="entry-image-wrap cmm-avatar"><span class="entry-thumb" data-image="' + _0x8d1dx8 + '"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">' + _0x8d1dx7 + '</h2><p class="cmm-snippet excerpt">' + _0x8d1dx9 + '</p></div></a></div>'
}

function getAjax(_0x8d1dx3, _0x8d1dx4, _0x8d1dx5, _0x8d1dx6) {
    switch (_0x8d1dx4) {
    case 'related':
        0 == _0x8d1dx6 && (_0x8d1dx6 = 'geterror404');
        var _0x8d1dx7 = getFeedUrl(_0x8d1dx4, _0x8d1dx5, _0x8d1dx6);
        $.ajax({
            url: _0x8d1dx7,
            type: 'GET',
            dataType: 'json',
            cache: !0,
            beforeSend: function (_0x8d1dx5) {
                switch (_0x8d1dx4) {
                case 'related':
                    _0x8d1dx3.html(beforeLoader()).parent().addClass('show-ify')
                }
            },
            success: function (_0x8d1dx5) {
                var _0x8d1dx6 = '';
                switch (_0x8d1dx4) {
                case 'related':
                    _0x8d1dx6 = '<div class="related-posts">'
                };
                var _0x8d1dx7 = _0x8d1dx5.feed.entry;
                if (null != _0x8d1dx7) {
                    for (var _0x8d1dx8 = 0, _0x8d1dx9 = _0x8d1dx7; _0x8d1dx8 < _0x8d1dx9.length; _0x8d1dx8++) {
                        var _0x8d1dx10 = getPostLink(_0x8d1dx9, _0x8d1dx8),
                            _0x8d1dx15 = getPostTitle(_0x8d1dx9, _0x8d1dx8),
                            _0x8d1dx16 = getPostImage(_0x8d1dx9, _0x8d1dx8),
                            _0x8d1dx17 = getPostImageType(_0x8d1dx16, _0x8d1dx8),
                            _0x8d1dx18 = '';
                        switch (_0x8d1dx4) {
                        case 'related':
                            _0x8d1dx18 += '<div class="related-item post item-' + _0x8d1dx8 + '"><a title="' + _0x8d1dx15 + '" class="entry-image-wrap ' + _0x8d1dx17 + '" href="' + _0x8d1dx10 + '"><span class="entry-thumb" data-image="' + _0x8d1dx16 + '"></span></a><div class="entry-header"><h2 class="entry-title"><a href="' + _0x8d1dx10 + '" title="' + _0x8d1dx15 + '">' + _0x8d1dx15 + '</a></h2></div></div>'
                        };
                        _0x8d1dx6 += _0x8d1dx18
                    }
                } else {
                    _0x8d1dx6 = msgError()
                };
                _0x8d1dx6 += '</div>', _0x8d1dx3.html(_0x8d1dx6), _0x8d1dx3.find('span.entry-thumb').lazyify()
            },
            error: function () {
                _0x8d1dx3.html(msgError())
            }
        })
    }
}

function ajaxRelated(_0x8d1dx3, _0x8d1dx4, _0x8d1dx5, _0x8d1dx6, _0x8d1dx7) {
    if (_0x8d1dx7.match('getrelated')) {
        return getAjax(_0x8d1dx3, _0x8d1dx4, _0x8d1dx5, _0x8d1dx6)
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

function beautiAvatar(_0x8d1dx3) {
    $(_0x8d1dx3).attr('src', function (_0x8d1dx3, _0x8d1dx4) {
        return _0x8d1dx4 = _0x8d1dx4.replace('//resources.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg')
    })
}
$('#seopro-free-main-nav').menuify(), $('#seopro-free-main-nav .widget').addClass('show-menu'), $('.show-search').on('click', function () {
    $('body').addClass('search-active'), $('#main-search-wrap').fadeIn(170).find('input').focus()
}), $('.hide-search').on('click', function () {
    $('body').removeClass('search-active'), $('#main-search-wrap').fadeOut(170).find('input').val('').blur()
}), $('.FollowByEmail .widget-content').each(function (_0x8d1dx3, _0x8d1dx4) {
    var _0x8d1dx5 = $(this),
        _0x8d1dx6 = _0x8d1dx5.data('shortcode');
    null != _0x8d1dx6 && (_0x8d1dx3 = shortCodeIfy(_0x8d1dx6, 'title'), _0x8d1dx4 = shortCodeIfy(_0x8d1dx6, 'text'), 0 != _0x8d1dx3 && _0x8d1dx5.find('.follow-by-email-title').text(_0x8d1dx3), 0 != _0x8d1dx4 && _0x8d1dx5.find('.follow-by-email-text').text(_0x8d1dx4))
}), $('.post-body a').each(function () {
    var _0x8d1dx3 = $(this),
        _0x8d1dx4 = _0x8d1dx3.html(),
        _0x8d1dx5 = _0x8d1dx4.toLowerCase(),
        _0x8d1dx6 = shortCodeIfy(_0x8d1dx4, 'text'),
        _0x8d1dx7 = shortCodeIfy(_0x8d1dx4, 'icon'),
        _0x8d1dx8 = shortCodeIfy(_0x8d1dx4, 'color');
    _0x8d1dx5.match('getbutton') && 0 != _0x8d1dx6 && (_0x8d1dx3.addClass('button btn').text(_0x8d1dx6), 0 != _0x8d1dx7 && _0x8d1dx3.addClass(_0x8d1dx7), 0 != _0x8d1dx8 && _0x8d1dx3.addClass('colored-button').attr('style', 'background-color:' + _0x8d1dx8 + ';'))
}), $('.post-body b').each(function () {
    var _0x8d1dx3 = $(this),
        _0x8d1dx4 = _0x8d1dx3.text().toLowerCase().trim();
    _0x8d1dx4.match('{contactform}') && (_0x8d1dx3.replaceWith('<div class="contact-form"/>'), $('.contact-form').append($('#ContactForm1'))), _0x8d1dx4.match('{leftsidebar}') && _0x8d1dx3.replaceWith('<style>#main-wrapper,.is-left #main-wrapper{float:right}#sidebar-wrapper,.is-left #sidebar-wrapper{float:left}</style>'), _0x8d1dx4.match('{rightsidebar}') && _0x8d1dx3.replaceWith('<style>#main-wrapper,.is-left #main-wrapper{float:left}#sidebar-wrapper,.is-left #sidebar-wrapper{float:right}</style>'), _0x8d1dx4.match('{fullwidth}') && _0x8d1dx3.replaceWith('<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>')
}), $('.post-body blockquote').each(function () {
    var _0x8d1dx3 = $(this),
        _0x8d1dx4 = _0x8d1dx3.text().toLowerCase().trim(),
        _0x8d1dx5 = _0x8d1dx3.html();
    if (_0x8d1dx4.match('{alertsuccess}')) {
        const _0x8d1dx4 = _0x8d1dx5.replace('{alertSuccess}', '');
        _0x8d1dx3.replaceWith('<div class="alert-message alert-success">' + _0x8d1dx4 + '</div>')
    };
    if (_0x8d1dx4.match('{alertinfo}')) {
        const _0x8d1dx4 = _0x8d1dx5.replace('{alertInfo}', '');
        _0x8d1dx3.replaceWith('<div class="alert-message alert-info">' + _0x8d1dx4 + '</div>')
    };
    if (_0x8d1dx4.match('{alertwarning}')) {
        const _0x8d1dx4 = _0x8d1dx5.replace('{alertWarning}', '');
        _0x8d1dx3.replaceWith('<div class="alert-message alert-warning">' + _0x8d1dx4 + '</div>')
    };
    if (_0x8d1dx4.match('{alerterror}')) {
        const _0x8d1dx4 = _0x8d1dx5.replace('{alertError}', '');
        _0x8d1dx3.replaceWith('<div class="alert-message alert-error">' + _0x8d1dx4 + '</div>')
    };
    if (_0x8d1dx4.match('{codebox}')) {
        const _0x8d1dx4 = _0x8d1dx5.replace('{codeBox}', '');
        _0x8d1dx3.replaceWith('<pre class="code-box">' + _0x8d1dx4 + '</pre>')
    }
}), $('.seopro-free-share-links .window-ify').on('click', function () {
    var _0x8d1dx3 = $(this),
        _0x8d1dx4 = _0x8d1dx3.data('url'),
        _0x8d1dx5 = _0x8d1dx3.data('width'),
        _0x8d1dx6 = _0x8d1dx3.data('height'),
        _0x8d1dx7 = window.screen.width,
        _0x8d1dx8 = window.screen.height,
        _0x8d1dx9 = Math.round(_0x8d1dx7 / 2 - _0x8d1dx5 / 2),
        _0x8d1dx10 = Math.round(_0x8d1dx8 / 2 - _0x8d1dx6 / 2);
    window.open(_0x8d1dx4, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + _0x8d1dx5 + ',height=' + _0x8d1dx6 + ',left=' + _0x8d1dx9 + ',top=' + _0x8d1dx10).focus()
}), $('.seopro-free-share-links').each(function () {
    var _0x8d1dx3 = $(this);
    _0x8d1dx3.find('.show-hid a').on('click', function () {
        _0x8d1dx3.toggleClass('show-hidden')
    })
}), $('.about-author .author-text').each(function () {
    var _0x8d1dx3 = $(this),
        _0x8d1dx4 = _0x8d1dx3.find('a');
    _0x8d1dx4.each(function () {
        var _0x8d1dx3 = $(this),
            _0x8d1dx4 = _0x8d1dx3.text().trim(),
            _0x8d1dx5 = _0x8d1dx3.attr('href');
        _0x8d1dx3.replaceWith('<li class="' + _0x8d1dx4 + '"><a href="' + _0x8d1dx5 + '" title="' + _0x8d1dx4 + '" rel="noopener noreferrer" target="_blank"/></li>')
    }), _0x8d1dx4.length && _0x8d1dx3.parent().append('<ul class="author-links social social-color"></ul>'), _0x8d1dx3.find('li').appendTo('.author-links')
}), $('#seopro-free-related-posts .HTML').each(function (_0x8d1dx3, _0x8d1dx4) {
    var _0x8d1dx5 = $(this).data('shortcode');
    if (null != _0x8d1dx5) {
        function _0x8d1dx6() {
            return _0x8d1dx3 = shortCodeIfy(_0x8d1dx5, 'title'), _0x8d1dx4 = shortCodeIfy(_0x8d1dx5, 'results'), [_0x8d1dx3, _0x8d1dx4]
        }
        $('#related-wrap').each(function (_0x8d1dx3, _0x8d1dx4) {
            var _0x8d1dx5 = $(this),
                _0x8d1dx7 = $(window),
                _0x8d1dx8 = _0x8d1dx5.find('.seopro-free-related-content'),
                _0x8d1dx9 = _0x8d1dx6();
            _0x8d1dx3 = 0 != _0x8d1dx9[1] ? _0x8d1dx9[1] : 3, 0 != _0x8d1dx9[0] && _0x8d1dx5.find('.related-title .title').text(_0x8d1dx9[0]), _0x8d1dx4 = _0x8d1dx5.find('.related-tag').data('label'), _0x8d1dx7.on('scroll', function _0x8d1dx5() {
                _0x8d1dx7.scrollTop() + _0x8d1dx7.height() >= _0x8d1dx8.offset().top && (_0x8d1dx7.off('scroll', _0x8d1dx5), ajaxRelated(_0x8d1dx8, 'related', _0x8d1dx3, _0x8d1dx4, 'getrelated'))
            }).trigger('scroll')
        })
    }
}), $('.seopro-free-blog-post-comments').each(function () {
    var _0x8d1dx3 = $(this),
        _0x8d1dx4 = shortCodeIfy(_0x8d1dx3.data('shortcode'), 'type'),
        _0x8d1dx5 = _0x8d1dx3.find('#top-continue .comment-reply');
    switch (_0x8d1dx4) {
    case 'blogger':
        ;
    case 'disqus':
        ;
    case 'facebook':
        _0x8d1dx3.addClass('comments-system-blogger').show(), $('.entry-meta .entry-comments-link').addClass('show'), _0x8d1dx5.addClass('btn'), beautiAvatar('.avatar-image-container img');
        break;
    case 'hide':
        _0x8d1dx3.hide();
        break;
    default:
        _0x8d1dx3.addClass('comments-system-blogger').show(), $('.entry-meta .entry-comments-link').addClass('show'), _0x8d1dx5.addClass('btn'), beautiAvatar('.avatar-image-container img')
    };
    var _0x8d1dx6 = _0x8d1dx3.find('.comments .comment-reply'),
        _0x8d1dx7 = _0x8d1dx3.find('.comments #top-continue'),
        _0x8d1dx8 = _0x8d1dx3.find('#show-comment-form');
    _0x8d1dx6.on('click', function () {
        _0x8d1dx7.show(), _0x8d1dx3.addClass('comment-form-visible'), _0x8d1dx8.remove()
    }), _0x8d1dx7.on('click', function () {
        _0x8d1dx7.hide()
    }), _0x8d1dx8.on('click', function () {
        _0x8d1dx3.addClass('comment-form-visible'), _0x8d1dx8.remove(), fixedSidebarIfy()
    })
}), $(function () {
    $('.index-post .entry-image-wrap .entry-thumb, .PopularPosts .entry-image-wrap .entry-thumb, .FeaturedPost .entry-image-wrap .entry-thumb,.entry-author .author-avatar,.about-author .author-avatar').lazyify(), $('#seopro-free-mobile-menu').each(function () {
        var _0x8d1dx3 = $(this),
            _0x8d1dx4 = $('#seopro-free-main-nav-menu').clone();
        _0x8d1dx4.attr('id', 'main-mobile-nav'), _0x8d1dx4.find('.mega-items').remove(), _0x8d1dx4.find('.mega-menu > a').each(function (_0x8d1dx3, _0x8d1dx4) {
            var _0x8d1dx5 = $(this);
            _0x8d1dx4 = 'recent' == (_0x8d1dx3 = shortCodeIfy(_0x8d1dx5.data('shortcode').trim(), 'label')) ? '/search' : '/search/label/' + _0x8d1dx3, _0x8d1dx5.attr('href', _0x8d1dx4)
        }), _0x8d1dx4.appendTo(_0x8d1dx3), $('.mobile-menu-toggle, .hide-seopro-free-mobile-menu, .overlay').on('click', function () {
            $('body').toggleClass('nav-active')
        }), $('.seopro-free-mobile-menu .has-sub').append('<div class="submenu-toggle"/>'), $('.seopro-free-mobile-menu .mega-menu').find('.submenu-toggle').remove(), $('.seopro-free-mobile-menu ul li .submenu-toggle').on('click', function (_0x8d1dx3) {
            $(this).parent().hasClass('has-sub') && (_0x8d1dx3.preventDefault(), $(this).parent().hasClass('show') ? $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170) : $(this).parent().addClass('show').children('.m-sub').slideToggle(170))
        })
    }), $('.mobile-navbar-social').each(function () {
        var _0x8d1dx3 = $(this);
        $('#seopro-free-about-section ul.social').clone().appendTo(_0x8d1dx3)
    }), $('.mobile-navbar-menu').each(function () {
        var _0x8d1dx3 = $(this);
        $('#footer-menu ul.link-list').clone().appendTo(_0x8d1dx3)
    }), $('.header-inner').each(function () {
        var _0x8d1dx3 = $(this);
        if (1 == fixedMenu && _0x8d1dx3.length > 0) {
            var _0x8d1dx4 = $(document).scrollTop(),
                _0x8d1dx5 = _0x8d1dx3.offset().top,
                _0x8d1dx6 = _0x8d1dx3.height(),
                _0x8d1dx7 = _0x8d1dx5 + _0x8d1dx6 + _0x8d1dx6;
            $(window).scroll(function () {
                var _0x8d1dx5 = $(document).scrollTop();
                _0x8d1dx5 < $('#footer-wrapper').offset().top - _0x8d1dx6 && (_0x8d1dx5 > _0x8d1dx7 ? _0x8d1dx3.addClass('is-fixed') : _0x8d1dx5 <= 0 && _0x8d1dx3.removeClass('is-fixed'), _0x8d1dx5 > _0x8d1dx4 ? _0x8d1dx3.removeClass('show') : _0x8d1dx3.addClass('show'), _0x8d1dx4 = $(document).scrollTop())
            })
        }
    }), fixedSidebarIfy(), $('#post-body iframe').each(function () {
        var _0x8d1dx3 = $(this);
        _0x8d1dx3.attr('src').match('www.youtube.com') && _0x8d1dx3.wrap('<div class="responsive-video-wrap"/>')
    }), $('p.comment-content').each(function () {
        var _0x8d1dx3 = $(this);
        _0x8d1dx3.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'), _0x8d1dx3.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    }), $('a#templateify').each(function () {
        var _0x8d1dx3 = $(this),
            _0x8d1dx4 = 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;color:#ffffff!important;margin:0!important;';
        _0x8d1dx3.attr('href', 'https://www.templateify.com/').text('Blogger Templates').attr('style', 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;color:var(--main-color)!important;margin:0!important;'), _0x8d1dx3.parent().attr('style', _0x8d1dx4).parent().attr('style', _0x8d1dx4)
    }), setInterval(function () {
        $('a#templateify').length || (window.location.href = 'https://www.templateify.com/'), $('a#templateify:visible').length || (window.location.href = 'https://www.templateify.com/')
    }, 1e3), $('#seopro-free-load-more-link').each(function () {
        var _0x8d1dx3 = $(this).data('load');
        _0x8d1dx3 && $('#seopro-free-load-more-link').show(), $('#seopro-free-load-more-link').on('click', function (_0x8d1dx4) {
            $('#seopro-free-load-more-link').hide(), $.ajax({
                url: _0x8d1dx3,
                success: function (_0x8d1dx4) {
                    var _0x8d1dx5 = $(_0x8d1dx4).find('.blog-posts');
                    _0x8d1dx5.find('.index-post').addClass('post-animated post-fadeInUp'), $('.blog-posts').append(_0x8d1dx5.html()), (_0x8d1dx3 = $(_0x8d1dx4).find('#seopro-free-load-more-link').data('load')) ? $('#seopro-free-load-more-link').show() : ($('#seopro-free-load-more-link').hide(), $('#blog-pager .no-more').addClass('show'))
                },
                beforeSend: function () {
                    $('#blog-pager .loading').show()
                },
                complete: function () {
                    $('#blog-pager .loading').hide(), fixedSidebarIfy(), $('.index-post .entry-image-wrap .entry-thumb').lazyify()
                }
            }), _0x8d1dx4.preventDefault()
        })
    }), $('#back-top').each(function () {
        var _0x8d1dx3 = $(this);
        $(window).on('scroll', function () {
            $(this).scrollTop() >= 100 ? _0x8d1dx3.fadeIn(170) : _0x8d1dx3.fadeOut(170), _0x8d1dx3.offset().top >= $('#footer-wrapper').offset().top - 34 ? _0x8d1dx3.addClass('on-footer') : _0x8d1dx3.removeClass('on-footer')
        }), _0x8d1dx3.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    })
})
//]]>
</script>
