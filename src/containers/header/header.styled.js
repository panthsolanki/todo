import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  flex: row;
  justify-content: space-between;
  background-color: #333945;
  padding: 10px calc(10vmin);
  font-size: calc(10px + 2vmin);
  line-height: 24px;
  .NavLinkWrapper{
    .NavLink {
      margin-right: 15px;
      text-decoration: none;
      color: #DAE0E2;
      align-self: flex-end;
  
      &.selected{
        border-bottom: 1px solid #DAE0E2;
      }
    }
  }
`
export const Title = styled.div`
  color: #DAE0E2;
  font-size: calc(10px + 2vmin);
  line-height: 24px;
`