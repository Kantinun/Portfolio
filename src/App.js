import './App.css';
import { Layout, Tabs} from 'antd';

// Import screens
import AboutScreen from './screen/AboutScreen';
import MyProjects from './screen/MyProjects';

import { colors } from './config/colors';

const { Footer, Content } = Layout;
function App() {

  return (
    <Layout className="layout" style={{display:'flex', height: '100%', backgroundColor: colors.primary, overflow: false}} >
      <Content style={{ padding: '0 50px' , backgroundColor: colors.primary}}>
        <Tabs
        animated
        centered
        items={[
          {
            label: "About Me",
            key: 1,
            children: <AboutScreen/>,
          },
          {
            label: "Projects",
            key: 2,
            children: <MyProjects/>,
          },
        ]}
      />
      </Content>
      <Footer style={{ textAlign: 'center', height: '5%', backgroundColor: colors.primary}}>Portfolio ©2023 Created by Kantinun sirintharawet</Footer>
    </Layout>
  );
}

export default App;
