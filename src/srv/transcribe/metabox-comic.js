!function(){"use strict";!function t(){if("loading"===document.readyState)return document.addEventListener("DOMContentLoaded",t);function e(t){for(var e=t.target;e&&e.tagName&&!e.hasAttribute("data-webcomic-search");)e=e.parentNode;return e&&e.tagName&&e.hasAttribute("data-webcomic-search")?e:{}}document.addEventListener("click",function(t){if("img"!==t.target.tagName.toLowerCase())return;var a=t.target;for(;a.tagName&&!a.hasAttribute("data-id");)a=a.parentNode;if(a&&a.tagName&&a.hasAttribute("data-id"))return;var r=e(t);if(!r)return;!function(t,e){if(e.classList.contains("contain"))return e.querySelector("p").style.display=null,e.classList.remove("contain"),void(e.style.height="auto");var a=Number(t.target.getAttribute("width")),r=Number(t.target.getAttribute("height")),n=r/2*(a/r);e.querySelector("p").style.display="none",e.classList.add("contain"),e.style.height="".concat(n,"px")}(t,r)}),document.addEventListener("click",function(t){var a=t.target;for(;a&&a.tagName&&!a.hasAttribute("data-id");)a=a.parentNode;if(!a||!a.tagName||!a.hasAttribute("data-id"))return;var r=e(t);if(!r)return;var n=new FormData,i=new XMLHttpRequest;n.append("action","webcomic_transcript_comic_search"),n.append("post",a.getAttribute("data-id")),i.onreadystatechange=function(){if(4===i.readyState){var t=document.createElement("p"),e="";"true"===i.responseText&&(e=" checked"),t.innerHTML='\n\t\t\t\t<label class="selectit">\n\t\t\t\t\t<input type="hidden" name="webcomic_transcribe">\n\t\t\t\t\t<input type="checkbox" name="webcomic_transcribe" value="1"'.concat(e,">\n\t\t\t\t\t").concat(webcomicTranscriptL10n.allow,"\n\t\t\t\t</label>\n\t\t\t"),r.parentNode.insertBefore(t,r)}},i.open("POST",ajaxurl),i.send(n)}),document.addEventListener("click",function(t){if("a"!==t.target.tagName.toLowerCase())return;var a=e(t);if(!a||!a.parentNode||!a.parentNode.querySelector("p"))return;a.parentNode.querySelector("p").parentNode.removeChild(a.parentNode.querySelector("p")),a.classList.remove("contain"),a.style.height="auto"})}()}();
