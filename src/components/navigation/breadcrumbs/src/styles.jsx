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

  + li {
    &:before {
      content: ">";
      margin-right: ${props => props.theme.spacing.s};
      color: ${props => props.theme.palette.grey["800"]};
      font-weight: ${props => props.theme.font.weight.light};
    }
  }
`;

const LastItemStyled = styled.span`
  color: ${props => props.theme.palette.grey["800"]};
  font-weight: ${props => props.theme.font.weight.light};
  font-size: ${props => props.theme.font.size.s};
  font-family: ${props => props.theme.font.family.primary};
`;

export { BreadcrumbsListStyled, BreadcrumbsElementStyled, LastItemStyled };
