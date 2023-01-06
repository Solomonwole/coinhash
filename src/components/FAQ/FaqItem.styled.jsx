import styled from 'styled-components';

export const FaqWraper = styled.div.attrs((props) => ({
	className: props.className,
}))`
	&.faq.open .faq-question {
		margin-bottom: 20px;
	}

	&.faq.open .faq-answer {
		max-height: 1000px;
		opacity: 1;
	}

	&.faq.open .faq-question .arrow-down {
		transform: translateY(-50%) rotate(180deg);
	}

	display: flex;
	flex-direction: column;
	border-radius: 8px;
	background: linear-gradient(90deg, #0ac389 0%, #0472e2 100%);
	padding: 20px;
	cursor: pointer;
	&:hover {
		// background-color: #233BA9;
		transition: all 0.5s ease-out;
	}

	h2 {
		font-size: 120%;
		font-weight: 700;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: #001020;
	}

	p {
		padding-top: 10px;
		font-weight: 400;
		font-size: 103%;
		line-height: 150%;
		color: #001020;
	}

	@media screen and (max-width: 425px) {
		padding: 12px;

		h2 {
			font-size: 24px;
		}

		p {
			font-size: 18px;
		}
	}
`;

export const FaqQuestion = styled.div.attrs((props) => ({
	className: props.className,
}))`
	display: flex;
	justify-content: space-between;
	position: relative;
	

	align-items: center;
	transition: all 0.4s ease;
	//height:40px;
	
	@media screen and (max-width: 520px) {
		h2 {
			font-size: 16px;
			width: 200px;
		}
	}
`;

export const FaqArrowDown = styled.div.attrs((props) => ({
	className: props.className,
}))`
	transition: all 0.2s ease;
	position: relative;
	font-size: 22px;
	width: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translateY(-50%);

	.fa-down {
		position: absolute;
		color: #001020;
		font-weight: 200;
	}

	@media screen and (max-width: 520px) {
		font-size: 18px;
	}
`;

export const FaqAnswer = styled.div.attrs((props) => ({
	className: props.className,
}))`
	border-top: 1px solid #001020;
	opacity: 0;
	max-height: 0;
	overflow-y: hidden;
	transition: all 0.4s ease;
`;
