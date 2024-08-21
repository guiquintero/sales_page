import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const LogoLoja = styled.img`
  width: 120px;
  height: 120px;
  margin: 20px auto;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 2fr));
  gap: 1.5rem;
  margin: 1rem;
`;

export const Card = styled.div`
  height: 200px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4), 0 6px 20px rgba(0, 0, 0, 0.5); /* Sombra 3D */
  transition: transform 0.3s ease;
  a {
    text-decoration: none;
  }
  img {
    width: 100%;
    height: 65%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  h1 {
    background-color: transparent;
    font-size: 1.05rem;
    font-family: "Roboto", sans-serif;
    color: #282828;
    margin: 5px 10px;
  }
`;

export const Stars = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  position: absolute;
  bottom: 5px;
  right: 15px;
  svg{
    background-color: transparent;
    color: #FFD700;
  }
  span{
    margin-left: 5px;
    background-color: transparent;
    color: #282828;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  };
`;
