import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import cloud from "../img/cloud.png";

function ServicesSection() {
	return (
		<InnerLayout>
			<ServicesSectionStyled>
				<Title title={"Services"} span={"services"} />
				<div className="services">
					<ServiceCard
						image={design}
						title={"Front-end"}
						paragraph={
							"Bring design to the web using HTML, CSS and JS and create tools that improve the interaction between the user and the web."
						}
					/>
					<div className="mid-card">
						<ServiceCard
							image={intelligence}
							title={"Back-end"}
							paragraph={
								"I create the business rules and logic to make a web system work correctly, using specific server-side programming languages."
							}
						/>
					</div>
					<ServiceCard
						image={cloud}
						title={"DevOps"}
						paragraph={
							"Coding, process reengineering for agile systems management."
						}
					/>
				</div>
			</ServicesSectionStyled>
		</InnerLayout>
	);
}

const ServicesSectionStyled = styled.section`
	.services {
		margin-top: 5rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1.5rem;
		@media screen and (max-width: 1000px) {
			flex-direction: column;
		}
		@media screen and (max-width: 950px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media screen and (max-width: 650px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

export default ServicesSection;
