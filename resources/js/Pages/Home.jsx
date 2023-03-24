import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function Home(props) {
    return (
        <>
          <Head title="Home"/>
          <Navbar
            image={props.images+"/logo-putih.png" }
            active="Home"
          />
          <div className="w-full h-screen dark:bg-gray-900 bg-coffee-50">
            INI HOME
          </div>
          <Footer />
        </>
    );
}