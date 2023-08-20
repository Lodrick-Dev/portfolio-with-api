import React from "react";
import { styled } from "styled-components";
import TitleMedium from "../../usables/TitleMedium";
import Button from "../../usables/Button";

const FormContact = () => {
  return (
    <StyledFormContact>
      <div className="before-form">
        <TitleMedium text={"Contactez-nous"} />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        necessitatibus perspiciatis quo sit, blanditiis explicabo atque mollitia
        recusandae iure voluptatem numquam consequatur quasi reprehenderit rem
        architecto animi, temporibus consectetur ea.
      </div>
      <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Votre message"
        ></textarea>
        <input type="hidden" />
        <Button text={"Envoyer"} />
      </form>
    </StyledFormContact>
  );
};

export default FormContact;

const StyledFormContact = styled.div`
  /* background: green; */
  background: rgba(115, 113, 113, 0.67);
  /* border: solid 2px green; */
  border-radius: 10px;
  padding: 24px;
  width: 70%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  .before-form {
    width: 30%;
  }
  form {
    width: 50%;
    padding: 10px;
    border: solid 2px red;
    /* background: red !important; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form > input {
    width: 70%;
    padding: 3px;
    font-size: 1.2em;
    margin: 10px 0px;
    outline: none;
    border: none;
    border-bottom: solid 2px #212121;
    border-radius: 3px;
  }
  form > input:focus {
    background: #5cc05c;
  }
  form > textarea {
    width: 70%;
    outline: none;
    border: none;
    border-bottom: solid 2px #212121;
    border-radius: 3px;
    padding: 3px;
    font-size: 1.2em;
  }
  form > textarea:focus {
    background: #5cc05c;
  }
`;
