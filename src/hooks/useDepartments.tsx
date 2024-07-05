import React, { useState } from 'react'
import { CheckedItemsType, CollapseItemsType } from '../types';
import { initialCheckedItemsState, initialCollapseState } from '../constants';

const useDepartments = () => {
    const [openStates, setOpenStates] = useState<CollapseItemsType>(initialCollapseState);

    const [checkedItems, setCheckedItems] = useState<CheckedItemsType>(initialCheckedItemsState);
  
    const handleCollapse = (department: string) => {
      setOpenStates((prevStates) => ({
        ...prevStates,
        [department]: !prevStates[department],
      }));
    };
  
    const handleDepartmentClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      department: string
    ) => {
      e.stopPropagation();
  
      if (!openStates[department]) {
        setOpenStates((prevStates) => ({
          ...prevStates,
          [department]: true,
        }));
      }
  
      const isChecked = checkedItems[department].checked;
  
      setCheckedItems((prevItems) => ({
        ...prevItems,
        [department]: {
          checked: !isChecked,
          subDepartments: Object.keys(prevItems[department].subDepartments).reduce(
            (subAcc, sub) => ({ ...subAcc, [sub]: !isChecked }),
            {}
          ),
        },
      }));
    };
  
    const handleSubDepartmentClick = (department: string, subDepartment: string) => {
      const isChecked = checkedItems[department].subDepartments[subDepartment];
  
      setCheckedItems((prevItems) => {
        const subDepartments = {
          ...prevItems[department].subDepartments,
          [subDepartment]: !isChecked,
        };
        const allSubDepartmentsChecked = Object.values(subDepartments).every((checked) => checked);
  
        return {
          ...prevItems,
          [department]: {
            checked: allSubDepartmentsChecked,
            subDepartments,
          },
        };
      });
    };

    return {
        openStates,
        checkedItems,
        handleCollapse,
        handleDepartmentClick,
        handleSubDepartmentClick
    }

}

export default useDepartments
