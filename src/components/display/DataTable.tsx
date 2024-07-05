import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { PostType } from "../../types";
import { columns } from "../../constants";

interface DataTableProps {
  posts: PostType[];
  loading: boolean;
}

const DataTable = ({ posts ,loading}: DataTableProps) => {
  return (
    <Box sx={{ height: 700, width: "100%", boxShadow: 1 }}>
      <DataGrid
        rows={posts}
        columns={columns}
        sx={{ fontFamily: "monospace" }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        disableRowSelectionOnClick
        loading={loading}
      />
    </Box>
  );
};

export default DataTable;
