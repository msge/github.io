/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Data Analysis",
    description: "Professional Data analysis for research projects both national and international."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Training",
    description: "I provide high-quality traing for training centers like Basic programming web developmenet and personal development at a professional level."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <h1>  Welcome to my portfolio!</h1>
      <p>
      I'm a seasoned professional passionate about technology and education. With four years of experience in technical assistance and
       teaching at prestigious institutions, I've honed a diverse skill set.
      </p>

      <p>
    
      Proficient in programming languages like JAVA, Python, and C++, as well as web development tools such 
      as HTML, CSS, JS, PHP Laravel, and ReactJS, Mongo , Express, React and Node.
      I'm also skilled in hardware and software maintenance, including network installations.
</p>
<p>I am Msge Desta, holding a Master's degree in Artificial Intelligence and Data Science .
  My academic journey has equipped me with expertise in deep learning, machine learning, big data analytics, 
  and computer vision. I have conducted research   on a meteorological drought predictive model using LSTM-PINN, 
  incorporating explainable AI (XAI) techniques.


   </p><p>
As a Data Analyst at SART Research Consultants, I leverage my analytical skills to drive impactful research projects. My certification in Music Genre Classification using Deep Learning underscores my dedication to advancing knowledge in the field.
Key Responsibilities:

    Design and manage ODK Central for efficient data collection.
    Clean and validate datasets to ensure accuracy and reliability.
    Conduct statistical analyses using Python and R.
    Develop interactive dashboards with Plotly, Dash, and Shiny.
    Prepare comprehensive reports and presentations to convey findings.
    Collaborate with cross-functional teams to address data needs.
    Communicate insights effectively to stakeholders.

</p><p>
Driven by a passion for innovation, I'm eager to collaborate on projects that demand technical expertise,
 educational insight, and a dedication to progress.

Let's connect and explore opportunities together.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - clients
    --> */}

    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/wollo.jpeg" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/mekdel.jpeg" alt="client logo"/>
          </a>
        </li>

        
      </ul>

    </section>

  </article>
  )
}

export default About
