// ==UserScript==
// @name        Hacker News Open Article + Comments
// @namespace   http://ericwood.org/
// @version     0.1
// @description Adds a link next to the comments ("a+c") which opens the article and comments in a new tab for easy reading!
// @match       http://news.ycombinator.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js
// @copyright   2012+, Eric Wood
// ==/UserScript==

$.each($('td.subtext'), function(i,e) {
  var subtext = $(e);
  var title = subtext.parent().prev().find('td.title a');
  var comments = $(subtext.find('a')[1]);
  var link = $('<a>a+c</a>');
  link.css('cursor', 'pointer');
  link.click(function(event) {
    GM_openInTab('http://news.ycombinator.com/' + comments.attr('href'));
    GM_openInTab(title.attr('href'));
  });
  subtext.append(' | ');
  subtext.append(link);
});
