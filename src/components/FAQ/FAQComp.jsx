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
      question: 'What is cloud mining?',
      answer:
        'Cloud mining is rent of mining equipment hash power. In this case, you do not need to buy expensive mining equipment and do not bear any risks associated with its breakdown. You do not incur additional costs for the hosting and maintenance of equipment, as well as for any malfunction. When you buy a cloud mining hashrate, you pay a fixed amount for the use of devices located in the CoinHash data center. The main advantage of cloud mining is the quick receipt of BTC to your wallet.',
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
