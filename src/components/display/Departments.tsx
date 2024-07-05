import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { departments } from "../../constants";
import useDepartments from "../../hooks/useDepartments";

export default function RouterBreadcrumbs() {
  const {
    checkedItems,
    handleCollapse,
    handleDepartmentClick,
    handleSubDepartmentClick,
    openStates,
  } = useDepartments();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: 360, mb: 20 }}>
      <Box component="nav" aria-label="mailbox folders">
        <List>
          {departments.map((dept, index) => (
            <React.Fragment key={index}>
              <ListItemButton onClick={() => handleCollapse(dept.department)}>
                <ListItemIcon>
                  <Checkbox
                    checked={checkedItems[dept.department].checked}
                    onClick={(e) => handleDepartmentClick(e, dept.department)}
                  />
                </ListItemIcon>
                <ListItemText sx={{ fontFamily: "monospace" }} primary={dept.department} />
                {openStates[dept.department] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openStates[dept.department]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {dept.sub_departments.map((subDept, index) => (
                    <ListItemButton key={index} sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Checkbox
                          checked={checkedItems[dept.department].subDepartments[subDept]}
                          onClick={() => handleSubDepartmentClick(dept.department, subDept)}
                        />
                      </ListItemIcon>
                      <ListItemText sx={{ fontFamily: "monospace" }} primary={subDept} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
}
