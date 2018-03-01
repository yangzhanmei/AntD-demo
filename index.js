import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';

class App extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary">点击</Button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));