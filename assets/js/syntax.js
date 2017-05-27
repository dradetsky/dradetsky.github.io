import hljs from 'highlight.js/lib/highlight';
let langs = [
    'scheme',
    'python',
    'ruby',
];
langs.forEach((name) => {
    const lang_mod = require(`highlight.js/lib/languages/${name}`);
    hljs.registerLanguage(name, lang_mod);
});

import $ from 'jquery';
document.addEventListener("turbolinks:load", function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
