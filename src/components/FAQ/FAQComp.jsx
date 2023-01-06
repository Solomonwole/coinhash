import React, { useState } from 'react';
import styled from 'styled-components';
import FaqItem from './FaqItem';

const FAQComp = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'What is CoinHash?',
      answer:
        'CoinHash is a simple and affordable cloud mining service, the main aim of which is to introduce the world of Bitcoin and other cryptocurrencies to a wider audience. In 2007 Steve Jobs changed the world, making modern technology more accessible to everyone. Today, the team at CoinHash want to open up the convenience and benefits of cryptocurrencies to a wider audience. ',
      open: false,
    },

    {
      id: 2,
      question: 'What kind of cryptocurrencies do you mine?',
      answer: '',
      open: false,
    },

    {
      id: 3,
      question: 'What commission does CoinHash charge?',
      answer: '',
      open: false,
    },

    {
      id: 4,
      question: 'How can I pay for mining power?',
      answer: '',
      open: false,
    },

    {
      id: 5,
      question:
        'I have purchased some hashpower. When will I receive my first payout?',
      answer: '',
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <FaqSection className="faqs">
      {faqs.map((faq, i) => {
        return (
          <FaqItem faq={faq} index={i} toggleFaq={toggleFaq} key={faq.id} />
        );
      })}
    </FaqSection>
  );
};

// Styling

const FaqSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 884px) {
    width: 80%;
  }
  @media screen and (max-width: 428px) {
    width: 83%;
  }
`;
export default FAQComp;
