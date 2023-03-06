'use client';
import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from './Projects';
import CardLine from './CardLine';
import { CardTitle } from './AboutMe';

const Card = styled.div`
	background-color: #0f1117;
	border-radius: 0 0 5px 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	margin: 1.5rem 0;
	/* max-width: 340px; */
	@media (min-width: 483px) {
		/* width: 300px; */
	}
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
	width: 90%;
	@media (min-width: 1024px){
		flex-direction: row;
		margin-top: .5rem;
	}
`;

const WrapperLeft = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 1024px){
		width: 50%
	}
`;
const WrapperRight = styled.div`
@media (min-width: 1024px){
		width: 50%;
	}
	`;
const Header = styled.h5`
	margin: 1rem 0 0.5rem 0;
	font-size: 1.2rem;
	text-align: center;
`;
const P = styled.p``;
const TextWrapper = styled.div`
	margin-bottom: 1rem;
	@media (min-width: 600px){
		width: 80%;
	}
	@media (min-width: 1024px){
		width: 90%;
	}
`;
const SocialsWrapper = styled.div``;
const Socials = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	gap: 1rem;
`;
const Social = styled.div``;
const Img = styled.img`
	width: 70%;
`;
const SocialLabel = styled.p``;
const Anchor = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Form = styled.form`
	margin: 2rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 1024px){
		margin: 0;
	}
	
`;
const Legend = styled.legend`
	display: none;
`;
const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5rem 0;
	width: 100%;
`;

const Label = styled.label`
	font-size: 1.2rem;
`;

const Button = styled.button`
	padding: 5px 30px;
	margin: 1rem 0;
	background-color: transparent;
	border: 1px solid #bcbcbc;
	border-radius: 5px;
	cursor: pointer;
`

const Input = styled.input`
	height: 30px;
	background: rgba(47, 54, 70, 0.5);
	color: #bcbcbc;
	padding-left: 10px;
	font-size: 17px;
	border: none;
	border-radius: 5px;
`;

const TextArea = styled.textarea`
	height: 150px;
	background: rgba(47, 54, 70, 0.5);
	color: #bcbcbc;
	padding-left: 10px;
	font-size: 17px;
	border: none;
	border-radius: 5px;
	resize: none;
`

const socialsArr = [
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/mihai-alexandru-vistran-b2979a225/',
	},
	{
		name: 'GitHub',
		link: 'https://github.com/Xernaxe',
	},
];

export default function Contact() {
	return (
		<section>
			<SectionHeader>Get in touch with me!</SectionHeader>
			<Card>
				<CardLine lineColor='linear-gradient(0.25turn, #a9650f, #9f0dab, #5bdf0f, #0ec8cd)' />
				<CardTitle>Contact me.</CardTitle>
				<Wrapper>
					<WrapperLeft>
						<TextWrapper>
							<Header>Thank you for your time!</Header>
							<P>
								Feedback is much appreciated. I am always striving to grow as a
								developer, if you found something buggy or there's something
								bothering you, please don't hesitate to reach out to me.
							</P>
						</TextWrapper>
						<SocialsWrapper>
							<Header>You can also find me on:</Header>
							<Socials>
								{socialsArr.map((social) => (
									<Social key={social.name}>
										<Anchor href={social.link}>
											{' '}
											<Img src={`/${social.name}.svg`} alt={social.name} />
											<SocialLabel>{social.name}</SocialLabel>
										</Anchor>
									</Social>
								))}
							</Socials>
						</SocialsWrapper>
					</WrapperLeft>
					<WrapperRight>
						<Form>
							<Legend>Contact Form: Name, Email, Message.</Legend>
							<InputWrapper>
								<Label htmlFor='name_input'>Name</Label>
								<Input type='input' name='name' id='name_input' placeholder='Your name here' required />
							</InputWrapper>
							<InputWrapper>
								<Label htmlFor='email_input'>Email</Label>
								<Input
									type='email'
									name='email_input'
									id='email_input'
									placeholder='Your email here'
									required
								/>
							</InputWrapper>
							<InputWrapper>
								<Label htmlFor='message_input'>Message</Label>
								<TextArea
									placeholder='Your message here'
									name='name'
								></TextArea>
							</InputWrapper>
							<Button type='submit'>Submit</Button>
						</Form>
					</WrapperRight>
				</Wrapper>
			</Card>
		</section>
	);
}
