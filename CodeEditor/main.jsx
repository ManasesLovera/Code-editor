//ty
class CodeEditor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }
    render(){
        return (
        <div className="container">
            <textarea onChange={this.handleChange} name="code" className="code" id="code"></textarea>
            <iframe className="result" id="result" srcDoc={this.state.value}></iframe>
        </div>
    )}
}
ReactDOM.render(<CodeEditor />,document.getElementById('root'))