(()=>{function r(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function i(n,e,o){for(let t of n.childNodes){if(!(t instanceof Text)){i(t,e,o);continue}!t.textContent||!e.test(t.textContent)||t.replaceWith(t.textContent?.replace(e,o))}}function l(n,e,o){let t=document.querySelectorAll(n),c=e.startsWith("/")&&e.endsWith("/")?new RegExp(e.slice(1,-1)):new RegExp(r(e));for(let s of t)i(s,c,o)}window.localBehatSnapshots={replaceText:l};})();