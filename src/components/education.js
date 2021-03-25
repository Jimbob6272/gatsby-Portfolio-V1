import styled from '@emotion/styled';
import React from 'react';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
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

const Education= ({ data }) => {
  const {
    frontmatter: { place, position, info },
    html,
  } = data;

  return (
    <StyledSection id="education">
      <StyledH1>Education</StyledH1>
      <StyledEduContainer>
        <div>
        <StyledH2>{place}</StyledH2>
        <p>{position}</p>
        <span>{info}</span>
        <StyledTextSection dangerouslySetInnerHTML={{ __html: html }} />
                </div>
      </StyledEduContainer>
    </StyledSection>
  );
};


export default Education;
