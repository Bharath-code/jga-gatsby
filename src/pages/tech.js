import React from "react"

import Page from "../templates/page"
import ConnectSection from "../components/connect"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faCodepen, faTwitter, faDev } from "@fortawesome/free-brands-svg-icons"

const data = {
    main: {
        title: "Tech",
        content: {
            __html: "<p>I recently rediscovered my love for tech and became interested in front-end web design and development. While I was unsure of what exactly I wanted to do or what field to work in, I knew I wanted to give back. My first role in the tech industry was at MotherCoders NYC, where I worked as a Student Success Coordinator. As someone early in their career with various other skills, I was able to help create an environment in which mothers looking to re-enter or level-up in the workplace can get a first-hand look at the tech industry and learn foundational front-end web development skills. I balanced managing the logistics of the program and coaching and even leading a few lessons on front-end languages including HTML, CSS, and JavaScript.</p><p>I am looking to continue to make an impact in tech, either by supporting underrepresented people in their learning journeys or by working as a creative designer/developer helping to enable the dreams of others while making the web more accessible and inclusive. As a front-end developer, I am especially interested in web accessibility and design systems.</p>"
        }
    }, 
    aside: {
        heading: "Skills & Tools",
        items: [
            {
                title: "Fundamentals of Front-End Web Development",
                description: "HTML/5 • CSS/3 • JavaScript/ES6"
            },
            {
                title: "Responsive Web Design",
                description: "CSS Flexbox • CSS Grid",
            },
            {
                title: "Web Accessibility",
                description: "Semantic HTML • WCAG 2.0, 2.1",
            },
            {
                title: "Command Line Basics and Version Control",
                description: "Mac OS Terminal • Git • GitHub",
            },
            {
                title: "Web Design",
                description: "Adobe Photoshop • Adobe XD",
            },
        ]
    },
    links: [
        {
            url: "https://github.com/jessabejar",
            label: "GitHub",
            icon: <FontAwesomeIcon icon={faGithub} />,
            text: "jessabejar",
        }, 
        {
            url: "https://codepen.io/jessabejar",
            label: "CodePen",
            icon: <FontAwesomeIcon icon={faCodepen} />,
            text: "jessabejar",
        },
        {
            url: "https://twitter.com/_jessicode",
            label: "Twitter",
            icon: <FontAwesomeIcon icon={faTwitter} />,
            text: "_jessicode",
        }, 
        {
            url: "https://dev.to/jessabejar",
            label: "The DEV Community",
            icon: <FontAwesomeIcon icon={faDev} />,
            text: "jessabejar",
        },
    ]
}

const TechPage = () => {
    return (
        <Page
            color="var(--tech)"
            main={data.main}
            aside={data.aside}
        >
            <ConnectSection
                links={data.links} 
                color="var(--tech)"
            />
        </Page>
    )
}

export default TechPage