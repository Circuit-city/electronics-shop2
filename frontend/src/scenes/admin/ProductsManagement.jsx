import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";

const AddProduct = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const initialValues = {
    name: "",
    description: "",
    price: "",
    category_id: "",
    image: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
    price: yup.number().required("Price is required"),
    category_id: yup.number().required("Category ID is required"),
    image: yup.string().required("image url is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const productData = {
      name: values.name,
      description: values.description,
      price: parseInt(values.price),
      category_id: parseInt(values.category_id),
      image: values.image,
    };
    try {
      const response = await fetch("https://circuit-cityy-po9y.onrender.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJpc19hZG1pbiI6dHJ1ZX0.GbZmiHhQi7r04MtdH7d4fPAylWQjcV25YmRDjdJzgi0"
        },
        body: JSON.stringify(productData),
      });
      if (response.ok) {
        console.log("Product added successfully");
        resetForm();
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      
      <Box m="20px">
      <Header title="ADD PRODUCT" subtitle="Add a new product" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
             <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  name="description"
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Price"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.price}
                  name="price"
                  error={!!touched.price && !!errors.price}
                  helperText={touched.price && errors.price}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Category ID"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.category_id}
                  name="category_id"
                  error={!!touched.category_id && !!errors.category_id}
                  helperText={touched.category_id && errors.category_id}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="url"
                  label="Image url"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.image}
                  name="image"
                  error={!!touched.image && !!errors.image}
                  helperText={touched.image && errors.image}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  <Typography sx={{ color: colors.textLight }}>Save</Typography>
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default AddProduct;