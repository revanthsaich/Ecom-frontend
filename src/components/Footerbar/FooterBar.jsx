import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsLinkedin , BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import React from 'react'
import logo from "../../assets/logo.png";

const FooterBar = () => {
  return (
    <Footer container >
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://ecommerce-revanthsai.vercel.app/"
              src={logo}
              alt="Flowbite Logo"
              name="SHOP"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <FooterLink href="#">Ecommerce</FooterLink>
                <FooterLink href="#">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow me" />
              <FooterLinkGroup col>
                <FooterLink href="https://www.linkedin.com/in/revanth-sai-chaparala-000270301/">LinkedIn</FooterLink>
                <FooterLink href="https://github.com/revanthsaich">Github</FooterLink>
                <FooterLink href="https://instagram.com/revanthsai_05">Instagram</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Yet-to-be-decided" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.linkedin.com/in/revanth-sai-chaparala-000270301/" icon={BsLinkedin} />
            <FooterIcon href="https://instagram.com/revanthsai_05" icon={BsInstagram} />
            <FooterIcon href="https://github.com/revanthsaich" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterBar