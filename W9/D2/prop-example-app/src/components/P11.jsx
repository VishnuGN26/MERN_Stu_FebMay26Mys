//prop validation
import PropTypes from "prop-types"; 
function Profile({ name, age }) {
    return (
        <div className="card">
            <p>{name}</p>
            <p>{age}</p>
        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

export function PropTypesDemo() {
    return (
        <>
            <Profile name="Chiru" age={21} />
        </>
    );
}