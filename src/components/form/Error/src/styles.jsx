import styled from "@emotion/styled";

const Text = styled.input`
  color: ${props => props.theme.palette.accent.red["500"]};
  font-size: ${props => props.theme.font.size.s};
  margin-top: ${props => props.theme.spacing.xs};
`;

export { Text };
