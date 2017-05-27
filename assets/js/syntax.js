// import hljs from 'highlight.js/lib/highlight';
// import python from 'highlight.js/lib/languages/python';
// hljs.registerLanguage('python', python);

// import hljs from 'highlight.js';
// hljs.initHighlightingOnLoad();

// import hljs from 'highlight.js';
import hljs from 'highlight.js/lib/highlight';
// import python from 'highlight.js/lib/languages/python';
// import ruby from 'highlight.js/lib/languages/ruby';

let langs = [
    'scheme',
    'lisp',
    'python',
    'ruby'
];
langs.forEach((name) => {
    const lang_mod = require(`highlight.js/lib/languages/${name}`);
    hljs.registerLanguage(name, lang_mod);
});

// hljs.registerLanguage('python', python);
// hljs.registerLanguage('ruby', ruby);
// hljs.configure({
//     languages: ['python', 'ruby']
// });
// hljs.initHighlightingOnLoad();

import $ from 'jquery';
document.addEventListener("turbolinks:load", function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});



// import hljs2 from 'highlight-loader';
// $(document).ready(function() {
//   $('pre code').each(function(i, block) {
//     hljs.highlightBlock(block);
//   });
// });
