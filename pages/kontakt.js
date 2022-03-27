import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import * as contactActions from "../redux/actions/contactActions";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import MessageResult from "../components/MessageResult";
import FormState from "../utils/FormState";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(true);
  const switchState = useSelector((state) => state.switch);
  const sendingState = useSelector((state) => state.contactMail);
  const dispatch = useDispatch();

  const hideLoading = () => {
    setLoading(false);
  };

  const spinnerStyle = css`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: block;
    margin: auto;
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: name,
      message: message,
      email: email,
      subject: subject,
    };
    if (
      !(
        (name.trim().length || email.trim().length || subject.trim().length) ===
        0
      )
    ) {
      dispatch(contactActions.sendMail(body));
    } else {
      alert(switchState.language.alert);
    }
  };

  useEffect(() => {
    if (sendingState.sendingResult === FormState.SUCCESS) {
      setName("");
      setMessage("");
      setSubject("");
      setEmail("");
    }
  }, [sendingState.sendingResult]);

  return (
    <Layout>
      <Helmet>
        <title>Kontakt i dane adresowe | Jacht Plast </title>
        <meta
          name="description"
          content="Zachęcamy do kontaktu w sprawie transportu jachtu. Udzielamy rzetelnych inforamcji z dziedziny przewozu łodzi. Ustalamy indywidualne cenniki zależne od gabarytu łodzi oraz miejsca dostarczenia"
        />
         <link rel="canonical" href="https://www.jacht-plast.pl/kontakt" />
      </Helmet>
      <div className={"contact_div"}>
        <h1>{switchState.language.contactHeaderMain}</h1>
        <h2>{switchState.language.contactHeader}</h2>
        <div className={"contact_content"}>
          <div
            className={"contact_data"}
            dangerouslySetInnerHTML={{
              __html: switchState.language.contactText,
            }}
          />

          <form
            id="contact-form"
            className={"contact_form"}
            method="POST"
            role={"form"}
            onSubmit={handleSubmit}
          >
            <input
              placeholder={switchState.language.formName}
              type={"text"}
              name={"name"}
              id={"name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder={"Email"}
              type={"text"}
              name={"email"}
              id={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder={switchState.language.formTopic}
              type={"text"}
              name={"subject"}
              id={"subject"}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              id={"message"}
              name={"message"}
              value={message}
              placeholder={switchState.language.formMessage}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div>
              <button
                type="submit"
                disabled={sendingState.isButtonLocked}
                className={
                  sendingState.isButtonLocked
                    ? "submitButton lockedButton"
                    : "submitButton"
                }
              >
                {switchState.language.formSend}
              </button>
              <MessageResult result={sendingState.sendingResult} />
            </div>
          </form>
        </div>
        <div className={"map_div"}>
          {loading ? (
            <BounceLoader
              css={spinnerStyle}
              className={"spinner"}
              sizeUnit={"px"}
              size={100}
              color={"#3f89a2"}
              loading={true}
            />
          ) : null}
          <div className="google_maps">
            <iframe
              title={"Jacht-Plast Google Maps Localization"}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9945.949450330274!2d20.4618076!3d51.4492078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72536c3f299847fc!2sPHUP%20JACHT-PLAST!5e0!3m2!1spl!2spl!4v1571140334742!5m2!1spl!2spl"
              onLoad={hideLoading}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
