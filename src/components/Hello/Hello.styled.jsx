import styled from "@emotion/styled";

export const DeskBoard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  padding: 20px 100px;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: ${(p) => p.theme.shadow.primary},
    ${(p) => p.theme.shadow.secondary}, ${(p) => p.theme.shadow.third};
  background-color: ${(p) => p.theme.colors.green};
`;

export const PrimaryText = styled.p`
  font-size: 36px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.secondary};
  text-align: center;
  padding: 2;
  max-width: 500px;
`;

export const SecondaryText = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.accent};
`;
