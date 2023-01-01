import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAddressRequest, IPropertyRequest } from "../interfaces/properties";

const addressSchemas: SchemaOf<IAddressRequest> = yup.object().shape({
  district: yup.string().required(),
  zipCode: yup.string().max(8).required(),
  number: yup.string(),
  city: yup.string().required(),
  state: yup.string().max(2).required(),
});

const propertiesSchemas: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number().required(),
  size: yup.number().required(),
  address: addressSchemas,
  categoryId: yup.string().required(),
});

export { addressSchemas, propertiesSchemas };
