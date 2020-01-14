import React from "react"

class PizzaForm extends React.Component{
  render() {
    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping" onChange={this.props.handleToppingChange} value={this.props.topping}/>
          </div>
          <div className="col">
            <select value={this.props.size} onChange={this.props.handleSizeChange}className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={this.props.handleVegChange} value={this.props.veg} checked={this.props.veg === true}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={this.props.handleVegChange} value={this.props.veg} checked={this.props.veg === false}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={()=>this.props.handleSubmit(this.props)}>Submit</button>
          </div>
        </div>
  
    )
  }
}

export default PizzaForm
