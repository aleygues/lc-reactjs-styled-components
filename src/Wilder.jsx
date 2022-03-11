import blank_profile from './avatar.png';
import { Skill } from './Skill';
import './Wilder.css';
import Proptypes from "prop-types";
import styledComponents from 'styled-components';

const Card = styledComponents.article`
    padding: 20px;
    border: 1px solid #c9c9c9;
    border-radius: 7px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);

    h3, h4 {
        color: green;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: start;
    }
`;

export function Wilder({ city, name, skills }) {
    return (
        <Card>
            <h3>{name} from {city}</h3>
            <h4>Wild Skills</h4>
            <ul className="skills">
                {skills.map((skill, index) => <Skill key={index} title={skill.title} votes={skill.votes} />)}
            </ul>
        </Card>
    );
};

Wilder.propTypes = {
    name: Proptypes.string.isRequired,
    city: Proptypes.string.isRequired,
    skills: Proptypes.arrayOf(Proptypes.shape({
        title: Proptypes.string.isRequired,
        votes: Proptypes.number.isRequired
    }))
};





