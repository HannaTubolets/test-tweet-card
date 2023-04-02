import styled from 'styled-components';

export const Card = styled.li`
  position: relative;
  width: 380px;
  height: 480px;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  color: #ebd8ff;
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    #0000003b;

  ::after {
    top: 46%;
    content: '';
    height: 8px;
    width: 100%;
    display: block;
    position: absolute;
    bottom: 0px;
    background-color: rgb(235, 216, 255);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 3.43693px 3.43693px,
      rgb(174, 123, 227) 0px -1.71846px 3.43693px inset,
      rgb(251, 248, 255) 0px 3.43693px 2.5777px inset;
  }
`;

export const UpperImg = styled.img`
  margin: 0 auto;
  height: 130px;
`;
export const UserImg = styled.img`
  margin: 0 auto;
  position: relative;
  z-index: 1;
  border-radius: 150px;
  border: 7px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Txt = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: #5cd3a8;
`;

export const Name = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 16px;
  margin-top: 16px;
  color: #ebd8ff;
`;

export const Numbers = styled.span`
  color: #e5c057;
`;

export const Logo = styled.img`
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
`;

export const Btn = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #00000040;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
  margin-top: 24px;
  color: #373737;

  transition-property: background-color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #5cd3a8;
    transform: scale(1.05);
  }

  &.active {
    background-color: #5cd3a8;
  }
`;
