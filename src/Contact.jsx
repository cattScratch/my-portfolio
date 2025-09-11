import {useRef} from "react";
import emailjs from "@emailjs/browser";

function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_ccfljmg","template_0ho454e",form.current,"q5NKY-idJ_DGE8aVV")
        .then((result) => {
            alert("Message sent successfully!"); // success alert
        form.current.reset(); // optional: clear the form after sending
        })
        .catch((error) => {
            alert("Failed to send message. Please try again."); // failure alert
            console.error(error); // optional: log the error
    });
    ;}
    
    return(
        <>
        <h2 className="font-bold text-2xl lg:text-5xl ml-1 lg:ml-10 relative">
            Contact 
        </h2>
        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 pt-4">
            <input id="email" type="email" name="email" required className="p-1 mb-[4vh]  lg:ml-[4vh] lg:mt-[2vh] lg:w-[40vh] 2xl:ml-[4vh] 2xl:mt-[2vh] 2xl:w-[40vh] bg-[#5c5c5c3f] text-white " placeholder="Enter Your Email here"/>
            <input id="name" type="text" name="name" required className="p-1 mb-[4vh]  lg:ml-[4vh]  lg:w-[40vh] 2xl:ml-[4vh] 2xl:w-[40vh] bg-[#5c5c5c3f] text-white " placeholder="Enter Your Name"/>
            <input id="subject" type="text" name="subject" required className="p-1 mb-[4vh]  lg:ml-[4vh] lg:w-[40vh] 2xl:ml-[4vh] 2xl:w-[40vh] bg-[#5c5c5c3f] text-white " placeholder="Subject"/>
            <textarea id="message" name="message" required className="resize-none p-2 h-50 mb-[4vh] lg:ml-[4vh] lg:w-[126vh] 2xl:ml-[4vh] 2xl:w-[126vh] bg-[#5c5c5c3f] text-white" placeholder="Enter your message here..."/>
            <button id="sendButoon" type="Submit" 
            className="p-3 mb-5 bg-[#5c5c5c3f] lg:ml-[4vh] lg:w-[126vh] font-bold text-white shadow-black shadow-sm rounded-[1vh] hover:bg-green-600 active:bg-green-800 active:scale-95 px-4 py-2 transform transition duration-150 ease-in-out">
            Submit</button>
        </form>
        </>
);
} export default Contact