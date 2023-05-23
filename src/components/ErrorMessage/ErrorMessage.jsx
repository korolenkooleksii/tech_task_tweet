import { useNavigate } from "react-router-dom";
import { Button } from "../ListTweets/ListTweets.styled";
import { Wrapper, Bold, Text } from "./ErrorMessage.styled";

export const ErrorMessage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Bold>404</Bold>
      <Text>Sorry, we couldn`t fins this page :(</Text>
      <Button type="button" onClick={() => navigate("/")}>
        Go to HOME
      </Button>
    </Wrapper>
  );
};
