import { GridColDef } from "@mui/x-data-grid";
import { PostType } from "../types";

export const formInputs = [
  {
    label: "Name",
    name: "name",
  },
  {
    label: "Phone",
    name: "phone",
  },
  {
    label: "Email",
    name: "email",
  },
];

export const initialFormState = {
  name: "",
  phone: "",
  email: "",
};

export const columns: GridColDef<PostType>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "userId",
    headerName: "User ID",
    width: 150,
    editable: true,
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    sortable: false,
    editable: true,
  },
  {
    field: "body",
    headerName: "Description",
    type: "string",
    width: 600,
    sortable: false,
    editable: true,
  },
];

export const departments = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
  {
    department: "engineering",
    sub_departments: ["frontend", "backend", "devops"],
  },
  {
    department: "marketing",
    sub_departments: ["content_marketing", "seo", "social_media"],
  },
];



//Object to store the initial state of the collapse state
//Using reduce method to extract the department names and set the initial state to false
export const initialCollapseState = departments.reduce(
  (acc, department) => ({ ...acc, [department.department]: false }),
  {}
);



//Object to store the initial state of the checked items state
//Using reduce method to extract the department names and set the initial state to false
//Using the sub_departments array to set the initial state to false
export const initialCheckedItemsState =  departments.reduce(
  (acc, department) => ({
    ...acc,
    [department.department]: {
      checked: false,
      subDepartments: department.sub_departments.reduce(
        (subAcc, sub) => ({ ...subAcc, [sub]: false }),
        {}
      ),
    },
  }),
  {}
)
