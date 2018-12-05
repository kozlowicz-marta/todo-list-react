import React, {
    Component
} from 'react';
import ToDoList from './components/ToDoList';

class App extends Component {
    render() {
        return (
          <React.Fragment >
            <ToDoList/>
            </React.Fragment>
        )
    }
}

export default App;
