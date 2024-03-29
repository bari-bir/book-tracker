import styled from "@emotion/styled";

interface IFlex {
    items?: string
    content?: string
    gap?: string
}

export const Flex = styled.div<IFlex>`
    display: flex;
    align-items: ${props => props.items};
    justify-content: ${props => props.content};
    gap: ${props => props.gap};
`