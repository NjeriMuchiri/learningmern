'use strict';

var ContentNode = document.getElementById('contents');
var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var message = continents.map(function (c) {
           return 'Hello ' + c + '!';
}).join(' ');
var component = React.createElement(
           'p',
           { className: 'header' },
           message
);
ReactDOM.render(component, ContentNode);