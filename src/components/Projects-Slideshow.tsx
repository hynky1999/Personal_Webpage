import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Content, Columns, Card, Element } from 'react-bulma-components';
import Link from 'next/link';
import styles from '../css/slick-fix.module.css';
import { projects } from '../lib/static';



export default function Slideshow() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                }
            },
        ]
    };

    return (
        <Slider {...settings}>
            {projects.map((project, index) => (
                <Element key={index} className={styles.slide_height_fix} p={4} >
                <Card style={{ height: '100%' }} >
                    <Card.Image size="4by3" src={project.image_url} />
                    <Card.Content>
                        <Content>
                            <Heading size={5}>{project.name}</Heading>
                            <p>{project.description}</p>
                            <strong>Technologies:</strong> {project.technologies.join(', ')}
                            {project.links.website && (
                                <p><strong>Website:</strong> <Link href={project.links.website}>{project.links.website}</Link></p>
                            )}
                            {project.links.github && (
                                <p><strong>GitHub:</strong> <Link href={project.links.github}>{project.links.github}</Link></p>
                            )}
                        </Content>
                    </Card.Content>
                </Card>
                </Element>
))
}
        </Slider >
    );
}
