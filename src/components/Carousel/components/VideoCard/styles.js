import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export const Container = styled.div`
  border: 2px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: ${(props) => props.border};
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: all 0.5s;
  /*&:hover,
  &:focus {
    transform: scale(1.5);
    margin: 0 80px;
  } */
`;


export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
