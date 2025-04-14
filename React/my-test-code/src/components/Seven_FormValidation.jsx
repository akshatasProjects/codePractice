import React from "react";
// import { userForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolves/yup";
// import * as yup from "yup";

function Seven_FormValidation() {
  //   const schema = yup.Object().shape({
  //     name: yup.String().required("Name is required"),
  //     email: yup.String().email("Invalid email").required("Email is required"),
  //     password: yup
  //       .String()
  //       .min(6, "Password should be 6")
  //       .required("Password is required"),
  //   });
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = userForm({ resolver: yupResolver(schema) });
  //   const onSubmit = (data) => {
  //     console.log("Form Data:", data);
  //   };
  //   return (
  //     <div className='max-w-md mx-auto p-4 border rounded shadow-md'>
  //       <h2 className='text-xl font-semibold mb-4'>React Form Validation</h2>
  //       <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
  //         <div>
  //           <label className='block font-medium'>Name:</label>
  //           <input
  //             type='text'
  //             {...register("name")}
  //             className='w-full p-2 border rounded'
  //           />
  //           <p className='text-red-500 text-sm'>{errors.email}</p>
  //         </div>
  //         <div>
  //           <label className='block font-medium'>Password</label>
  //           <input
  //             type='password'
  //             {...register("password")}
  //             className='w-full p-2 border rounded'
  //           />
  //           <p className='text-red-500 text-sm'>{errors.password?.message}</p>
  //         </div>
  //         <button
  //           type='submit'
  //           className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-6'>
  //           Submit
  //         </button>
  //       </form>
  //     </div>
  //   );
}

export default Seven_FormValidation;
