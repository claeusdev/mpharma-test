import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

export const M10 = styled.div`
  margin: 10px;
  margin-top: 25px;
`;

export const FormField = styled.div`
  background: white;
  padding: 20px;
  flex: 1;
  height: 450px;
`

export const ProductList = styled.div`
  flex: 2;
  margin-left: 10px;
`
export const ProductItem = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  margin: 0 0 10px 0;
  box-shadow: 0px 3px 8px -4px rgba(0, 0, 0, 0.15);
  display: block;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  .actions {
    span {
      padding-right: 10px;
    }
  }
`;

