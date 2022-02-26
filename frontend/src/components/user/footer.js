import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  

const Footer = () => {
    return(
        <Box>
        <Container>
            <row>
            <Column>
            <Heading>Learn</Heading>
            <FooterLink href="#">Algorithims</FooterLink>
            <FooterLink href="#">Data Structure</FooterLink>
            <FooterLink href="#">Video Tutorial</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Practical</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
            </row>
        </Container>

        </Box>
    )
}
export default Footer;
