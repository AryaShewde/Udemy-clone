import React from 'react'
import styled from "styled-components";

const Footer = () => {
    return (
        <>
            <div>
                <Footerstyle>
                    <footer className='footer'>
                        <div className='mainfooter'>Copyright &copy; 2023. All rights reserved.</div>
                    </footer>
                </Footerstyle>
            </div>
        </>
    )
}

const Footerstyle = styled.div`
  .footer{
    background-color: black;
    padding: 2rem 0px;
    text-align: center;
    color: white;
    .mainfooter{
        display: flex;
        justify-content: center;
        align-item: center;
        margin: auto;
    }
  }
//   @media screen and (min-width: 480px) {
//     body {
//       background-color: lightgreen;
//     }
//   }
`;

export default Footer
