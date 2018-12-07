import styled from '@emotion/styled'

const PanelBasicStyled= styled.section`
  box-sizing: border-box;
  background: white;
  border-radius: ${props => props.theme.box.radius.rounded};
  border-left: ${({colored, theme}) => colored ? `3px solid ${theme.colors.system}` : 'none'};
  font-family: ${props => props.theme.font.family.main};
  font-size: ${props => props.theme.font.size.m};
  font-weight: ${props => props.theme.font.weight.s};
  letter-spacing: 0.25px;
  // box-shadow: 0 2px 1px 0 rgba(0,0,0,.05);
`

const PanelBasicHeaderStyled= styled.header`
  box-sizing: border-box;
  padding-top: ${props => props.theme.spacing.padd.l};
  padding-bottom: ${props => props.theme.spacing.padd.l};
  padding-right: ${props => props.theme.spacing.padd.m};
  padding-left: ${props => props.theme.spacing.padd.m};
  border-bottom: 1px dashed ${props => props.theme.colors.grey_light};
`

const PanelBasicTitleStyled= styled.h3`
  box-sizing: border-box;
  font-weight: ${props => props.theme.font.weight.m};
  line-height: normal;
  margin: 0;
  color: ${props => props.theme.colors.system};
`

const PanelBasicBodyStyled= styled.div`
  box-sizing: border-box;
  padding-top: ${props => props.theme.spacing.padd.giant};
  padding-bottom: ${props => props.theme.spacing.padd.giant};
  padding-right: ${props => props.theme.spacing.padd.m};
  padding-left: ${props => props.theme.spacing.padd.m};
`

export {
  PanelBasicStyled,
  PanelBasicHeaderStyled,
  PanelBasicTitleStyled,
  PanelBasicBodyStyled,
}