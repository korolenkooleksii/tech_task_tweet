import { Head, Nav, LinkPage } from "./Header.styled";

export const Header = () => {
  return (
    <Head>
      <Nav>
        <LinkPage to="/">Home</LinkPage>
        <LinkPage to="/tweets">Tweets</LinkPage>
      </Nav>
    </Head>
  );
};
