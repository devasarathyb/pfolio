import React, { useState } from 'react'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import {WebDesign} from './WebDesign'
import {ProductDesign} from './ProductDesign'
import {Development} from './Development'

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
]
const Section = styled.div`
height:100vh;
scroll-snap-align:center;
display: flex;
justify-content: center;
 `
const Container = styled.div`
 width: 1400px;
 display: flex;
 justify-content: space-between;
 @media only screen and (max-width:348px){
   width: 100%;
   flex-direction: column;
    }
  `
const Left = styled.div`
flex : 1;
display: flex;
align-items: center;

@media only screen and (max-width:348px){
  padding: 20px;
  justify-content: center;
    }
  
   `
const List = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: column;
   gap: 20px;
    `
const ListItems = styled.li`
    font-size: 60px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px white;
    position: relative;
    ::after{
      content: "${(props)=>props.text}";
      position: absolute;
      top:0;
      left: 0;
      color: pink;
      width: 0px;
      overflow: hidden;
      white-space: nowrap;
    }
    &:hover{
      ::after{
        animation: moveText 0.5s linear both;
        
        @keyframes moveText {
          to{
            width: 100%;
          }
        }
      }
    }
    @media only screen and (max-width:348px){
  font-size: 24px;
  color: white;
  -webkit-text-stroke: 0px ;

    }
     `
const Right = styled.div`
   flex : 1;
    `

export const Works = () => {
  const [work,setWork]=useState("Web Design")
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item)=> (
            <ListItems text={item} onClick={()=>setWork(item)}>
              {item}
            </ListItems>))}
          </List>
        </Left>
        <Right>
              {work === 'Web Design' ? (<WebDesign/>) : work === "Development" ? (<Development/>) : (<ProductDesign/>)}
        </Right>
      </Container>
    </Section>
  )
}
