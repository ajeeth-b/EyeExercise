var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Alphanumeric from './Alphanumeric.js';

var EyeChart = function (_React$Component) {
    _inherits(EyeChart, _React$Component);

    function EyeChart(props) {
        _classCallCheck(this, EyeChart);

        return _possibleConstructorReturn(this, (EyeChart.__proto__ || Object.getPrototypeOf(EyeChart)).call(this, props));
    }

    _createClass(EyeChart, [{
        key: 'generate_row',
        value: function generate_row(count, size) {
            var addition_classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

            var row = [];
            var className = 'col' + addition_classes;
            for (var i = 0; i < count; i++) {
                row.push(React.createElement(
                    'div',
                    { key: i.toString(), className: className },
                    React.createElement(Alphanumeric, { size: size })
                ));
            }
            return row;
        }
    }, {
        key: 'render',
        value: function render() {
            var row1 = React.createElement(
                'div',
                { className: 'row align-items-center' },
                this.generate_row(5, 100, ' fw-bold')
            );
            var row2 = React.createElement(
                'div',
                { className: 'row align-items-center' },
                this.generate_row(8, 80, ' fw-bold')
            );
            var row3 = React.createElement(
                'div',
                { className: 'row align-items-center' },
                this.generate_row(10, 60)
            );
            var row4 = React.createElement(
                'div',
                { className: 'row align-items-center' },
                this.generate_row(14, 40)
            );
            var row5 = React.createElement(
                'div',
                { className: 'row align-items-center' },
                this.generate_row(16, 20, ' fw-bold')
            );
            var row6 = React.createElement(
                'div',
                { className: 'row align-items-center' },
                this.generate_row(17, 20)
            );
            var row7 = React.createElement(
                'div',
                { className: 'row align-items-center' },
                this.generate_row(20, 10)
            );
            return React.createElement(
                'div',
                { className: 'container' },
                row1,
                row2,
                row3,
                row4,
                row5,
                row6,
                row7
            );
        }
    }]);

    return EyeChart;
}(React.Component);

export default EyeChart;