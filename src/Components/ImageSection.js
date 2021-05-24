import React from "react";
import styled from "styled-components";
import resume from "../img/resume.png";
import PrimaryButton from "./PrimaryButton";
import "../docs/CV-GustavoPereira.pdf";

function ImageSection() {
	return (
		<ImageSectionStyled>
			<div className="left-content">
				<img src={resume} alt="" />
			</div>
			<div className="right-content">
				<h4>
					I am <span>Gustavo Pereira</span>
				</h4>
				<p className="paragraph">
					I'm Full Stack Web Developer in training, who is always open to learn
					new technologies and software development frameworks. I am currently
					looking for work challenges to put my skills at the service of those
					who require it. I have experience (Front-End) in developing web
					applications with HTML, CSS and Javascript
				</p>
				<div className="about-info">
					<div className="info-title">
						<p>Full Name</p>
						<p>Age</p>
						<p>Nationality </p>
						<p>Languages </p>
						<p>Location</p>
					</div>
					<div className="info">
						<p>: Gustavo Adolfo Pereira Villa</p>
						<p>: 30</p>
						<p>: Colombian </p>
						<p>: Spanish, English (Basic) </p>
						<p>: Cartagena de Indias, Colombia</p>
					</div>
				</div>
				<a
					href="https://drive.google.com/file/d/1h96qB_UYgECM7jk7fVgt2K-aotPuXeM5/view?usp=sharing"
					target="noreferrer"
				>
					<PrimaryButton title={"Download Cv"} />
				</a>
			</div>
		</ImageSectionStyled>
	);
}

const ImageSectionStyled = styled.div`
	margin-top: 5rem;
	display: flex;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		.left-content {
			margin-bottom: 2rem;
		}
	}
	.left-content {
		width: 100%;
		img {
			width: 95%;
			object-fit: cover;
		}
	}
	.right-content {
		width: 100%;
		h4 {
			font-size: 2rem;
			color: var(--white-color);
			span {
				font-size: 2rem;
			}
		}
		.paragraph {
			padding: 1rem 0;
		}
		.about-info {
			display: flex;
			padding-bottom: 1.4rem;
			.info-title {
				padding-right: 3rem;
				p {
					font-weight: 600;
				}
			}
			.info-title,
			.info {
				p {
					padding: 0.3rem 0;
				}
			}
		}
	}
`;
export default ImageSection;
