import "./App.css";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/Main";

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
            <Navigation>
                <Link to ="/Aboutme">Aboutme</Link>  
                <Link to ="/Resume">Resume</Link>  
                <Link to ="/Projects">Projects</Link>  
                <Link to ="/Contact">Contact</Link>  
            </Navigation>
        </Header>
        <Drawer title="">
            <Navigation>
            <Link to ="/Aboutme">Aboutme</Link>  
                <Link to ="/Resume">Resume</Link>  
                <Link to ="/Projects">Projects</Link>  
                <Link to ="/Contact">Contact</Link>  
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
