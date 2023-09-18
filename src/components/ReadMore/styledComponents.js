// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
    height: 100vh;
    padding-top: 20px;
    padding-bottom: 20px;
   
`

export const ResponsiveContainer = styled.div`
    width: 90%;
    max-width: 1140px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
`

export const Heading = styled.h1`
    color: #1e293b;
    font-family: "Roboto";
    font-size: 28px;
    text-align: center;
`

export const SubText = styled.p`
    color: #334155;
    font-family: "Roboto";
    font-size: 17px;
    text-align: center;
    margin-top: 5px;
`
export const ImageContainer = styled.div`
    width: 60%;
    height: 60%;
    margin:auto;
    display:flex;
    flex-direction: column;

    @media (max-width: 576px){
        width: 100%;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    margin-top: 5px;
    
`

export const Description = styled.p`
    color: #334155;
    font-family: "Roboto";
    font-size: 15px;
    @media (max-width: 576px){
        font-size: 14px;
    }
`

export const Button = styled.button`
    color: #ffffff;
    font-family: "Roboto";
    border: none;
    border-radius: 8px;
    height: 40px;
    width: 100px;
    cursor: pointer;
    background-color: #1f81ff;
    align-self: center;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 30px;
`