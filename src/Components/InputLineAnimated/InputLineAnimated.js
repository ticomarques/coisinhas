import styled from 'styled-components';

export const InputLineAnimated = () => {
    return(
        <ContainerForm>
            <div className="form">
                <input type="text" id="email" className="form__input" autoComplete="off" placeholder="john@email.com" />
                <label htmlFor="email" className="form__label">Email</label>
            </div>
        </ContainerForm>
    )
}

const ContainerForm = styled.div`
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background-color: #060b23;


    .form {
        position: relative;
        width: 20rem;
        height: 0.5rem;

        &__input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-top: none;
            border-right: none;
            border-left:none;
            border-bottom: 1px solid #e1e5ee;
            font-family: inherit;
            font-size: inherit;
            color: white;
            outline: none;
            padding: 1.25rem;
            background: none;

            &:hover {
                border-color: #adffff;
            }

            &:focus {
                border-color: #18ffff;
            }

            &::placeholder {
                color: transparent;
            }

            &:focus::placeholder {
                color: gray;
            }
        }

        &__label {
            position: absolute;
            left: 1rem;
            top: 0.8rem;
            padding: 0 0.5rem;
            color: white;
            cursor: text;
            transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
            background-color: #060b23;
        }
    }

    .form__input:focus ~ .form__label,
    .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
        top: -0.5rem;
        font-size: 0.8rem;
        left: 0.8rem;
    }
`;