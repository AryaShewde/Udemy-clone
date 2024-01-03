import React from 'react'
import styled from "styled-components";

const TopBanner = () => {
    return (
        <>
            <TopBannerset>
                <div className='top'>
                    <h1 className='heading'>Trusted by over 15,000 companies and millions of learners around the world</h1>
                    <div className='imgset'>
                        <div className='imgsec'>
                            <img className='mainimg' src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg" alt="" />
                            <img className='mainimg' src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg" alt="" />
                            <img className='mainimg' src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg" alt="" />
                            <img className='mainimg' src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg" alt="" />
                        </div>
                        <div className='imgsec'>
                            <img className='mainimg' src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg" alt="" />
                            <img className='mainimg' src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg" alt="" />
                            <img className='mainimg' src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg" alt="" />
                            <img className='mainimg' src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg" alt="" />
                        </div>
                    </div>
                </div>
            </TopBannerset>
        </>
    )
}

const TopBannerset = styled.div`
  

.top{
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    text-align: center;
    margin-top: 50px;
    padding: 40px 0px;
    background: #80808024;
    .heading{
        font-size: 15px;
        padding: 0px 15px;
    }
    .imgset{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-self: center;
        .imgsec{
            display: flex;
            flex-direction: row;
            gap: 5vw;
            margin: 20px 2.5vw;
            .mainimg{
                width: 62px;
            }
            @media screen and (max-width: 700px) {
                .mainimg{
                    width: 50px;
                }
            }
        }
    }
    @media screen and (max-width: 1000px) {
        .imgset{
            flex-direction: column;
        }
    }
}
`;


export default TopBanner
