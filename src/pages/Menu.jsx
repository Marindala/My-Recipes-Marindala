
import  MenuList  from "../data/data.js";
import Layout from "../components/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu, index) => (
          <Card key={index} sx={{ maxWidth: "390px", display: "flex", m: 2 }}> {/* m:2 */}
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }} 
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">Ingredientes:{menu.Ingredients}</Typography>
                <Typography variant="body2">Preparación:{menu.description}</Typography>
                <Typography variant="h6">Compartido por 🌱:{menu.author}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;