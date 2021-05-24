import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ReviewItem from "../Components/ReviewItem";

function ReviewsSetion() {
	return (
		<ReviewsStyled>
			<Title title={"Reviews"} span={"Reviews"} />
			<InnerLayout>
				<div className="reviews">
					<ReviewItem
						text={
							"Gustavo is a young man who stands out for both his technical and soft skills. He has a fairly broad knowledge in development, but also has excellent communication and support for others. A pleasure to do projects together"
						}
					/>
					<ReviewItem
						text={
							"He did an excellent job in contributing to the development of my Pokédex App, as he showed me how to solve several problems when making data requests to the Pokemon API"
						}
					/>
				</div>
			</InnerLayout>
		</ReviewsStyled>
	);
}

const ReviewsStyled = styled.section`
	.reviews {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1.5rem;
		width: 100%;
		@media screen and (max-width: 650px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

export default ReviewsSetion;
