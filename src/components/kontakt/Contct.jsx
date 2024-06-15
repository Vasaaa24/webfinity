import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const jmeno = useRef();
  const posta = useRef();
  const zprava = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (jmeno.current.value !== "" && posta.current.value !== "" && zprava.current.value !== "") {
      emailjs
        .sendForm("service_xeklzjk", "template_r1zurmu", form.current, {
          publicKey: "fhRLeLb_nesTphVdE",
        })
        .then(
          () => {
            toast.success("Zpráva byla odeslána");
            jmeno.current.value = "";
            posta.current.value = "";
            zprava.current.value = "";
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      toast.error("Vyplňte všechna pole");
    }
  };
  return (
    <>
    <section className="contact" id="contact">
      <h2 className="heading">
        Objednat <span>Web</span>
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-group">
          <div className="input-box">
          <input ref={jmeno} type="text" className="zapis" name="from_name" placeholder=" Jméno"/>
          <input ref={posta} type="email" className="zapis emailCast" name="from_email" placeholder="Email" />
          </div>
        </div>
        <div className="input-group-2">
          <textarea ref={zprava} name="message" className="zprava" placeholder="Zpráva..."
            cols="30"
            rows="10"

          ></textarea>
          
          <input type="submit" value="Poslat zprávu" className="btn" />
        </div>
      </form>
    </section>
    <ToastContainer/>
    </>
  );
};

export default Contact;