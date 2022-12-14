const Role = require("../models/role");
const Usuario = require("../models/usuario");

const esRolValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  
  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta le la BD`);
  }
};

const emailExiste = async (correo = "") => {
  const existeEmail = await Usuario.findOne({ correo });

  if (existeEmail) {
    throw new Error(`El email ya se encuentra registrado`);
  }
};

const existeUsuarioPorId = async( id ) => {

  // Verificar si el correo existe
  const existeUsuario = await Usuario.findById(id);
  if ( !existeUsuario ) {
      throw new Error(`El id no existe ${ id }`);
  }
}

module.exports = {
  esRolValido,
  emailExiste,
  existeUsuarioPorId
};
