import styled from "@emotion/styled";

export const TweetsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const ListBox = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  color: ${(p) => p.theme.colors.aqua};
`;

export const FilterBoard = styled.div`
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 5;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
`;

export const Filter = styled.ul`
  display: flex;
  gap: 15px;
`;

export const Item = styled.li``;

export const Button = styled.button`
  padding: 5px 20px;
  border: 1px solid ${(p) => p.theme.colors.primary};
  border-radius: 6px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: ${(p) => p.theme.shadow.button};
  color: ${(p) => p.theme.colors.primary};
  background-color: transparent;
  transition: all 250ms ease-in-out;

  :hover {
    background-color: ${(p) => p.theme.colors.transGreen};
    border: 1px solid ${(p) => p.theme.colors.transGreen};
  }

  :focus {
    background-color: ${(p) => p.theme.colors.transGreen};
    border: 1px solid ${(p) => p.theme.colors.transGreen};
  }
`;

export const LoadMore = styled.div`
  margin: 30px 30px;
`;

export const Board = styled.div`
  display: flex;
  justify-content: center;
  max-width: 450px;
  margin: 30px 30px;
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: ${(p) => p.theme.shadow.primary},
    ${(p) => p.theme.shadow.secondary}, ${(p) => p.theme.shadow.third};
  background-color: ${(p) => p.theme.colors.green};
`;

export const Info = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.secondary};
`;

