import React from 'react';
import styled from "styled-components";

const Hero = () => {
  return (
    <>
      <img className='imgggg' src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg" alt="" />
    <HeroWrapper className="h-400">
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1>Skills that drive you forward</h1>
          <p>Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.</p>
        </div>
      </div>
    </HeroWrapper>
    </>
  )
}

const HeroWrapper = styled.div`
  // background: url("https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg") center/cover no-repeat;
  // height: 300px;

  .container{
    .hero-content{
      background-color: var(--clr-white);
      max-width: 400px;
      width: 100%;
      margin-left: 0;
      padding: 20px;

      h1{
        font-size: 32px;
        margin-bottom: 5px;
      }
      p{
        font-size: 15px;
      }
    }
  }
  @media screen and (min-width: 480px) {
    body {
      background-color: lightgreen;
    }
  }
`;

export default Hero