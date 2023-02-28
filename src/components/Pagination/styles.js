import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const PageButton = styled.button`
  border: none;
  background-color: ${(props) => (props.active ? "#8218c9" : "#f2f2f2")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#5b2085" : "#ddd")};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
    color: #666;
  }

  @media (max-width: 768px) {
    padding: 5px;
    font-size: 14px;
  }
`;
