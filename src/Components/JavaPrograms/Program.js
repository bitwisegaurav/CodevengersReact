import React from 'react';
import '../css/program.css';

export default function Program(props) {
  return (
    <main id='program-main'>
      <section className="content1">
        <h1 className="title">{props.no}. {props.title}</h1>
        <div className="codeblock">
          <p className="codetitle">Code :</p>
          <div className="code">
            <pre>{code}</pre>
          </div>
        </div>
        <div className="output">
          <p className="codetitle">Output :</p>
          <img src="../examples/javaPrograms/1.png" alt="output" />
        </div>
      </section>
    </main>
  )
}

let code = `class one{
    public static void main(String args[])
    {
        System.out.println("Hello World!");
    }
}`;