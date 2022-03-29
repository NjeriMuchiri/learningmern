var ContentNode = document.getElementById('contents');
var component = React.createElement(
            "h1",
            { className: "header" },
            "Hello World!"
);
ReactDOM.render(component, ContentNode);