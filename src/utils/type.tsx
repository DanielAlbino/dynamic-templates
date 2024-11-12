
type Validation = {
    required: boolean;
    pattern?: string;
  };

type FormField = {
    Label: string;
    Type: string;
    Validation: Validation;
};

type Companies = {
    name: string,
    FormFields: FormField[];
};

interface CompanyProps {
    companies: Companies[]; // Define the shape of the companies prop
  }