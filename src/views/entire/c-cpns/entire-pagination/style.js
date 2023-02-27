import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page{
      margin: 0 9px;
      &:hover {
        text-decoration: underline;
      }
    }
    .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
      background-color: black;
      color: white;
      
    }

    .desc {
      margin-top: 16px;
      color: #222;
    }
  }
`
