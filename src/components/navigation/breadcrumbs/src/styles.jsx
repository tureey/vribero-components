import styled from "@emotion/styled";

const BreadcrumbsListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  line-hight: 1.25;
`;

const BreadcrumbsElementStyled = styled.li`
  margin-right: ${props => props.theme.spacing.s};

  &:not(:first-child) {
    &:before {
      content: ">";
      margin-right: ${props => props.theme.spacing.s};
      color: ${props => props.theme.palette.grey["700"]};
      font-weight: ${props => props.theme.font.weight.s};
    }
  }
`;

const LastItemStyled = styled.span`
  color: ${props => props.theme.palette.grey["700"]};
  font-weight: ${props => props.theme.font.weight.s};
  font-size: ${props => props.theme.font.size.s};
  font-family: ${props => props.theme.font.family.main};
`;

export { BreadcrumbsListStyled, BreadcrumbsElementStyled, LastItemStyled };
