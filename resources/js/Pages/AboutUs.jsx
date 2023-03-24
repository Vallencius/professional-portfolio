import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function AboutUs(props) {
    return (
        <>
          <Head title="About Us"/>
          <Navbar
            image={props.images+"/logo-putih.png" }
            active="About"
          />
          <div className="w-full h-screen dark:bg-gray-900 bg-coffee-50">
            INI ABOUT US
          </div>
          <Footer />
        </>
    );
}