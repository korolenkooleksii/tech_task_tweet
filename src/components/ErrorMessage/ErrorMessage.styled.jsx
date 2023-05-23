import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: ${(p) => p.theme.colors.dark};
`;

export const Bold = styled.b`
  font-size: 64px;
`;

export const Text = styled.p`
  font-size: 30px;
`;
