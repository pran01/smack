import { useState } from "react";
import emailjs from "@emailjs/browser";
import { isValidEmail } from "email-js";

const MagicLink = () => {
  const [email, setEmail] = useState("");

  let templateParams = {
    to_email: email,
    link: `${window.location.href}pd345hdfjk&g3445/${email}`,
  };

  const sendEmail = (e: any) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    if (!isValidEmail(email)) {
      console.log("invalid mail");
      return;
    }

    emailjs
      .send(
        "service_w82g5vt",
        "template_j40efm9",
        templateParams,
        "user_stnrRKaHAZv1NLiMS5jLv"
      )
      .then(
        (result) => {
          // show the user a success message
          console.log("sent");
        },
        (error) => {
          // show the user an error
          console.error(error);
        }
      );
  };
  return (
    <section className="flex flex-col">
      <input
        type="email"
        placeholder="name@work-email.com"
        className="pt-2.5 px-3 pb-3.5 
          h-11 text-lg leading-4/3 rounded border-solid border border-[#D1D2D3] mb-5 w-96 text-[#1A1D21]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={(e) => sendEmail(e)} className="w-96 mb-5 text-lg h-11 font-bold bg-[#1264a3] rounded ">
        Send Link
      </button>
    </section>
  );
};
export default MagicLink;
