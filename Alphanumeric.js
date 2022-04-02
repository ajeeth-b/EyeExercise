var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alphanumeric = function (_React$Component) {
    _inherits(Alphanumeric, _React$Component);

    function Alphanumeric(props) {
        _classCallCheck(this, Alphanumeric);

        var _this = _possibleConstructorReturn(this, (Alphanumeric.__proto__ || Object.getPrototypeOf(Alphanumeric)).call(this, props));

        _this.alnum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        _this.alnum = _this.alnum[Math.floor(Math.random() * _this.alnum.length)];
        return _this;
    }

    _createClass(Alphanumeric, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: { fontSize: this.props.size + 'px', textAlign: 'center' } },
                this.alnum
            );
        }
    }]);

    return Alphanumeric;
}(React.Component);

export default Alphanumeric;