import "./style.css";
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem,
  //useProSidebar
} from "react-pro-sidebar";
function Sidebars({ filterList, setSelectedFilter }) {
  //const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(true);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <>
      <div className=" ">
        <Sidebar
          className={`app ${toggled ? "toggled" : ""}`}
          style={{ height: "100%", position: "absolute"  }}
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
          backgroundColor="rgb(255, 255, 255)"
        >
          <main>
            <Menu >
              {collapsed ? (
                <MenuItem 
                   
                  icon={<FiChevronsRight />}
                  onClick={handleCollapsedChange}
                ></MenuItem>
              ) : (
                <MenuItem
                  suffix={<FiChevronsLeft />}
                  onClick={handleCollapsedChange}
                >
                  <div
                    style={{
                      padding: "9px",
                      // textTransform: "uppercase",
                      fontWeight: "bold",
                      fontSize: 14,
                      letterSpacing: "1px",
                    }}
                  >
                    ElegancelookPro
                  </div>
                </MenuItem>
              )}
              <hr />
            </Menu>

            <Menu>
              <MenuItem icon={<RiHome4Line />}>Home</MenuItem>
              <SubMenu defaultOpen label={"Filters"} icon={<RiTeamLine />}>
                {Object.keys(filterList).map((filterName) => (
                  <MenuItem
                    onClick={() => {
                      setSelectedFilter(filterList[filterName]);
                    }}
                    key={filterName}
                    icon={<RiUserFollowLine />}
                  >
                    {filterList[filterName].name}
                  </MenuItem>
                ))}
              </SubMenu>
              <SubMenu defaultOpen label={"Other"} icon={<RiFolder2Line />}>
                <MenuItem icon={<RiStackLine />}>Crop</MenuItem>
                <MenuItem icon={<RiPlantLine />}>Convert</MenuItem>
              </SubMenu>
            </Menu>
          </main>
        </Sidebar>
      </div>
    </>
  );
}
export default Sidebars;
