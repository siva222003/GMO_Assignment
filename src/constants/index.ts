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
