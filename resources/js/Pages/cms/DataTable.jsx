import { PencilIcon, PhotoIcon, TrashIcon } from "@heroicons/react/24/solid";
import { React, useState } from "react";
import { useData } from './Dashboard';
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Card,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Form from '@/Components/Form';
import axios from 'axios';
 
export function DataTable(props) {
    const providerData = useData(); 
    const propsData = providerData.props; 

    const [data, setData] = useState(() => {
        let url = `/admin/get/${props.type}`;
        
        if (props.type === 'projectimages') {
            url += `/${providerData.idProject.id}`;
        }

        process(url)
    });

    const [addForm, setAddForm] = useState(false);
    const [editForm, setEditForm] = useState(null);

    function process(url) {
        axios.get(url)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    function categoryMapping(category) {
        if (category === 'projects') {
            return 'Project';
        } else if (category === 'technologies') {
            return 'Technologies';
        } else if (category === 'projecttypes') {
            return 'Project Type';
        } else if (category === 'projectimages') {
            return 'Image';
        } else {
            return 'Data';
        }
    }

    function deleteRow(id, type) {
        let url = `/admin/delete/${type}/${id}`;
        axios.get(url)
        .then(response => {
            let url = `/admin/get/${props.type}`;
            if (props.type === 'projectimages') {
                url += `/${providerData.idProject.id}`;
            }
            process(url)
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    return (
        <>
            {
                data &&
                (
                    <>
                        <Card className="h-full w-full">
                            <div className="flex flex-row w-full pt-4">
                                <Button onClick={() => setAddForm(true)} className="ml-auto mr-4 mb-2 pt-4 rounded-full text-slate-900 bg-green-200 px-5 py-3">
                                    + Add {categoryMapping(props.type)}
                                </Button>
                            </div>
                            <CardBody className="px-0 overflow-x-scroll">
                                <table className="w-full min-w-max table-auto text-left">
                                    <thead>
                                        <tr>
                                            {props.head.map((head, index) => (
                                                <th
                                                key={head}
                                                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                                >
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                                >
                                                    {head}
                                                </Typography>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.type === 'projects' &&
                                            data.data.map(
                                                ({ id, images, title, description, slug, type, technologies, link }, index) => {
                                                    const isLast = index === data.data.length - 1;
                                                    const classes = isLast
                                                    ? "p-4"
                                                    : "p-4 border-b border-blue-gray-50";
                
                                                    return (
                                                        <tr key={id}>
                                                            <td className={classes}>
                                                                <div className="flex items-center gap-1 justify-center">
                                                                    <img src={propsData.images + '/projects/' + (images[0] ? images[0].image : 'no-image.jpg')} className="h-20" />      
                                                                </div>
                                                            </td>
                                                            <td className={classes}>
                                                                <div className="flex items-center gap-3">
                                                                    <div className="flex flex-col">
                                                                        <p>{title}</p>                                        
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className={isLast ? "p-4 w-[1000px]" : 'p-4 border-b border-blue-gray-50 w-[1000px]'}>
                                                                <div className="flex items-center gap-3">
                                                                    <div className="flex flex-col">
                                                                        <p>{description}</p>                                        
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className={classes}>
                                                                <div className="flex items-center gap-3">
                                                                    <div className="flex flex-col">
                                                                        <p>{slug}</p>                                        
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className={classes}>
                                                                <div className="flex items-center gap-3">
                                                                    <div className="flex flex-col">
                                                                        <div
                                                                            className={
                                                                                type.name == "Website" && "w-fit bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 rounded-full py-2 px-4" || 
                                                                                type.name == "Cross Platform Application" && "w-fit bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 rounded-full py-2 px-4" ||
                                                                                type.name == "Android Application" && "w-fit bg-gradient-to-r from-blue-200 via-blue-300 to-purple-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-100 rounded-full py-2 px-4"
                                                                            }
                                                                        >
                                                                            {type.name}
                                                                        </div>                                
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className={classes}>
                                                                <div className="flex items-center gap-3">
                                                                    <div className="flex flex-row flex-wrap w-40 gap-2">
                                                                        {technologies.map((technology, i) => {
                                                                            return(
                                                                            <a 
                                                                                className="h-10 w-10 rounded-full bg-coffee-200"
                                                                                key={i}
                                                                            >
                                                                                <LazyLoadImage className="p-2" src={propsData.images + "/logo/" + technology.image}/>
                                                                            </a>
                                                                            )
                                                                        })}                                       
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className={classes}>
                                                                <div className="flex items-center gap-3 w-52">
                                                                    <div className="flex flex-col">
                                                                        <p className="break-all">{link}</p>                                        
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className={classes}>
                                                                <div className="flex flex-row">
                                                                    <Tooltip content="Edit User">
                                                                        <IconButton variant="text" className="flex" onClick={() => {setEditForm({ id, images, title, description, slug, type, technologies, link })}}>
                                                                            <PencilIcon className="h-4 w-4 m-auto" />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                    <Tooltip content="Edit Image">
                                                                        <IconButton 
                                                                            variant="text"
                                                                            className="flex" 
                                                                            onClick={() => {
                                                                                providerData.setSubDiv('Project Images')
                                                                                providerData.setIdProject({
                                                                                    'id': id,
                                                                                    'title': title
                                                                                })
                                                                            }}
                                                                        >
                                                                            <PhotoIcon className="h-4 w-4 m-auto" />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                    <Tooltip content="Delete Content">
                                                                        <IconButton variant="text" className="flex" onClick={() => {deleteRow( id, props.type )}}>
                                                                            <TrashIcon className="h-4 w-4 m-auto" />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                },
                                            )
                                        }
                                        {
                                            props.type === 'technologies' &&
                                            data.data.map(
                                                ({ id, image, name }, index) => {
                                                    const isLast = index === data.data.length - 1;
                                                    const classes = isLast
                                                    ? "p-4"
                                                    : "p-4 border-b border-blue-gray-50";
                
                                                    return (
                                                    <tr key={id}>
                                                        <td className={classes}>
                                                            <div className="flex items-center gap-1 justify-center">
                                                                <img src={propsData.images + '/logo/' + image} className="h-20" />      
                                                            </div>
                                                        </td>
                                                        <td className={classes}>
                                                            <div className="flex items-center gap-3">
                                                                <div className="flex flex-col">
                                                                    <p>{name}</p>                                        
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className={classes}>
                                                            <div className="flex flex-row">
                                                                <Tooltip content="Edit User">
                                                                    <IconButton variant="text" className="flex" onClick={() => {setEditForm({ id, image, name })}}>
                                                                        <PencilIcon className="h-4 w-4 m-auto" />
                                                                    </IconButton>
                                                                </Tooltip>
                                                                <Tooltip content="Delete Content">
                                                                    <IconButton variant="text" className="flex" onClick={() => {deleteRow( id, props.type )}}>
                                                                        <TrashIcon className="h-4 w-4 m-auto" />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    );
                                                },
                                            )
                                        }
                                        {
                                            props.type === 'projecttypes' &&
                                            data.data.map(
                                                ({ id, name }, index) => {
                                                    const isLast = index === data.data.length - 1;
                                                    const classes = isLast
                                                    ? "p-4"
                                                    : "p-4 border-b border-blue-gray-50";
                
                                                    return (
                                                    <tr key={id}>
                                                        <td className={classes}>
                                                            <div className="flex items-center gap-3">
                                                                <div className="flex flex-col">
                                                                    <p>{name}</p>                                        
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className={classes}>
                                                            <div className="flex flex-row">
                                                                <Tooltip content="Edit User">
                                                                    <IconButton variant="text" className="flex" onClick={() => {setEditForm({ id, name })}}>
                                                                        <PencilIcon className="h-4 w-4 m-auto" />
                                                                    </IconButton>
                                                                </Tooltip>
                                                                <Tooltip content="Delete Content">
                                                                    <IconButton variant="text" className="flex" onClick={() => {deleteRow( id, props.type )}}>
                                                                        <TrashIcon className="h-4 w-4 m-auto" />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    );
                                                },
                                            )
                                        }
                                        {
                                            props.type === 'projectimages' &&
                                            data.data.map(
                                                ({ id, name, image }, index) => {
                                                    const isLast = index === data.data.length - 1;
                                                    const classes = isLast
                                                    ? "p-4"
                                                    : "p-4 border-b border-blue-gray-50";
                
                                                    return (
                                                    <tr key={id}>
                                                        <td className={classes}>
                                                            <div className="flex items-center gap-1 justify-center">
                                                                <img src={propsData.images + '/projects/' + image} className="h-20" />      
                                                            </div>
                                                        </td>
                                                        <td className={classes}>
                                                            <div className="flex items-center gap-3">
                                                                <div className="flex flex-col">
                                                                    <p>{name}</p>                                        
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className={classes}>
                                                            <div className="flex flex-row">
                                                                <Tooltip content="Edit Content">
                                                                    <IconButton variant="text" className="flex" onClick={() => {setEditForm({ id, name, image })}}>
                                                                        <PencilIcon className="h-4 w-4 m-auto" />
                                                                    </IconButton>
                                                                </Tooltip>
                                                                <Tooltip content="Delete Content">
                                                                    <IconButton variant="text" className="flex" onClick={() => {deleteRow( id, props.type )}}>
                                                                        <TrashIcon className="h-4 w-4 m-auto" />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    );
                                                },
                                            )
                                        }
                                    </tbody>
                                </table>
                            </CardBody>
                            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                Page {data.current_page} of {data.last_page}
                                </Typography>
                                <div className="flex gap-2">
                                    {
                                        data.prev_page_url && 
                                        <Button variant="outlined" size="sm" onClick={() => process(data.prev_page_url)}>
                                            Previous
                                        </Button>
                                    }
                                    {
                                        data.next_page_url && 
                                        <Button variant="outlined" size="sm" onClick={() => process(data.next_page_url)}>
                                            Next
                                        </Button>
                                    }
                                </div>
                            </CardFooter>
                        </Card>
                        {
                            addForm && 
                            <Form 
                                type="add" 
                                category={categoryMapping(props.type)} 
                                head={props.head} 
                                closeForm={() => setAddForm(false)} 
                                refreshPage={() => {
                                    let url = `/admin/get/${props.type}`;
                                    
                                    if (props.type === 'projectimages') {
                                        url += `/${props.idProject}`;
                                    }

                                    process(url)
                                }} 
                                editData={null} 
                                idProject={props.idProject ?? null}
                            />
                        }
                        {
                            editForm && 
                            <Form 
                                type="edit" 
                                category={categoryMapping(props.type)} 
                                head={props.head} 
                                closeForm={() => setEditForm(null)} 
                                refreshPage={() => process(`/admin/get/${props.type}`)} 
                                editData={editForm} 
                                idProject={props.idProject ?? null}
                            />
                        }
                    </>
                )
            }
        </>
    );
}