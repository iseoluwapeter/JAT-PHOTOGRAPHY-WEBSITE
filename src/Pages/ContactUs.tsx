import { assets } from "../assets/assests";
import ContactForm from "../components/ContactForm";
import FormDetais from "../components/FormDetais";


const ContactUS = () => {
  return (
    <>
      <div className="relative bg-black/40">
        <img
          src={assets.ContactUs_Img}
          alt=""
          className="w-full  h-[550px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">CONTACT</h1>
        </div>

      </div>
        <ContactForm/>
    </>
  );
}

export default ContactUS;
