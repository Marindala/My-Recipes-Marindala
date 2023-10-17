import PanqGarbanzos from "../assets/imageFood/PanqGarbanzos.jpg";
import HamLent from "../assets/imageFood/Lentejas.jpg";
import Alga from "../assets/imageFood/LentejasAlg.jpg";
import HamburArroz from "../assets/imageFood/HamburLentejas.jpg";
//import Paneer from "../images/paneer.jpg";
//import Gujrati from "../images/gujrati.jpeg"; 

export const MenuList = [
  {
    name: "Panqueques de Garbanzo",
    Ingredients:"",
    description:
      "Harina de Garbanzo, agua, sal y condimentos",
    image: PanqGarbanzos,
     author: "Marina López", 
  },
  {
    name: "Hamburgesas de Lentejas",
    description:
      "Cebolla de verdeo, ajo, lentejas cocidas, caldito de verdura, morrón, harina de arepas para unir",
    image: HamLent,
    author: "Marina López", 
  },
  {
    name: "Budín de Algarroba y Lentejas",
    description:
      "Lentejas, harina de algarroba, azucár mascabo, aceite, polvo de hornear",
    image: Alga,
    author: "Marina López", 
  },
   {
    name: "Hamburguesas de Arroz y Acelga ",
    description:
    
      "Hervir la acelga y picarla, unir al arroz previamente hervido y adicionar el huevo, los condimentos y la mitad del pan rallado. Una vez formada una pasta sin agua, pero no muy sólida, se comienzan a formar las hamburguesas con las manos o mediante moldes, se pasan por pan rallado y se colocan en placa para horno previamente aceitada. Hornear hasta que estén doradas y listas para disfrutar.",
    image: HamburArroz,
    author: "Gux",
  },
 /*  {
    name: "Paneer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: Paneer,
    price: 400,
  },
  {
    name: "Gujrati",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: Gujrati,
    price: 500,
  },  */
];

export default MenuList