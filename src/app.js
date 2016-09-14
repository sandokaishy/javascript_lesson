require('./stylesheets/app.scss')
var $=require('jquery');
var cats = require('./cats.js');
require('./foo/foo.js');

// console.log($);
var $btn=$('#btn');
var $result=$('#result');

$btn.on('click',function() {
$result.append('clicked');
});


