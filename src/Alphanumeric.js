class Alphanumeric extends React.Component {
    constructor(props) {
        super(props);
        this.alnum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        this.alnum = this.alnum[Math.floor(Math.random() * this.alnum.length)];
    }

    render() {
        return (
            <div style={{ fontSize: this.props.size + 'px', textAlign: 'center' }}>
                {this.alnum}
            </div>
        );
    }
}

export default Alphanumeric;