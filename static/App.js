'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var issues = [{
    id: 1, status: 'Open', owner: 'Ravan',
    created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
    title: 'Error in console when clicking Add'
}, {
    id: 2, status: 'Assigned', owner: 'Eddie',
    created: new Date('2016=08-16'), effort: 14, completionDate: new Date('2016-08-30'),
    title: 'Missing bottom border on panel'
}];

var IssueTable = function (_React$Component) {
    _inherits(IssueTable, _React$Component);

    function IssueTable() {
        _classCallCheck(this, IssueTable);

        return _possibleConstructorReturn(this, (IssueTable.__proto__ || Object.getPrototypeOf(IssueTable)).apply(this, arguments));
    }

    _createClass(IssueTable, [{
        key: 'render',
        value: function render() {
            var borderedStyle = { border: "1px solid silver", padding: 6 };
            return React.createElement(
                'table',
                { style: { borderCollapse: "collapse" } },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            { style: borderedStyle },
                            'Id'
                        ),
                        React.createElement(
                            'th',
                            { style: borderedStyle },
                            'Title'
                        )
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    React.createElement(
                        IssueRow,
                        { issue_id: 1 },
                        'Error in console when clicking Add'
                    ),
                    React.createElement(
                        IssueRow,
                        { issue_id: 2 },
                        'Missing bottom ',
                        React.createElement(
                            'b',
                            null,
                            'border'
                        ),
                        ' on panel'
                    )
                )
            );
        }
    }]);

    return IssueTable;
}(React.Component);

var IssueRow = function (_React$Component2) {
    _inherits(IssueRow, _React$Component2);

    function IssueRow() {
        _classCallCheck(this, IssueRow);

        return _possibleConstructorReturn(this, (IssueRow.__proto__ || Object.getPrototypeOf(IssueRow)).apply(this, arguments));
    }

    _createClass(IssueRow, [{
        key: 'render',
        value: function render() {
            var borderedStyle = { border: "1px solid silver", padding: 4 };
            return React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    { style: borderedStyle },
                    this.props.children
                ),
                React.createElement(
                    'td',
                    { style: borderedStyle },
                    this.props.children
                )
            );
        }
    }]);

    return IssueRow;
}(React.Component);

var IssueList = function (_React$Component3) {
    _inherits(IssueList, _React$Component3);

    function IssueList() {
        _classCallCheck(this, IssueList);

        return _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).apply(this, arguments));
    }

    _createClass(IssueList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Issue Tracker'
                ),
                React.createElement('hr', null),
                React.createElement(IssueTable, { issues: issues }),
                React.createElement('hr', null),
                React.createElement(IssueRow, null),
                React.createElement('hr', null),
                React.createElement(
                    'h1',
                    null,
                    'This is a placeholder for an issue Add Entry form'
                )
            );
        }
    }]);

    return IssueList;
}(React.Component);

ReactDOM.render(React.createElement(IssueList, null), contentNode);