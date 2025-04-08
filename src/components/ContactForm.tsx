import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [message, setMessage] = useState("");
  const [enquiryType, setEnquiryType] = useState(""); // new state for enquiry type
  const [hearAbout, setHearAbout] = useState(""); // new state for referral source

  const handleSubmit = async (e: any) => {
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
        from_name: name,
        from_email: email,
        client_phone: phone,
        event_time: date,
        event_venue: venue,
        to_name: "JAT Photography",
        message: message,
        enquiry_type: enquiryType, // new field for enquiry type
        referral_source: hearAbout, // new field for referral source
      },
    };

    try {
      const res = await axios.post(api_url, data);
      console.log(res.data);
      // Reset all fields
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setVenue("");
      setMessage("");
      setEnquiryType("");
      setHearAbout("");
      toast.success(
        "Congratulations!, You've successfully booked our session. We will reach out shortly!"
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Session booking failed, please try again");
    }
  };

  return (
    <div className="flex justify-center py-10">
      <div className="w-full px-10 md:px-20 p-8 rounded-lg  ">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <p className="pb-3 text-black">Name (required)</p>
            <div className="flex flex-col md:flex-row gap-6 pb-3">
              <div className="w-full">
                <label className="block text-black">First & Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-500 bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-300 text-black"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <p className="pb-3 text-black">Email (required)</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-500 bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-300 text-black"
              required
            />
          </div>

          <div>
            <p className="pb-3 text-black">Phone (required)</p>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-500 bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-300 text-black"
              required
            />
          </div>

          <div>
            <p className="pb-3 text-black">Event Date (required)</p>
            <input
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-500 bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-300 text-black"
              required
            />
          </div>

          <div>
            <p className="pb-3 text-black">
              Event Venue, City, State (required)
            </p>
            <input
              type="text"
              placeholder="Enter event venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="border border-gray-500 bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-300 text-black"
              required
            />
          </div>

          <div>
            <p className="pb-3 text-black">Type of Enquiry (required)</p>
            <select
              value={enquiryType}
              onChange={(e) => setEnquiryType(e.target.value)}
              className="border border-gray-500 bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-300 text-black"
              required
            >
              <option value="">Select an enquiry type</option>
              <option value="General">General</option>
              <option value="Booking">Booking</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <p className="pb-3 text-black">
              How did you hear about us? (required)
            </p>
            <select
              value={hearAbout}
              onChange={(e) => setHearAbout(e.target.value)}
              className="border border-gray-500 bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-300 text-black"
              required
            >
              <option value="">Select an option</option>
              <option value="Google">Google</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-black font-medium">
              Leave a message
            </label>
            <textarea
              placeholder="Your message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-500 bg-transparent rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-400 border border-gray-500 text-black py-3 px-4 rounded-3xl font-semibold hover:bg-gray-300 transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
