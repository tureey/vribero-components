import styled from "@emotion/styled";

const PanelBasicStyled = styled.section`
  box-sizing: border-box;
  background: white;
  border-radius: ${props => props.theme.box.radius.rounded};
  border-left: ${({ colored, theme }) =>
    colored ? `3px solid ${theme.palette.grey["900"]}` : "none"};
  font-family: ${props => props.theme.font.family.main};
  font-size: ${props => props.theme.font.size.m};
  font-weight: ${props => props.theme.font.weight.s};
  letter-spacing: 0.25px;
  // box-shadow: 0 2px 1px 0 rgba(0,0,0,.05);
`;

const PanelBasicHeaderStyled = styled.header`
  box-sizing: border-box;
  padding-top: ${props => props.theme.spacing.m};
  padding-bottom: ${props => props.theme.spacing.m};
  padding-right: ${props => props.theme.spacing.s};
  padding-left: ${props => props.theme.spacing.s};
  border-bottom: 1px dashed ${props => props.theme.palette.grey["200"]};
`;

const PanelBasicTitleStyled = styled.h3`
  box-sizing: border-box;
  font-weight: ${props => props.theme.font.weight.m};
  line-height: normal;
  margin: 0;
  color: ${props => props.theme.palette.grey["900"]};
`;

const PanelBasicBodyStyled = styled.div`
  box-sizing: border-box;
  padding-top: ${props => props.theme.spacing.giant};
  padding-bottom: ${props => props.theme.spacing.giant};
  padding-right: ${props => props.theme.spacing.s};
  padding-left: ${props => props.theme.spacing.s};
`;

export {
  PanelBasicStyled,
  PanelBasicHeaderStyled,
  PanelBasicTitleStyled,
  PanelBasicBodyStyled
};
