import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
	const briefcase = <BusinessCenterIcon />;
	const school = <SchoolIcon />;
	return (
		<ResumeStyled>
			<Title title={"Resume"} span={"resume"} />
			<InnerLayout>
				<div className="small-title">
					<SmallTitle icon={briefcase} title={"Projects experience"} />
				</div>
				<div className="resume-content">
					<ResumeItem
						year={"2020 - 2021"}
						title={"Pokedéx App - Developer"}
						subTitle={"Academlo Inc."}
						text={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
						}
					/>
					<ResumeItem
						year={"2020 - 2021"}
						title={"Chat in live - Developer"}
						subTitle={"Academlo Inc."}
						text={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
						}
					/>
					<ResumeItem
						year={"2020 - 2021"}
						title={"The Rick and Morty Universe - Developer"}
						subTitle={"Academlo Inc."}
						text={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
						}
					/>
				</div>
				<div className="small-title u-small-title-margin">
					<SmallTitle icon={school} title={"Educational Qualifications"} />
				</div>
				<div className="resume-content ">
					<ResumeItem
						year={"2020 - Present"}
						title={"Full Stack Web Development and Computer Science"}
						subTitle={"Academlo Inc."}
						text={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
						}
					/>
					<ResumeItem
						year={"2021 - Present"}
						title={"Bootcamp English program for developers"}
						subTitle={"Canvas Free for Teachers"}
						text={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
						}
					/>
					<ResumeItem
						year={"2004 - 2009"}
						title={"High School Graduation"}
						subTitle={"Benjamin Herrera Educational Institution"}
						text={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
						}
					/>
				</div>
			</InnerLayout>
		</ResumeStyled>
	);
}

const ResumeStyled = styled.section`
	.small-title {
		padding-bottom: 3rem;
	}
	.u-small-title-margin {
		margin-top: 4rem;
	}

	.resume-content {
		border-left: 2px solid var(--border-color);
	}
`;
export default Resume;
