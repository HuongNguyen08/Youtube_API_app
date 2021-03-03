import React from 'react';

class Selectfield extends React.Component {
    state= {
      title:'Late Night with Seth Myers The Daily Show with Trevor Noah The Late Show with Stephen Colbert',
    };  

  onSearchChange = (event) => {
    const _title = event.target.value;
    console.log(_title);

    this.setState({title:_title});
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.title);
    this.props.onSearch(this.state.title);
  };

  handleSort = (event) => {
    console.log(event.target.value)
    this.setState({ title: event.target.value })
  }

render() {
  return (
    <div className="App">
<form className='select-form' onSubmit={this.onSubmit} >    
          <div className='form-controls'>
            <label>Select the shows</label>
            <select id='shows' name='shows' multiple='multiple' onChange={this.handleSort} >
              <option disabled value= ''>Select the shows</option>
              <option value='Late Night with Seth Meyers'>Show 1st: Late Night with Seth Meyers</option>
              <option value='The Daily Show with Trevor Noah'>Show 2nd: The Daily Show with Trevor Noah</option>
              <option value='The Late Show with Stephen Colbert'>Show 3rd:The Late Show with Stephen Colbert</option>
              <option value='Late Night with Seth Meyers The Daily Show with Trevor Noah' >Show 1st & 2rd</option>
              <option value='Late Night with Seth Meyers The Late Show with Stephen Colbert'>Show 1st & 3rd</option>
              <option value='The Daily Show with Trevor Noa The Late Show with Stephen Colbert'>Show 2rd & 3rd</option>
            </select>
            <button 
              value={this.state.title} 
              onChange={this.onSearchChange}>
              Click to display
            </button>
          </div>
        </form>
        </div>
  )
}
}
export default Selectfield;

