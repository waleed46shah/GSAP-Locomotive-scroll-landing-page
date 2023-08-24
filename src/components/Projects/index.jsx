import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Thinking Gato",
        src: "sad.jpg"
    },
    {
        title: "Staring Gato",
        src: "staring.jpg"
    },
    {
        title: "Wierd Gato",
        src: "long nose.jpg"
    },
    {
        title: "Grey Gato",
        src: "Grey Cat.jpg"
    },
    {
        title: "Gato with tongue",
        src: "tongue.jpg"
    },
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/${projects[selectedProject].src}`}
                        fill={true}
                        alt="sad.jpg"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>Gatos ponder life's mysteries: "Why chase tail when napping's an art?" 🐾</p>
                </div>
                <div className={styles.column}>
                    <p>But there's a question left unanswered by humanity even after living centuries with Cats. They searched the depths of mountains and the limits of the skies for it. 'Does it hurt the car?'</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}