import styled from 'styled-components';

const Navbarstyle = styled.section`

.navigation .active{
  color:yellowgreen;
  border-bottom: 2px soild yellowgreen;
}
  .navigationColor {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 10px 0;
  }

  .navLink {
    text-decoration: none;
    color: #333;
    font-weight:700;
    margin-left:2rem; 
  }
  .loginbtn{
    padding:5px 15px ;
    border-radius:30px;
    background:yellowgreen;
  }

  .mobile-navbar {
    position: relative;
    display: none;
  }

  .menuIcon {
    position: absolute;
    z-index:998;
    right:1rem;
    top:-.3rem;
  }
  .cancelIcon{
    position: absolute;
    right:.7rem;
    z-index:999;

  }
  .mobile-menu {
    width: 100%;
    display: none;
  }

  .cancelMenu {
    text-align: center;
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    .navigation .navLink {
      display: none;
    }

    .mobile-menu {
      position: fixed;
      display: flex;
      flex-direction: column;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      z-index: 990;
      align-items: center; /* Added to center all names */
      justify-content: center; /* Added to center all names */
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(2px);
    }

    .mobile-menu .navLink {
      padding: 10px;
      font-size:2rem;
      font-weight:700;
      text-align:center;
    }

    .mobile-navbar {
      display: block;
      padding: 10px;
    }
  }
`;

export default Navbarstyle;
