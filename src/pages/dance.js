import React from "react"
import Page from "../templates/page"

const data = {
    main: {
        title: "Dance",
        content: {
            __html: "<p>Dance has always been an integral part of my life, allowing me to fulfill some lifelong dreams. I've trained in various styles of dance from ballet to hip hop, Filipino folk dance to modern and contemporary dance. I began choreographing and performing since a young age and have been privileged to share my gift and love for dance across the world.</p><p>I have worked in various roles in the field and have previously worked at Alvin Ailey Dance Foundation as an arts administrator, BroadwayWorld.com  as a dance writer, and Disney Cruise Lines as a performer before starting my own sacred dance company The Moving Prayer. I was also chosen as one of nine emerging leaders in the U.S. dance filed to participate in Dance/USA's Institute of Leadership Training, where I was mentored by American sacred dance pioneer Carla de Sola.</p>"
        }
    }, 
    aside: {
        heading: "Career Highlights",
        items: [
            {
                title: "Emerging Leader and Mentee",
                description: "Dance/USA's Institute of Leadership Training (DILT), 2016 Cohort",
            },
            {
                title: "Main Presenter",
                description: "Santo Niño Parish Youth Day 2018, Lipa City, Batangas, Philippines",
            },
            {
                title: "Festival Performer",
                description: "World Youth Day 2013, Rio de Janeiro, Brazil",
            },
            {
                title: "Festival Performer",
                description: "World Youth Day 2016, Kraków, Poland",
            },
            {
                title: "Featured Mainstage Performer",
                description: "National Conference on Catholic Youth Ministry 2016, San Jose, California",
            },
            {
                title: "Archdiocesan Dance Troupe Coordinator (2014-2016), Mainstage Guest Performer (2015), Co-Host (2016), and Assistant Stage Manager (2017)",
                description: "New York Catholic Youth Day, Yonkers, NY",
            },
            {
                title: "Conference Presenter and Lecturer",
                description: "Sacred Dance Guild Festival 2015, Erie, Pennsylvania",
            },
            {
                title: "Trainee",
                description: "Gibney Dance's Institute of Community Action Training, January 2016 Cohort",
            },
        ]
    },
    links: [
        {
            url: "https://themovingprayer.com",
            label: "The Moving Prayer Website",
            icon: "",
            text: "themovingprayer.com",
        }, 
        {
            url: "https://youtube.com/themovingprayer",
            label: "The Moving Prayer YouTube Channel",
            icon: "",
            text: "themovingprayer",
        },
        {
            url: "https://instagram.com/themovingprayer",
            label: "The Moving Prayer Instagram Page",
            icon: "",
            text: "themovingprayer",
        }, 
        {
            url: "https://facebook.com/themovingprayer",
            label: "The Moving Prayer Facebook Page",
            icon: "",
            text: "themovingprayer",
        },
    ]
}

const DancePage = () => {
    return (
        <Page
            color="var(--dance)"
            main={data.main}
            aside={data.aside}
            links={data.links}
        />
    )
}

export default DancePage