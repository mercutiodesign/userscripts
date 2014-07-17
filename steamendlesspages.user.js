// ==UserScript==
// @name       SteamEndlessPages
// @namespace  SteamEndlessPages
// @version    0.1
// @match      http://steamcommunity.com/market/search*
// ==/UserScript==

var $ = $J;
var count = 0;

function changeId(elem) {
	elem.attr('id', elem.attr('id')+count);
}

$('#searchResults_controls > .pagebtn, #searchResults_controls .market_paging_pagelink').click(function() {
    count++;
    var clone = $('#searchResultsTable').clone().addClass('previousSearchResults');
    changeId(clone);
    changeId(clone.find('#searchResultsRows'));
    changeId(clone.find('#searchResults_links'));
    changeId(clone.find('#searchResults_controls'));
    $('#searchResultsTable').before(clone);
});

