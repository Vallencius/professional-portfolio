import React from "react";
import { useForm } from "react-hook-form";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

export default function Form({type, category, head, closeForm}) { 
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

    function process(data) {
        console.log([type, category, data]);
        axios.post(`${type}/${category}`, data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
          console.log(error.message + ". Please refresh this page!");
        });
    }

    return (
        <>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button type="button" onClick={() => closeForm()} className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 py-1 px-3 font-sans font-bold rounded-lg text-white hover:text-coffee-300">
                    X
                </button>
                <div className="flex flex-col items-center justify-center max-w-lg w-screen lg:w-[50vw] bg-coffee-200 border-2 border-coffee-600 rounded-lg">
                    <Card color="transparent" shadow={false} className="my-4">
                        <Typography variant="h4" color="blue-gray" className="text-center">
                            {type === 'add' ? 'Add' : 'Edit'} {category} 
                        </Typography>
                        <form onSubmit={handleSubmit(process)} className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-1 flex flex-col gap-4">
                                {
                                    head.map((name, index) => {
                                        if (name !== 'Action') {
                                            return (
                                                <>
                                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                                        {name}
                                                    </Typography>
                                                    <Input
                                                        placeholder={`Enter ${name}`}
                                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg"
                                                        labelProps={{
                                                            className: "before:content-none after:content-none",
                                                        }}
                                                        {...register(name, {
                                                            required: `${name} tidak boleh kosong!`,
                                                        })}
                                                    />
                                                </>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <Button className="mt-6 bg-coffee-600 py-3" type="submit" fullWidth>
                                Submit
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    );
}