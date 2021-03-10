import{ Component } from 'react'

export default class ListItem extends Component {
  render() {
    return(
        <div>
            <li>{this.props.task}</li>
            <button onClick={this.props.handleDeleteTask}>del</button>
        </div>
    )
  }
}