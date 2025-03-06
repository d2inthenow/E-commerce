import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";
import CategoryCollapse from "../../CategoryCollapse";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="!p-3 text-[17px] font-bold flex items-center justify-between">
        SHOP BY CATEGORIES
        <IoClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px] "
        />
      </h3>

      <CategoryCollapse />
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
