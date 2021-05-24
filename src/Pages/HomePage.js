import React from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Particle from "../Components/Particle";

function HomePage() {
	return (
		<HomePageStyled>
			<div className="particle-con">
				<Particle />
			</div>
			<div className="typography">
				<h1>
					Hi, I'm <span>Gustavo Pereira</span>
				</h1>
				<p>
					I am a Full Stack Web Developer specialized in Front-end development.
				</p>
				<p>Based in Cartagena de Indias, Colombia</p>
				<div className="icons">
					<a
						href="https://twitter.com/Gustavo_PV90"
						target="noreferrer"
						className="icon i-twitter"
					>
						<TwitterIcon />
					</a>
					<a
						href="https://github.com/GAPV-Coder"
						target="noreferrer"
						className="icon i-github"
					>
						<GithubIcon />
					</a>
					<a
						href="https://www.linkedin.com/in/gustavo-adolfo-pereira-villa-574406198/"
						target="noreferrer"
						className="icon i-linkedin"
					>
						<LinkedInIcon />
					</a>
				</div>
			</div>
		</HomePageStyled>
	);
}

const HomePageStyled = styled.header`
	width: 100%;
	height: 100vh;
	position: relative;

	.typography {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 80%;

		.icons {
			display: flex;
			justify-content: center;
			margin-top: 1rem;
			.icon {
				border: 2px solid var(--border-color);
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				transition: all 0.4s ease-in-out;
				cursor: pointer;
				&:hover {
					border: 2px solid var(--primary-color);
					color: var(--primary-color);
				}
				&:not(:last-child) {
					margin-right: 1rem;
				}
				svg {
					margin: 0.5rem;
				}
			}

			.i-linkedin {
				&:hover {
					border: 2px solid #007bff;
					color: #007bff;
				}
			}
			.i-github {
				&:hover {
					border: 2px solid #5f4687;
					color: #5f4687;
				}
			}
		}
	}
`;

export default HomePage;
