import data from "../../public/forms.json";

const getCompanies = () => {
  // Convert object to an array of objects
  const companiesArray: any = Object.entries(data).map(
    ([companyName, companyData]) => ({
      name: companyName,
      ...companyData,
    })
  );
  return companiesArray;
};

export default getCompanies;
