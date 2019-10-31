import React from 'react';
import Button from 'react-bootstrap/Button';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            name: ''
        }
    }
    codeUpdate = (event) => {
        this.setState({ ...this.state, code: event.target.value });
    }

    nameUpdate = (event) => {
        this.setState({ ...this.state, name: event.target.value });
    }

    add = () => {
        this.props.addBLDG(this.state.code, this.state.name)
        this.setState({
            code: '',
            name: ''
        })
    }

    render() {
        return (
            <div style={{ margin: '10px' }}>
                <h4 style={{ marginLeft: '10px' }}>Add Building</h4>
                <form >
                    <input style={{ margin: '2.5px', marginLeft: '10px', height: '30px' }} type='text' placeholder='Code' value={this.state.code} onChange={this.codeUpdate} />
                    <input style={{ margin: '2.5px', marginLeft: '10px', height: '30px' }} type='text' placeholder='Name' value={this.state.name} onChange={this.nameUpdate} />
                </form>
                <Button style={{ marginLeft: '15px' }} variant='primary' onClick={this.add} className="addName">Add</Button>
            </div>
        )
    }
}

export default AddBuilding;