import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FormDetais = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const api_url = import.meta.env.VITE_API_URL;

    const data = {
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
        from_name: firstName,
        from_email: email,
        event_time: date,
        event_venue: venue,
        to_name: "JAT Photography",
        message: message,
      },
    };

    //send mail using email.js
    try {
      const res = await axios.post(api_url,data);
      console.log(res.data);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDate("");
      setVenue("");
      setMessage("");
      toast.success("Congratulations!, You've successfully booked our session. We will reach out shortly!")
    } catch (error) {
      console.log("error fetching data:", error);
      toast.error("Session booking failed, please try again")
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="text-white">
          <p className="pb-3">Name (required)</p>
          <div className="flex flex-col md:flex-row gap-6 pb-3">
            <p className="w-full">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border border-white rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
            </p>

            <p className="w-full">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border border-white rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
            </p>
          </div>
        </div>

        <div className="text-white">
          <p className="pb-3">Email {""} (required)</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-white rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-300"
            required
          />
        </div>

        <div className="text-white">
          <p className="pb-3">Phone (required)</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-white rounded-md p-3 w-ful focus:outline-none focus:ring-2 focus:ring-red-300"
            required
          />
        </div>

        <div className="text-white">
          <p className="pb-3">Event Date (required)</p>
          <input
            type="date"
            placeholder="Enter your name"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            className="border border-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-300 "
            required
          />
        </div>

        <div className="text-white">
          <p className="pb-3">Event Venue, City, State (required)</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="border border-white rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-300"
            // required
          />
        </div>

        <div>
          <label className="block text-white font-medium">
            Leave a message
          </label>
          <textarea
            placeholder="Your Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className=" bg-red-400 border border-white text-white py-3 px-4 rounded-3xl font-semibold hover:bg-gray-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};


  

export default FormDetais;
