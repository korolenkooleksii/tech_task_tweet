import styled from "@emotion/styled";

export const CardBox = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 20px;
  overflow: hidden;
  background-image: url("./logo.webp"),
    url("./picture.webp"),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 76px 22px, 308px 168px, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top 20px left 20px, top 28px left 36px, center;
`;

export const Line = styled.div`
  position: absolute;
  top: 50%;
  width: 380px;
  height: 8px;
  background-color: ${(p) => p.theme.colors.fiolo};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const BoxImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 8px solid ${(p) => p.theme.colors.fiolo};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 1.1;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.fiolo};
`;

export const BtnFollow = styled.button`
  width: 196px;
  padding: 14px 0;
  margin-bottom: 36px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  background-color: ${(p) => p.theme.colors.fiolo};
  color: ${(p) => p.theme.colors.secondary};
`;

export const BtnFollowing = styled.button`
  min-width: 196px;
  padding: 14px 0;
  margin-bottom: 36px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: ${(p) => p.theme.shadow.button};
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  background-color: ${(p) => p.theme.colors.green};
  color: ${(p) => p.theme.colors.secondary};
`;
