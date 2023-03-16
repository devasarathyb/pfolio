import React, { useRef,useState } from 'react';
import styled from 'styled-components'
import Map from './Map'
import emailjs from '@emailjs/browser';


const Section = styled.div`
height:100vh;
scroll-snap-align:center;
 `
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap:50px;
  `
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width:348px){
  
  justify-content: center;
    }
   `

const Title = styled.h1`
  font-weight: 100;
 `
 const Form = styled.form `
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media only screen and (max-width:348px){
  width: 300px;
    }
  `
const Input = styled.input`
 padding: 20px;
 background-color: #e7e3e3;
 border: none;
 border-radius: 5px;
  `
const Textarea = styled.textarea`
  padding: 20px;
  background-color: #e7e3e3;
 border: none;
 border-radius: 5px;
   `
const Button = styled.button`
   background-color: pink;
   color: white;
   cursor: pointer;
   border: none;
   border-radius: 5px;
   padding: 20px;
    `
const Right = styled.div`
   flex:1;
   @media only screen and (max-width:348px){
 display: none;
    }
    `


export const Contact = () => {
  const ref = useRef()
 const [success,setSuccess]= useState(false);
  const handleSubmit = (e) =>{
    e.preventDefault();
     emailjs.sendForm('service_33dd1q7', 'template_fyxxgeew', ref.current, 'q6KgD-KlHDwThOKXQ')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });

  }
  return (
    <Section>
      <Container>
          <Left>
              <Form ref={ref} onSubmit={handleSubmit}>
                <Title>
                  Contact Us
                </Title>
                <Input placeholder='Name' name="name"/>
                <Input placeholder='Email' name="email"/>
                <Textarea placeholder='Write Your Message' name="message" rows={10}/>
                <Button type = 'submit'>Send</Button>
                {success && "Your message is sent and we will reply soon :)"}
              </Form>
          </Left>
          <Right>
              <Map/>
          </Right>
      </Container>     
    </Section>
  )
}
