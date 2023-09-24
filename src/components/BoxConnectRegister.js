import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../usables/Button";
import { MdLogin, MdOutlinePassword } from "react-icons/md";
import FormConnect from "./Forms/FormConnect";
import FormRegister from "./Forms/FormRegister";

const BoxConnectRegister = () => {
  const [connect, setConnect] = useState(true);
  const [mdpForget, setMdpForget] = useState("");
  return (
    <StyledBoxConnectRegister onClick={(e) => e.stopPropagation()}>
      {mdpForget ? (
        <Button
          text={"Connexion"}
          icon={<MdOutlinePassword />}
          actionClick={() => setMdpForget("")}
        />
      ) : (
        <Button
          text={connect ? "S'inscrire" : "Connexion"}
          icon={<MdLogin />}
          actionClick={() => setConnect(!connect)}
        />
      )}
      {connect ? (
        <FormConnect setMdpForget={setMdpForget} mdpForget={mdpForget} />
      ) : (
        <FormRegister setConnect={setConnect} />
      )}
    </StyledBoxConnectRegister>
  );
};

export default BoxConnectRegister;
const StyledBoxConnectRegister = styled.div`
  height: 40vh;
  width: 40%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: greenyellow;
`;
