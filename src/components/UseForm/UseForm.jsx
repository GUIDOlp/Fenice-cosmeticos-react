import{ useState } from "react"


export const UseForm= (initialForm, validateForm)=> {
// declaramos variables de estado
const[form, setForm]= useState(initialForm);
const [error, setError]= useState({});

const handleChange= (event) => {
const {name, value}= event.target;
setForm({
...form,
[name]: value,    
});
}

const handleBlur= (event) => {
handleChange(event);
setError(validateForm(form))
}

return {
    form, error, handleChange, handleBlur
}
};