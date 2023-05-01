import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";
import Header from "../../components/Header";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [products, setProducts] = useState([]);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
    },
    {
      field: "created_at",
      headerName: "Date",
      flex: 1,
      valueGetter: (params) => {
        const [date] = params.row.created_at.split("T");
        return date;
      },
    },
    {
      field: "update",
      headerName: "Update",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <button
          onClick={() => handleUpdate(params.row.id)}
          style={{
            backgroundColor: colors.blueAccent[500],
            color: colors.textLight,
            padding: "8px 16px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Update
        </button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <button
          onClick={() => handleDelete(params.row.id)}
          style={{
            backgroundColor: colors.greenAccent[500],
            color: colors.textLight,
            padding: "8px 16px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://circuit-cityy-po9y.onrender.com/products/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJpc19hZG1pbiI6dHJ1ZX0.GbZmiHhQi7r04MtdH7d4fPAylWQjcV25YmRDjdJzgi0',
        }
      });
      if (response.ok) {
        console.log("Product deleted successfully");
        setProducts(products.filter((product) => product.id !== id));
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id) => {
    const productToUpdate = products.find((product) => product.id === id);
    const updatedName = prompt("Enter the updated name:", productToUpdate.name);
    const updatedDescription = prompt("Enter the updated description:", productToUpdate.description);
    const updatedPrice = prompt("Enter the updated price:", productToUpdate.price);
    const updatedCategoryId = prompt("Enter the updated category ID:", productToUpdate.category_id);
    const updatedimageurl = prompt("Enter the updated image url:", productToUpdate.image);

    const updatedProduct = {
      name: updatedName || productToUpdate.name,
      description: updatedDescription || productToUpdate.description,
      price: updatedPrice || productToUpdate.price,
      category_id: updatedCategoryId || productToUpdate.category_id,
      image: updatedimageurl || productToUpdate.image,
    };

    try {
      const response = await fetch(`https://circuit-cityy-po9y.onrender.com/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJpc19hZG1pbiI6dHJ1ZX0.GbZmiHhQi7r04MtdH7d4fPAylWQjcV25YmRDjdJzgi0',
        },
        body: JSON.stringify(updatedProduct),
      });
      if (response.ok) {
        console.log("Product updated successfully");
        const updatedProducts = [...products];
        const index = updatedProducts.findIndex((product) => product.id === id);
        updatedProducts[index] = { ...updatedProducts[index], ...updatedProduct };
        setProducts(updatedProducts);
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://circuit-cityy-po9y.onrender.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box m="20px">
      <Header title="PRODUCTS" subtitle="List of Products" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={products} columns={columns} />
      </Box>
    </Box>
  );
};

export default Products;