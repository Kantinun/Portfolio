import './App.css';
import { Layout, Menu, Carousel } from 'antd';
import { useRef, useState } from 'react';
// Import screens
import AboutScreen from './screen/AboutScreen';
import { colors } from './config/colors';

const { Header, Footer, Content } = Layout;
function App() {
  const [page_index, setPageIndex] = useState(1)
  const carouselRef = useRef()

  return (
    <Layout className="layout" style={{display:'flex', flex:1, backgroundColor: colors.primary}} >
      <Header style={{backgroundColor: colors.primary}}>
        <div className="logo" />
        <Menu
          testID='header'
          style={{backgroundColor: '#FFF7E6'}}
          // theme="dark"
          mode="horizontal"
          defaultSelectedKeys={page_index}
          onSelect={(index) => {
              setPageIndex(index)
              carouselRef.current.goTo(index.key.split('-')[1])
            }
          }
          items={['About Me', 'My Project'].map((item, index) => {
            return {
              index,
              label: item,
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' , backgroundColor: colors.primary}}>
          <Carousel
            // dots={false}
            draggable
            ref={carouselRef}
            defaultActiveIndex={2}
          >
            <div key={1} style={{height: '100vh', width: '100vh'}}>
              <AboutScreen/>
            </div>
            <div key={2}>
              <h3 style={{height: '160px', backgroundColor: 'red'}}>3</h3>
            </div>
        </Carousel>
      </Content>
      <Footer style={{ textAlign: 'center', height: '5%', backgroundColor: colors.primary}}>Portfolio ©2023 Created by Kantinun sirintharawet</Footer>
    </Layout>
  );
}

export default App;
