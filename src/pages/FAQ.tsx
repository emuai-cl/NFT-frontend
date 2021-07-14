import React from "react"
import Slide from "react-reveal/Slide"
import styled from "styled-components"

import { lighten } from "polished"
import { Footer } from "../components/footer"

import tw from "twin.macro"

import Navbar from "../components/navbar"
import { PageSubtitle, PageParagraph } from "../components/common"
import { HeroTitle } from "../components/HeroTitle"

const QuestionSection = styled.div`
  ${tw`flex py-10 mx-14 mt-6 rounded-t flex-col md:flex-row`};
  background-color: ${({ theme }) => theme.gradients.third};
`

const AnswerSection = styled.div`
  ${tw`flex py-10 mx-14 mb-16 rounded-b flex-col md:flex-row`};
  background-color: ${({ theme }) => lighten(0.07, theme.gradients.third)};
`

const StyledPageSubtitle = styled(PageSubtitle)`
  ${tw`mx-auto my-auto text-justify w-4/5`};
  color: white;
`

const StyledPageParagraph = styled(PageParagraph)`
  ${tw`mx-auto text-justify w-4/5`};
  color: white;
  font-weight: 600;
`

const StyledLetter = styled.div`
  ${tw`text-white text-6xl ml-auto my-auto`};
  font-weight: 530;
`

type QandAProps = {
  question: string
  answer: string
}
const QandA: React.FC<QandAProps> = ({ question, answer }) => (
  <>
    <Slide left>
      <QuestionSection>
        <StyledLetter>Q</StyledLetter>
        <StyledPageSubtitle>{question}</StyledPageSubtitle>
      </QuestionSection>
    </Slide>
    <Slide right>
      <AnswerSection>
        <StyledLetter>A</StyledLetter>
        <StyledPageParagraph>{answer}</StyledPageParagraph>
      </AnswerSection>
    </Slide>
  </>
)

const FAQ: React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <HeroTitle>FREQUENTLY ASKED QUESTIONS</HeroTitle>
      <QandA
        question="How do I get an EMU?"
        answer="In order to buy an EMU, you need to set up a cryto wallet like metamask and get some ETH. Then you can go to yhe homepage [myemus.info] and choose how many you want to mint. Afer you mint them, they are yours."
      ></QandA>
      <QandA
        question="What space will I get on the Solar Car?"
        answer="EMUs are sold in ascending order, so it starts with the ID 1 and ends with the ID 5940. The position in the car is distributed form left to right and from top to bottom, like the way you read this text. We will start with the left side of the car from the pilot's point of view."
      ></QandA>
      <QandA
        question="What can I do with my EMUs?"
        answer="EMUs are meant to represent the ownership of a pice of our solar car, so you can put any image your hearth desires on your space, as long as it not against our very basic rules (nothing ilegal and nothing that would harm our public image for having on our solar car). You can also put a description of your EMU. This will appear on the markets like OpenSea."
      ></QandA>
      <QandA
        question="Can I trade my EMUs?"
        answer="Yes, you can! EMUs adhere to the ERC-721 standard, so they can be traded publicly on platforms such as OpenSea. Do make sure you’re buying only EMUs that are contained within the verified collection! These are the only verifiably legitimate EMUs backed by provenance."
      ></QandA>
      <QandA
        question="What will you use this funding for?"
        answer="We are a non profit organization and as such, our private pockets won't see a single wei of what you donate. All of EMUAI's funding goes to building solar cars, the logistics of solar car races and to infrastructure neccesary to design and build future cars."
      ></QandA>
      <QandA
        question="Will my NFT run useless after it gets printed on the car?"
        answer="After we print the NFTs on the car, you can still sell them to someone else. The image can be changed virtually, and the solar car's EMUS will be updated before every race."
      ></QandA>
      <QandA
        question="Why can't I see my image on the virtual car?"
        answer="After you update your EMU's image, it can take some time for it to update. Please wait up to 24h before filing a complaint."
      ></QandA>
      <QandA
        question="If you care about the planet so much, how are you doing NFTs on Ethereum?"
        answer="More congestion on the network doesn’t necessarily mean more energy consumption. More miners do. Now, you could argue that more congestion increases the gas price and thus the incentive to mine, and so increasing the energy consumption and the emissions. While this may be true, we admit having a meaningful carbon footprint for example by the logistics of a race and the fabrication of a solar car. Our mission is to motivate and educate young people by promoting the development of sustainable transport so that we can accelerate its adoption. The future impact that we make on the planet will greatly surpass of carbon footprint. We know that around 80% of our ex-team members now work in the electromobility or solar energy sector, so this impact is already measurable. Doing NFTs greatly helps our team expand and ensure many more years of innovation and education in the renewable energies sector."
      ></QandA>
      <QandA
        question="Still not sure if you are a real project. How can I make sure?"
        answer='Our activity online may seem to have just appeared out of nowhere, like our twitter or this webpage, but this were only done for the NFT-fundraising idea, because our previous activity online has been in Spanish. You can visit our official Instagram [https://www.instagram.com/emuai_chile/] where we have been posting since our origins in 2017. Feel free to message us there. Also, you can take a look at our official team website [emuai.cl] and see our extensive media appearances under "Noticias".'
      ></QandA>
      <Footer />
    </>
  )
}

export default FAQ
