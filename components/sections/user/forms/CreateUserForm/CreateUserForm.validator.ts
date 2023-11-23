import { InferType, object, string } from "yup";

export const createUserValidator = object({
  name: string().required("El nombre es requerido"),
  last_name: string().required("El apellido paterno es requerido"),
  second_last_name: string().required("El apellido materno es requerido"),
  email: string().required("El correo es requerido"),
  phone: string().required("El teléfono es requerido"),
  password: string()
    .required("La contraseña es requerida")
    .min(8, "La contraseña debe contener al menos 8 caracteres"),
}).strict(true);

/**** Validator FormUserData ****/
export type CreateUserFormData = InferType<typeof createUserValidator>;
