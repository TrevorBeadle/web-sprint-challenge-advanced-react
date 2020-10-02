import React, { useState } from "react";
// write your custom hook here to control your checkout form
export default function useForm(key, initialValues) {
  const [values, setValues] = useState(key, initialValues);

  const handleChanges = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChanges];
}
