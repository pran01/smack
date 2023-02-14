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
    <section>
      <input
        type="email"
        className="border-2 border-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={(e) => sendEmail(e)} className="w-32 h-12 bg-blue-500">
        Send Link
      </button>
    </section>
  );
};
export default MagicLink;
