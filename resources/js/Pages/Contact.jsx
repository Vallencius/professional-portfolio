import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function Contact(props) {
    return (
        <>
          <Head title="Contact"/>
          <Navbar
            image={props.images+"/logo-putih.png" }
            active="Contact"
          />
          <div className="w-full h-screen dark:bg-gray-900 bg-coffee-50">
            INI Contact
          </div>
          <Footer />
        </>
    );
}