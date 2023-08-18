import './App.css';
import { Layout, Tabs} from 'antd';

// Import screens
import AboutScreen from './screen/AboutScreen';
import MyProjects from './screen/MyProjects';
import { UserOutlined, ProjectOutlined } from '@ant-design/icons'; // import icons

import { colors } from './config/colors';

const { Footer, Content } = Layout;
function App() {

  return (
    <Layout className='h-100 w-100' style={{backgroundColor: colors.primary}} >
      <Content className='h-100 w-100 overflow-y-scroll' style={{ padding: '0 50px' , backgroundColor: colors.primary}}>
        <Tabs
            size='large'
            animated
            centered
            tabBarStyle={{ fontSize: '1.5em', fontWeight: 'bold' }} // set styles for the tab bar
        >
          <Tabs.TabPane
            key='1'
            tab={
              <span>
                <UserOutlined />
                ABOUT ME
              </span>
            }
          >
            <AboutScreen />
          </Tabs.TabPane>
          <Tabs.TabPane
            key='2'
            tab={
              <span>
                <ProjectOutlined />
                EXPERIENCES
              </span>
            }
          >
            <MyProjects />
          </Tabs.TabPane>
        </Tabs>
      </Content>
      <Footer style={{ textAlign: 'center', height: '5%', backgroundColor: colors.primary}}>Portfolio ©2023 Created by Kantinun sirintharawet</Footer>
    </Layout>
  );
}

export default App;
