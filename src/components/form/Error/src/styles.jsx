import styled from "@emotion/styled";

const Text = styled.span`
  color: ${props => props.theme.palette.accent.red["500"]};
  font-size: ${props => props.theme.font.size.s};
  margin-top: ${props => props.theme.spacing.xs};
  display: block;
`;

export { Text };
