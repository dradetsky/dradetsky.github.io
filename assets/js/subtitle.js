import $ from 'jquery';
import _ from 'lodash';
const subtitle_options = [
    'funrolling the rainbow',
    'to the man(3r) born',
    'how to make install like a porn star',
    'all quiet on us-west-1',
    'for a good time, call-with-current-continuation',
    'a farewell to ARMs',
    'tiers in heaven',
    'putting the "meth" in "programming methodology"',
    'free as in willy',
    'build the -Wall',
    'woke on lan',
    'cat /dev/random | xxd > blogpost.html',
];

document.addEventListener("turbolinks:load", function() {
    var new_subtitle = _.sample(subtitle_options);
    $('#subtitle').text(new_subtitle);
});
