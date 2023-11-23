import { CreateUserFormData } from "./CreateUserForm.validator";

export const FORM_DATAUSER: {
  [key in keyof CreateUserFormData]:
    | "Nombre"
    | "Apellido paterno"
    | "Apellido materno"
    | "Correo"
    | "Teléfono"
    | "Contraseña";
} = {
  name: "Nombre",
  last_name: "Apellido materno",
  second_last_name: "Apellido materno",
  email: "Correo",
  phone: "Teléfono",
  password: "Contraseña",
};
