import React, {useEffect, useState} from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "@/Components/Card";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import {FaCode, FaDatabase, FaLaravel, FaPhp, FaReact, FaVuejs} from "react-icons/fa";

export default function Welcome(props) {

    const [childData, setChildData] = useState({
        name: "Anwar Jahid",
        title: 'Full-Stack Developer',
        profile_img: '/profile1.jpg',
        social: {
            facebook: 'ringkubd',
            github: 'ringkubd',
            twitter: 'ringkubd',
            tel: '+8801737956549',
            email: 'ajr.jahid@gmail.com',
        }
    });

    const [aboutData, setAboutData] = useState({
        title: 'My Background',
        description: 'Full-Stack Developer',
    });

    const [skillData, setSkillData] = useState({
        skills: [
            {
                name: "PHP",
                strength: "90",
                icon: (<FaPhp className="text-4xl mx-auto inline-block text-[#7377AD]" />)
            },
            {
                name: "React.js",
                strength: "70",
                icon: (<FaReact className="text-4xl mx-auto inline-block text-[#61DAFB]" />)
            },
            {
                name: "VueJS",
                strength: "80",
                icon: (<FaVuejs className="text-4xl mx-auto inline-block text-[#41B883]" />)
            },
            {
                name: "Laravel",
                strength: "90",
                icon: (<FaLaravel className="text-4xl mx-auto inline-block text-red-500" />)
            },
            {
                name: "MySQL",
                strength: "90",
                icon: (<FaDatabase className="text-4xl mx-auto inline-block text-amber-600" />)
            }
        ]
    })


    useEffect(() => {
        AOS.init({
            once: true,
        });
    });

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
                <div className="" data-aos="fade-down" data-aos-duration="800">
                    <Card parentData={childData} />
                </div>
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <About aboutData={aboutData}/>
                    <Skills skillData={skillData}/>
                </div>
            </div>
        </>
    );
}
