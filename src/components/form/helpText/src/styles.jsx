import styled from '@emotion/styled'
import { lighten } from 'polished'

const HelpTextStyled = styled.span`
  display: block;
  color: ${props => lighten(0.3, props.theme.colors.system)};
  font-size: ${props => props.theme.font.size.xs};
  font-family: ${props => props.theme.font.family.main};
  font-weight: ${props => props.theme.font.weight.s};
  letter-spacing: 0.25px;
  margin-top: ${props => props.theme.spacing.marg.s};
  font-style: italic;
  margin-bottom: ${props => props.theme.spacing.marg.s};
`

export {
  HelpTextStyled
}