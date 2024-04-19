'use client';

import { Button, Input, Progress, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

export default function Contact() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidMessage, setIsValidMessage] = useState(false);

  const [isSendClicked, setIsSendClicked] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setIsValidEmail(emailRegex.test(email));
    setIsValidName(name.trim() !== '');
    setIsValidMessage(message.trim() !== '');
  }, [name, email, message]);


  async function send() {
    setIsPopupOpen(false);
    setIsSendClicked(true);

    if (isValidName && isValidEmail && isValidMessage) {
      setIsPopupOpen(true);
      console.log("passed");

      const data = {
        name: name,
        email: email,
        message: message
      }

      const response = await fetch("https://formspree.io/f/xwkgaobv", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })

      if (!response.ok) {
        throw new Error(
          `${response.status} : ${response.text}`
        )
      }

      setIsSendClicked(false);
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  return (
    <main
      className="flex-1 flex flex-col justify-center items-center
                py-unit-3xl px-unit-xl gap-unit-xl
                md:pt-unit-3xl md:pb-unit-2xl md:px-unit-7xl"
    >
      <div
        className="flex flex-col items-center gap-unit-sm 
                  mb-unit-sm
                  md:mb-unit-xl"
      >
        <h1
          className="text-text font-bold
                      text-3xl
                      md:text-5xl"
        >
          Contact Me
        </h1>
        <Progress value={100} size="sm" className="w-3/4" />
      </div>

      <Input
        value={name}
        onValueChange={setName}
        label="Name"
        variant="bordered"
        color="primary"
        classNames={{
          label: "text-text font-semibold"
        }}
        isInvalid={(!isValidName && isSendClicked)}
        errorMessage={(!isValidName && isSendClicked) && "Name cannot be blank."}
      />

      <Input
        type="email"
        value={email}
        onValueChange={setEmail}
        label="Email"
        variant="bordered"
        color="primary"
        classNames={{
          label: "text-text font-semibold"
        }}
        isInvalid={(!isValidEmail && isSendClicked)}
        errorMessage={(!isValidEmail && isSendClicked) && "Plese enter a valid email."}
      />

      <Textarea
        value={message}
        onValueChange={setMessage}
        label="Message"
        variant="bordered"
        color="primary"
        classNames={{
          label: "text-text font-semibold"
        }}
        isInvalid={(!isValidMessage && isSendClicked)}
        errorMessage={(!isValidName && isSendClicked) && "Message cannot be blank."}
      />

      <Button
        onPress={send}
        color="primary"
        variant="ghost"
        className="md:self-end md:w-1/4 w-full"
      >
        Send
      </Button>

      {(isPopupOpen) &&
        <div
          className="flex flex-row rounded-xl bg-secondary bg-opacity-25 w-1/2 justify-between items-center
                      p-unit-sm"
        >
          <p
            className="text-text
                        text-sm"
          >
            Message Sent!
          </p>

          <Button
            size="sm"
            isIconOnly
            className="bg-transparent"
            onClick={() => setIsPopupOpen(false)}
          >
            <MdClose className="size-unit-md md:size-unit-lg" />
          </Button>

        </div>
      }

    </main>
  )
}
