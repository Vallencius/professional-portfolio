import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function Projects(props) {
    return (
        <>
          <Head title="Projects"/>
          <Navbar
            image={props.images+"/logo-putih.png" }
            active="Projects"
          />
          <div className="w-full h-screen dark:bg-gray-900 bg-coffee-50">
            INI Projects
          </div>
          <Footer />
        </>
    );
}