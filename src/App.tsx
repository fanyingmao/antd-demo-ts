import * as React from 'react';
import './App.css';
import { Button, Menu, Dropdown, Icon } from 'antd';

class App extends React.Component {
    render() {
        function handleMenuClick(e:any) {
            console.log('click', e);
        }

        const menu = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );

        return (
            <div className="App">
                <Button type="primary">primary</Button>
                <Button>secondary</Button>
                <Dropdown overlay={menu}>
                    <Button>
                        Actions <Icon type="down" />
                    </Button>
                </Dropdown>
            </div>
        );
    }
}

export default App;
