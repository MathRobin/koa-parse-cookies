/*globals module */

function *parseCookies(next) {
    'use strict';

    const
        that            = this,
        cookies = this.request.header.cookie;
    let
        cookiesSplitted = [];

    if('string' === typeof cookies) {
        cookiesSplitted = cookies.split('; ');
    }

    this.cookiesSent = {};

    if (undefined !== cookies) {
        cookiesSplitted.forEach(function (cookie) {
            const
                cookieTmp = cookie.split('=');
            that.cookiesSent[cookieTmp[0]] = cookieTmp[1];
        });
    }
    yield next;
}

module.exports = parseCookies;
