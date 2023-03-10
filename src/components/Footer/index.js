import { Container } from "./styles";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <Container>
            <span>
                By
                <Link to="https://github.com/nathansouza7" target="_blank">
                    Nathan
                </Link>
                <Link to="https://github.com/Britox7" target="_blank">
                    Kauê
                </Link>
                e
                <Link to="https://github.com/SavioSoares7" target="_blank">
                    Savio
                </Link>
            </span>
        </Container>
    );
};
