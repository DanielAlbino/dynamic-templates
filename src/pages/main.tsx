import React from "react";
import getCompanies from "../utils/server";
import CompaniesTable from "../components/table/CompaniesTable";
import { HashRouter  as Router, Routes, Route, Form } from "react-router-dom";
import CompanyForm from "../components/form/CompanyForm";

const Main = () => {

  const handleGetCompaniesList = () => {
    const companies: Companies[] = getCompanies();
    return companies;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompaniesTable companies={handleGetCompaniesList()} />} />
        <Route path="/form/:companyId" element={<CompanyForm />} />
      </Routes>
    </Router>
  );
};

export default Main;
