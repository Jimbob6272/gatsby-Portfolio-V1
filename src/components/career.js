import styled from '@emotion/styled';
import React from 'react';
import TechList from './tech-list';
import { mq } from './_shared/media';
import { StyledH1, StyledH2, StyledH3 } from './_shared/styled-headings';
import { StyledSection } from './_shared/styled-section';

const StyledEduContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  padding: 2.5rem 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const StyledTextSection = styled.section`
  white-space: pre-line;
`;

const Career = ({ data }) => {
  const {
    frontmatter: { place, position, info, techs },
    html,
  } = data;

  return (
    <StyledSection id="career">
      <StyledH1>Career</StyledH1>
      <StyledEduContainer>
        <div>
        <StyledH2>{position}</StyledH2>
        <StyledH3>{place}</StyledH3>
        <span>{info}</span>
        <TechList techs={techs} />
        <hr></hr>
        <StyledTextSection dangerouslySetInnerHTML={{ __html: html }} />
                </div>
      </StyledEduContainer>
    </StyledSection>
  );
};


export default Career;
