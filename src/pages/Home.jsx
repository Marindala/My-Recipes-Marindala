import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import Banner from "../assets/Background/Fondo3.jpg";
import "../styles/Home.css";



export const Home = () => {
  
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1 className="titleAnimation">Mis Recetas Favoritas</h1>
          <Slide
            direction="up"
            in={true}
            timeout={1000}
            mountOnEnter
            unmountOnExit
          >
            <Typography variant="h3" sx={{ color: "orange" }}
            className="center-mobile"
            >
              Marindala Cooking
            </Typography>
          </Slide>
          {/*  <p>Marindala Cooking</p> */}
          <Link to="/menu">
            <button>Ingresar</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
