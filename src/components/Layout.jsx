
import {Footer} from "./Footer.jsx";
import Header from "./Header.jsx";


 export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;