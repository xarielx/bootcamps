import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBLDG';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filterText: '',
      selectedBuilding: 0
    }
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      data: this.props.data
    })
  }

  filterUpdate = (event) => {
    this.setState({ ...this.state, filterText: event.target.value });
  }

  selectedUpdate = (id) => {
    this.setState({ ...this.state, selectedBuilding: id });
  }

  removeBLDG = (id) => {
    let newData = this.state.data.filter(d => d.id !== id)
    this.setState({
      ...this.state,
      data: newData,
      selectedBuilding: 0
    })
  }

  addBLDG = (thisCode, thisName) => {
    let newBuilding = {
      id: this.state.data.length + 1,
      code: thisCode,
      name: thisName
    }
    if (thisCode && thisName) {
      this.setState({
        ...this.state,
        data: this.state.data.concat([newBuilding])
      })
    }
  }

  render() {
    const util = require('util')
    console.log(util.inspect(this.state.data, { maxArrayLength: null }))
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <div className="BLDGadd"><AddBuilding addBLDG={this.addBLDG} /></div>
        <Search filterText={this.state.filterText} filterUpdate={this.filterUpdate} />
        <main>
          <div className="row">
            <div className="leftCol">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Building</b>
                    </td>
                  </tr>
                  <BuildingList data={this.state.data} filterText={this.state.filterText} selectedUpdate={this.selectedUpdate} removeBLDG={this.removeBLDG} />
                </table>
              </div>
            </div>
            <div className="rightCol">
              <ViewBuilding data={this.state.data} selectedBuilding={this.state.selectedBuilding} />
              <img claaName="gator" src="gators.png" alt="Smiley face" />
            </div>
          </div>
          <Credit />
        </main>
      </div >
    );
  }
}

export default App;