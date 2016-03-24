(function(){ window.JST || (window.JST = {}) 
window.JST["book_grid_item"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='\n\n<div id="'+
( book.slug )+
'" class="book card isotope-item ';
 _.each(book.tags, function(tag) { 
;__p+='tag-'+
( tag )+
' ';
 }) 
;__p+=' isotope-hidden no-touch" data-sort="'+
( loop_index )+
'">\n    <a href="#/book/'+
( book.slug )+
'">\n    <div class="book-outer-wrapper" style="pointer-events: none;">\n        <!-- Book Image -->\n       ';
 if (book.teaser) { 
;__p+='\n        <div class="review hover">'+
( book.teaser )+
'<br /><div class="reviewer hover"><span class="reviewer-span">Read <strong>'+
( book.reviewer )+
'\'';
 if (book.reviewer[book.reviewer.length-1] != 's') { 
;__p+='s';
 } 
;__p+='</strong> full recommendation &raquo;</span></div></div>\n        ';
 } 
;__p+='\n      <header>\n        <h2>'+
( book.title )+
'</h2>\n      </header>\n      <article><p>'+
( book.text )+
'</p></article>\n      <!--img src="assets/img/cover-loading.gif" data-src="assets/cover/'+
( book.slug )+
'.jpg" alt="'+
( book.title
    )+
'"/-->\n    </div>\n    </a>\n</div>\n                    \n';
}
return __p;
};

window.JST["book_list_item"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='\n<li class="visible ';
 _.each(book.tags, function(tag) { 
;__p+='tag-'+
( tag )+
' ';
 }) 
;__p+=' '+
( book.slug )+
'" data-sort="'+
( loop_index )+
'" data-slug="'+
( book.slug )+
'">\n    <a href="#/book/'+
(  book.slug )+
'">\n        <span class="title">'+
( book.title )+
'</span><br />\n        <span class="author">by&nbsp;'+
( book.author )+
'</span>\n    </a><br />\n</li>';
}
return __p;
};

window.JST["book_modal"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="modal-header hide">\n    <!-- <a class="hide npr-logo" href="http://npr.org/books/"><img src="http://media.npr.org/chrome/books/npr-books-logo-color.png" alt="NPR Books" /></a> -->\n    <a href="#" class="hide mobile-dismiss" data-dismiss="modal" aria-hidden="true"><i class="icon-left-open"></i> Back to NPR&rsquo;s Book Concierge</a>\n    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n</div>\n<div class="modal-body-wrapper">\n    <a class="paddle" href="#/book/'+
( previous )+
'" id="previous-book">\n        ';
 if (previous != null){  
;__p+='\n        <span class="icon-left-open"></span>\n        ';
 } 
;__p+='\n    </a>\n    <div class="modal-body-inner">\n        <div class="modal-body clearfix">\n            <div class="modal-book-cover">\n                <img id="book-image" src="assets/cover/'+
( book.slug )+
'.jpg" alt="'+
( book.title )+
'"/>\n            </div>\n\n            <div class="modal-text">\n                <h4 class="modal-title" id="myModalLabel">'+
( book.title )+
'</h4>\n                ';
 if(book.author) { 
;__p+='<p class="author">By '+
( book.author )+
'</p> ';
 } 
;__p+='\n                ';
 if(book.genre) { 
;__p+='<p class="genre"><strong>'+
( COPY.content.genre )+
' </strong>'+
( book.genre )+
'</p> ';
 } 
;__p+='\n\n                <!-- Tags -->\n                ';
 if(book.tags.length > 0) { 
;__p+='<p class="tags">';
 _.each(book.tags, function(tag, index, list){ 
;__p+='\n                    <a\n                        class="btn btn-large btn-info tag '+
( tag )+
'"\n                        href="#/tag/'+
( tag )+
'">'+
( COPY.tags[tag] )+
'\n                    </a>\n                ';
 }); 
;__p+='</p> ';
 } 
;__p+='\n\n                <!-- Book Description/Review -->\n                ';
 if (book.text && !book.html_text) { 
;__p+='<p class="text">'+
( book.text )+
'</p> \n                ';
 } else if (book.text && book.html_text) { 
;__p+=''+
( book.text )+
'\n                ';
 } 
;__p+='\n                ';
 if(book.reviewer) { 
;__p+='<p class="reviewer">&mdash; '+
( COPY.content.recommended_by )+
' <strong>';
 if (book['reviewer_link']) { 
;__p+='<a href="'+
( book['reviewer_link'] )+
'" target="_blank">'+
( book.reviewer )+
'</a>';
 } else { 
;__p+=''+
( book.reviewer )+
'';
 } 
;__p+='</strong>';
 if (book['reviewer_id']) { 
;__p+=', '+
( book['reviewer_id'] )+
'';
 } 
;__p+='</p> ';
 } 
;__p+='\n\n                <!-- Purchase/Related Links -->\n\n                <p class="book-modal-links">\n                    ';
 if (book.oclc) { 
;__p+='\n                    <!--a href="http://www.worldcat.org/oclc/'+
( book.oclc )+
'" target="_blank" class="purchase-link" onclick="ANALYTICS.trackEvent(\'library\', \''+
( book.slug )+
'\');"><i class="icon icon-bank"></i>Find at your library</a>\n                    ';
 } 
;__p+='\n                    <a href="http://www.amazon.com/dp/'+
( book.isbn )+
'?tag=npr-5-20" target="_blank" class="purchase-link shopping-cart" onclick="ANALYTICS.trackEvent(\'amazon\', \''+
( book.slug )+
'\');">Amazon</a>\n                    ';
 if (book.hide_ibooks != 'TRUE') { 
;__p+='\n                    <a href="https://itunes.apple.com/us/book/isbn'+
( book.isbn13 )+
'?&at=11l79Y" target="_blank" class="purchase-link shopping-cart" onclick="ANALYTICS.trackEvent(\'ibooks\', \''+
( book.slug )+
'\');">iBooks</a>\n                    ';
 } 
;__p+='\n                    <a href="http://www.indiebound.org/book/'+
( book.isbn13 )+
'?aff=NPR" target="_blank" class="purchase-link shopping-cart" onclick="ANALYTICS.trackEvent(\'indiebound\', \''+
( book.slug )+
'\');">Independent&nbsp;Booksellers</a>\n                </p-->\n\n                ';
 if (book.links) { 
;__p+='\n                <ul>\n                    ';
 _.each(book.links, function(link) { 
;__p+='\n                    <li class="book-modal-links">\n                        <a href="'+
( link.url )+
'" target="_blank">\n                            <strong>\n                            ';
 if (link.category) { 
;__p+=''+
( link.category )+
'';
 if (link.title) { 
;__p+=':';
 } 
;__p+='';
 } else { 
;__p+='Feature:';
 } 
;__p+='\n                            </strong>\n                            '+
( link.title )+
'\n                        </a>\n                    </li>\n                    ';
 }) 
;__p+='\n                </ul>\n                ';
 } 
;__p+='\n            </div>\n        </div>\n\n        <div class="modal-footer">\n            <div class="social">\n                <p>Share Review:</p>\n                <a href="mailto:?body='+
( encodeURIComponent(APP_CONFIG.S3_BASE_URL + "#/book/" + book.slug + '\n\n"' + book.text.replace(/(<([^>]+)>)/ig,"") + '"\n\n--' + book.reviewer + ', ' + book.reviewer_id.replace(/(<([^>]+)>)/ig,"")) )+
'&amp;subject='+
( encodeURIComponent("NPR's best books of 2014 - " + book.title) )+
'" onclick="_gaq.push([\'_trackEvent\', \''+
( APP_CONFIG.PROJECT_SLUG )+
'\', \'email\', \''+
( book.slug )+
'\']);">\n                    <div class="share-button">\n                        <span class="icon icon-mail"></span>\n                    </div>\n                </a>\n\n                <a href="https://twitter.com/share?text='+
( encodeURIComponent('Look what I found on @NPRBooks\' #bookconcierge: ' + book.title) )+
'&amp;url='+
( encodeURIComponent(APP_CONFIG.S3_BASE_URL + "/share/" + book.slug + ".html") )+
'" target="_blank" onclick="_gaq.push([\'_trackEvent\', \''+
( APP_CONFIG.PROJECT_SLUG )+
'\', \'twitter\', \''+
( book.slug )+
'\']);">\n                    <div class="share-button">\n                        <span class="icon icon-twitter"></span>\n                    </div>\n                </a>\n                <a href="https://www.facebook.com/dialog/feed?app_id='+
( COPY.share.facebook_app_id )+
'&amp;link='+
( encodeURIComponent(APP_CONFIG.S3_BASE_URL + "/share/" + book.slug + ".html") )+
'&amp;redirect_uri='+
( encodeURIComponent(APP_CONFIG.S3_BASE_URL + "#book/" + book.slug) )+
'" target="_blank" onclick="_gaq.push([\'_trackEvent\', \''+
( APP_CONFIG.PROJECT_SLUG )+
'\', \'facebook\', \''+
( book.slug )+
'\']);">\n                    <div class="share-button">\n                        <span class="icon icon-facebook"></span>\n                    </div>\n                </a>\n                <a href="https://pinterest.com/pin/create/button/?url='+
( encodeURIComponent(APP_CONFIG.S3_BASE_URL + "/share/" + book.slug + ".html") )+
'&amp;media='+
( encodeURIComponent(APP_CONFIG.S3_BASE_URL + "/assets/cover/" + book.slug + ".jpg") )+
'" target="_blank" onclick="_gaq.push([\'_trackEvent\', \''+
( APP_CONFIG.PROJECT_SLUG )+
'\', \'pinterest\', \''+
( book.slug )+
'\']);">\n                    <div class="share-button">\n                    <span class="icon icon-pinterest-circled"></span>\n                    </div>\n                </a>\n            </div>\n            <div class="hide book-nav">\n                ';
 if (previous != null){ 
;__p+='\n                <a href="#/book/'+
( previous )+
'" class="btn btn-default modal-nav-buttons" id="previous-book">PREVIOUS BOOK</a>\n                ';
 } 
;__p+='\n                ';
 if (next != null){ 
;__p+='\n                <a href="#/book/'+
( next )+
'" class="btn btn-default modal-nav-buttons" id="next-book">NEXT BOOK</a>\n                ';
 } 
;__p+='\n            </div>\n            <button type="button" class="btn btn-default" id="modal-close-btn" data-dismiss="modal">&times; <em>Close</em></button>\n        </div>\n    </div>\n\n    <a class="paddle" href="#/book/'+
( next )+
'" id="next-book">\n        ';
 if (next != null){  
;__p+='\n        <span class="icon-right-open"></span>\n        ';
 } 
;__p+='\n    </a>\n</div>\n\n\n';
}
return __p;
};

window.JST["example"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<p>This project is is running with the following settings:</p>\n\n<pre>\n'+
( config )+
'    \n</pre>\n\n<p>This project has the following COPY configured:</p>\n\n<pre>\n'+
( copy )+
'\n</pre>\n\n<p>This text is rendered from a template found at <code>'+
( template_path )+
'</code>.</p>\n';
}
return __p;
};

})();