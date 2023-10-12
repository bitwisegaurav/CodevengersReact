import React from 'react';
import Box from './Box';
import '../css/courses.css';

export default function Courses() {
  return (
    <section id="courseSection">
      <div className="courseCont">
        <div id="courses">Courses</div>
        <div className="carousel">
          <div className="boxes">
            {boxes.map((box) => {
                return <Box lang={box.lang} about={box.about} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


let boxes = [
    {
        lang : 'MySQL',
        about: 'MySQL is a powerful and popular open-source relational database management system (RDBMS) used for storing and retrieving data in a structured manner. It is used by a wide range of organizations and individuals for various purposes, including data warehousing, e-commerce, and content management.'
    },
    {
        lang : 'PL/SQL',
        about: 'PL/SQL is a procedural extension of SQL, which stands for Structured Query Language. It is a programming language used in Oracle Database management systems to create and manage database-centric applications. PL/SQL is used to write stored procedures, functions, and triggers that are stored in the database and executed when needed. This makes it an essential tool for building efficient, reliable, and scalable database applications.'
    },
    {
        lang : 'Java',
        about: `Java is a versatile and widely-used programming language renowned for its platform independence and robustness. Its object-oriented nature and extensive library support make it a popular choice for building a wide range of applications, from web and mobile to enterprise-level software. Java's strong community and continuous updates ensure its relevance in the ever-evolving world of software development.`
    },
    {
        lang : 'Java Programs',
        about: `A dedicated section housing Java programs offers a practical resource for developers and learners. It provides a structured environment to showcase Java's versatility, from basic "Hello World" examples to complex algorithms and applications. Such a section not only facilitates hands-on practice but also serves as a reference point for programmers seeking solutions and insights into Java's capabilities.`
    },
    {
        lang : 'Php',
        about: `PHP is a versatile and widely-used scripting language for web development. It empowers developers to create dynamic, interactive, and feature-rich websites and web applications. PHP seamlessly integrates with HTML, making it easy to embed dynamic content within web pages. Whether you want to build a simple contact form or a complex e-commerce platform, PHP provides the tools and flexibility to bring your web projects to life.`
    },
    {
        lang : 'C++',
        about: `C++ is a powerful and widely used programming language that combines the features of both low-level and high-level languages. C++ is known for its efficiency, performance, and versatility, making it popular for system-level programming, game development, and applications where speed and control are essential. It features a rich standard library and has a strong community of developers.`
    }
]