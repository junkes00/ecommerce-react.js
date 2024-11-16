import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  align-content: center;

  gap: 2.5rem;
  padding: 1.25rem;
  /* max-width: 2400px; */

  .logo {
    font-size: 2rem;
    font-weight: bold;
    color: #000000;
    margin-left: 5rem;
  }

  .header-menu {
    display: flex;
    padding: 0px;
    gap: 1.5rem;
    list-style: none;
    justify-content: space-between;

    & a {
      display: inline-block;
      text-decoration: none;
    }
  }

  .input-search {
    width: 36.062rem;
    padding: 12px 16px;
    border-radius: 1rem;
    background-color: #f0f0f0;
    /* border-color: #f0f0f0; */
    /* color: rgba(0, 0, 0, 0.4); */
  }

  input:focus {
    border-color: inherit;
  }

  .header-user-data {
    display: flex;
    gap: 0.875rem;
    background: blue;

    & svg {
      width: 24px;
      height: 24px;
      background-color: red;
    }
  }
`;
