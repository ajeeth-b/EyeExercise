import Alphanumeric from './Alphanumeric.js'

class EyeChart extends React.Component {
    constructor(props) {
        super(props);
    }

    generate_row(count, size, addition_classes = "") {
        let row = [];
        let className = 'col' + addition_classes;
        for (let i = 0; i < count; i++) {
            row.push(
                <div key={i.toString()} className={className}>
                    <Alphanumeric size={size} />
                </div>
            )
        }
        return row;
    }

    render() {
        let row1 = <div className="row align-items-center">{this.generate_row(5, 100, ' fw-bold')}</div>
        let row2 = <div className="row align-items-center">{this.generate_row(8, 80, ' fw-bold')}</div>
        let row3 = <div className="row align-items-center">{this.generate_row(10, 60)}</div>
        let row4 = <div className="row align-items-center">{this.generate_row(14, 40)}</div>
        let row5 = <div className="row align-items-center">{this.generate_row(16, 20, ' fw-bold')}</div>
        let row6 = <div className="row align-items-center">{this.generate_row(17, 20)}</div>
        let row7 = <div className="row align-items-center">{this.generate_row(20, 10)}</div>
        return (
            <div className="container">
                {row1}
                {row2}
                {row3}
                {row4}
                {row5}
                {row6}
                {row7}
            </div>
        );
    }
}

export default EyeChart;