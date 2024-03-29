import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faYoutube, faGithub, faCodepen, faTwitter, faDev, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const connectIcons = {
    dance: {
        links: [
            {
                url: "https://themovingprayer.com",
                label: "The Moving Prayer Website",
                icon: <FontAwesomeIcon icon={faLink} />,
                text: "themovingprayer.com",
            }, 
            {
                url: "https://youtube.com/themovingprayer",
                label: "The Moving Prayer YouTube Channel",
                icon: <FontAwesomeIcon icon={faYoutube} />,
                text: "themovingprayer",
            },
            {
                url: "https://instagram.com/themovingprayer",
                label: "The Moving Prayer Instagram Page",
                icon: <FontAwesomeIcon icon={faInstagram} />,
                text: "themovingprayer",
            }, 
            {
                url: "https://facebook.com/themovingprayer",
                label: "The Moving Prayer Facebook Page",
                icon: <FontAwesomeIcon icon={faFacebook} />,
                text: "themovingprayer",
            },
        ]
    },
    wellness: {
        links: [
            {
                url: "https://instagram.com/jessdoeswellness",
                label: "Instagram",
                icon: <FontAwesomeIcon icon={faInstagram} />,
                text: "jessdoeswellness",
            }, 
        ]
    },
    tech: {
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
    },
    about: {
        links: [
            {
                url: "https://www.linkedin.com/in/jessicaabejar/",
                label: "LinkedIn",
                icon: <FontAwesomeIcon icon={faLinkedin} />,
                text: "Jessica Abejar",
            },
        ]
    }
}