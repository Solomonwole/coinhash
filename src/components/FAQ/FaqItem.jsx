import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaqAnswer, FaqArrowDown, FaqQuestion, FaqWraper } from './FaqItem.styled';


function FaqItem({ faq, index, toggleFaq }) {
	return (
		<FaqWraper
			key={faq.id}
			className={'faq ' + (faq.open ? 'open' : '')}
			onClick={() => toggleFaq(index)}
		>
			<FaqQuestion className="faq-question">
				<h2>{faq.question}</h2>
				<FaqArrowDown className="arrow-down">
					<FaChevronDown className="fa-down" />
				</FaqArrowDown>
			</FaqQuestion>

			<FaqAnswer className="faq-answer">
				<p>{faq.answer}</p>
			</FaqAnswer>
		</FaqWraper>
	);
}

export default FaqItem;
