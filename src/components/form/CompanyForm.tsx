import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const CompanyForm = () => {
  const [company, setCompany]= useState<Companies | null>();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCompany(location.state);
  }, []);

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
      textAlign={"center"}
    >
      <div>
        <h2>{company?.name}'s Form</h2>
        {company?.FormFields?.reduce(
          (acc: JSX.Element[], field: FormField, index: number) => {
            // Add a new pair every 2 elements or the last unpaired item
            if (index % 2 === 0) {
              acc.push(
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: 100,
                    marginRight: 100,
                  }}
                >
                  <TextField
                    id={`${field.Label}-${index}`}
                    label={field.Label}
                    variant="outlined"
                    type={field.Type}
                    required={field?.Validation?.required}
                    sx={{ flex: 1 }}
                  />
                  {/* Add the next item if it exists */}
                  {company.FormFields[index + 1] && (
                    <TextField
                      id={`${company.FormFields[index + 1].Label}-${index + 1}`}
                      label={company.FormFields[index + 1].Label}
                      variant="outlined"
                      type={company.FormFields[index + 1].Type}
                      required={
                        company.FormFields[index + 1]?.Validation?.required
                      }
                      sx={{ flex: 1 }}
                    />
                  )}
                </div>
              );
            }
            return acc;
          },
          []
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            marginTop: 40,
            marginLeft: 100,
            marginRight: 100,
          }}
        >
          <div
           style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: 10,
            width: 200,
          }}
          >
          <Button variant="contained" onClick={() => navigate("/")}>Submit</Button>
          <Button variant="outlined" onClick={() => navigate("/")}>Cancel</Button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CompanyForm;
