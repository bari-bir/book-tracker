import styled from "@emotion/styled";


export const ListCardStyled = styled.div`
    width: 100%;
    padding: 1.4rem 3.1rem;
    border-radius: 30px;

    background-color: #005479;

    color: #FFF;

    position: relative;

    margin-bottom: 1rem;

    .list_card-title { 
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: .6rem;
    }

    .list_card-subtitle {
        font-size: 1.4rem;
        font-weight: 300;
        opacity: .8;
        margin-bottom: 1.4rem;
    }

    .list_card-date {
        font-weight: 800;
    }

    svg {
        position: absolute;
        top: 14px;
        right: 31px;
    }

    &:last-child {
        margin-bottom: 0;
    }
`