import { useRegister } from "@/hook/useRegister";
import FormPerfil from "./components/FormPerfil";

const Register = () => {

    const {onSubmit} =useRegister();
  
    return (
            <FormPerfil onSubmit={onSubmit} />
   
    );
}

export default Register;