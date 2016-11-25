'use strict';
var Contentstack = require('contentstack');
function initialization() {
    var Stack = Contentstack.Stack('bltef7ae7ae7535633b', 'blt681875b8942ecfbc', 'development');
    return Stack;
}
module.exports = initialization;