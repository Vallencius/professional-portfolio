import { React, useState } from "react";
import { useForm } from "react-hook-form";
import {
    Card,
    Input,
    Checkbox,
    Radio,
    Button,
    Textarea,
    Typography,
  } from "@material-tailwind/react";

export default function Form({type, category, head, closeForm, refreshPage, editData}) { 
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
      
    const [errorMessage, setErrorMessage] = useState(null);
      
    const [tech, setTech] = useState(() => {
        axios.get('/admin/get/technologies/all')
        .then(response => {
            setTech(response.data);
        })
        .catch(error => {
          console.log(error.message + ". Please refresh this page!");
        });
    });
    
    const [projectTypes, setProjectTypes] = useState(() => {
        axios.get('/admin/get/projecttypes/all')
        .then(response => {
            setProjectTypes(response.data);
        })
        .catch(error => {
          console.log(error.message + ". Please refresh this page!");
        });
    });

    function process(data) {
        var processCategory;

        if (category === 'Project') {
            processCategory = 'projects';
        } else if (category === 'Technologies') {
            processCategory = 'technologies';
        } else if (category === 'Project Type') {
            processCategory = 'projecttypes';
        }

        const formData = new FormData();

        if (data.Name) {
            formData.append('Name', data.Name);
        }
        if (data.Logo) {
            formData.append('Logo', data.Logo[0]);
        }
        if (data.Link) {
            formData.append('Link', data.Link);
        }
        if (data.Title) {
            formData.append('Title', data.Title);
        }
        if (data.Type) {
            formData.append('Type', data.Type);
        }
        if (data.Description) {
            formData.append('Description', data.Description);
        }
        if (data.Slug) {
            formData.append('Slug', data.Slug);
        }
        if (data.Technologies) {
            formData.append('Technologies', data.Technologies);
        }

        axios.post(`${type}/${processCategory}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            if (response.data.status === 1) {
                closeForm();
                refreshPage();
            } else if (response.data.status === 2) {
                setErrorMessage(response.data.errors);
            }
        })
        .catch(error => {
            setErrorMessage(error.response.data.errors);
        });
    }

    return (
        <>
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[90vh]">
                <div className="absolute top-0 left-0 px-4 py-4 w-full flex flex-row justify-between bg-coffee-400 border-2 border-coffee-600 rounded-t-lg z-50">
                    <Typography variant="h4" color="blue-gray" className="text-center">
                        {type === 'add' ? 'Add' : 'Edit'} {category} 
                    </Typography>
                    <button type="button" onClick={() => closeForm()} className="bg-red-500 hover:bg-red-700 py-1 px-3 font-sans font-bold rounded-lg text-white hover:text-coffee-300">
                        X
                    </button>
                </div>
                <div className="pt-16 h-full overflow-y-scroll flex flex-col items-center justify-center max-w-lg w-screen lg:w-[50vw] bg-coffee-200 border-2 border-coffee-600 rounded-lg">
                    <Card color="transparent" shadow={false} className="h-full my-4">
                        <form onSubmit={handleSubmit(process)} className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-1 flex flex-col gap-4">
                                {
                                    head.map((name, index) => {
                                        if (name === 'Type') {
                                            return(
                                                <>
                                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                                        {name}
                                                    </Typography>
                                                    <div className="flex flex-col">
                                                        {projectTypes && projectTypes.map(({name}, index) => {
                                                            return (
                                                                <>
                                                                    {
                                                                        editData && name === editData['type'].name &&
                                                                        <Radio 
                                                                            name="type" 
                                                                            label={name}
                                                                            value={index + 1}
                                                                            {...register("Type")}
                                                                            defaultChecked
                                                                        />
                                                                    }
                                                                    {
                                                                        (!editData || name !== editData['type'].name) &&
                                                                        <Radio 
                                                                            name="type" 
                                                                            label={name}
                                                                            value={index + 1}
                                                                            {...register("Type")}
                                                                        />
                                                                    }
                                                                </>
                                                            )
                                                        })}
                                                    </div>
                                                    {
                                                        errorMessage && errorMessage[name] && 
                                                        <small className="text-red-600 -mt-3">*{errorMessage[name][0]}</small>
                                                    }
                                                </>
                                            )
                                        } if (name === 'Technologies') {
                                            return(
                                                <>
                                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                                        {name}
                                                    </Typography>
                                                    <div className="flex flex-col">
                                                        {tech && tech.map(({name}, index) => {
                                                            return (
                                                                <>
                                                                    {
                                                                        editData && editData['technologies'].some(tech => tech.name === name) &&
                                                                        <Checkbox 
                                                                            name="type" 
                                                                            label={name}
                                                                            value={index + 1}
                                                                            defaultChecked 
                                                                        />
                                                                    }
                                                                    {
                                                                        (!editData || !editData['technologies'].some(tech => tech.name === name)) &&
                                                                        <Checkbox 
                                                                            name="type" 
                                                                            label={name}  
                                                                            value={index + 1}                                                                          {...register("Technologies")} 
                                                                        />
                                                                    }
                                                                </>
                                                            )
                                                        })}
                                                    </div>
                                                    {
                                                        errorMessage && errorMessage[name] && 
                                                        <small className="text-red-600 -mt-3">*{errorMessage[name][0]}</small>
                                                    }
                                                </>
                                            )
                                        } if (name === 'Logo') {
                                            return(
                                                <>
                                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                                        {name}
                                                    </Typography>
                                                    <Input
                                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg"
                                                        type="file"
                                                        {...register(name)}
                                                    />
                                                    {
                                                        errorMessage && errorMessage[name] && 
                                                        <small className="text-red-600 -mt-3">*{errorMessage[name][0]}</small>
                                                    }
                                                </>
                                            )
                                        } if (name === 'Description') {
                                            return(
                                                <>
                                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                                        {name}
                                                    </Typography>
                                                    {
                                                        editData &&
                                                        <Textarea
                                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg"
                                                            rows="6"
                                                            labelProps={{
                                                                className: "before:content-none after:content-none",
                                                            }}
                                                            placeholder={editData['description']}
                                                            {...register(name)}
                                                        />
                                                    }
                                                    {
                                                        !editData &&
                                                        <Textarea
                                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg"
                                                            rows="6"
                                                            labelProps={{
                                                                className: "before:content-none after:content-none",
                                                            }}
                                                            placeholder={`Enter ${name}`}
                                                            {...register(name)}
                                                        />
                                                    }
                                                    {
                                                        errorMessage && errorMessage[name] && 
                                                        <small className="text-red-600 -mt-3">*{errorMessage[name][0]}</small>
                                                    }
                                                </>
                                            )
                                        } else if (name !== 'Action') {
                                            return (
                                                <>
                                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                                        {name}
                                                    </Typography>
                                                    {
                                                        editData &&
                                                        <Input
                                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg"
                                                            labelProps={{
                                                                className: "before:content-none after:content-none",
                                                            }}
                                                            placeholder={editData[name.toLowerCase()]}
                                                            {...register(name)}
                                                        />
                                                    }
                                                    {
                                                        !editData &&
                                                        <Input
                                                            placeholder={`Enter ${name}`}
                                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg"
                                                            labelProps={{
                                                                className: "before:content-none after:content-none",
                                                            }}
                                                            {...register(name)}
                                                        />
                                                    }
                                                    {
                                                        errorMessage && errorMessage[name] && 
                                                        <small className="text-red-600 -mt-3">*{errorMessage[name][0]}</small>
                                                    }
                                                </>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <Button className="mt-6 mb-4 bg-coffee-600 py-3" type="submit" fullWidth>
                                Submit
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    );
}