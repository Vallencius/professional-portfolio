import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {React, useContext} from "react";
import { useData } from './Dashboard';
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 
export function DataTable() {
    const data = useData(); 
    console.log(data);
    
    const TABLE_HEAD = ["Logo", "Title", "Type", "Technologies", "Link", "Action"];
    
    return (
        <Card className="h-full w-full">
            <CardBody className="px-0 overflow-x-scroll">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                key={head}
                                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                >
                                    {head}{" "}
                                </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.projects.map(
                        ({ id, images, title, type, technologies, link }, index) => {
                            const isLast = index === data.length - 1;
                            const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";

                            return (
                            <tr key={id}>
                                <td className={classes}>
                                    <div className="flex items-center gap-1 justify-center">
                                        <img src={data.images + '/projects/' + images[0].image} className="h-20" />      
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col">
                                            <p>{title}</p>                                        
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
                                                    whileHover={{ scale: 1.3 }} 
                                                    whileTap={{ scale: 1 }} 
                                                    className="h-10 w-10 rounded-full bg-coffee-200"
                                                >
                                                    <LazyLoadImage className="p-2" src={data.images + "/logo/" + technology.image}/>
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
                                    <Tooltip content="Edit User">
                                        <IconButton variant="text" className="flex">
                                            <PencilIcon className="h-4 w-4 m-auto" />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                            );
                        },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}