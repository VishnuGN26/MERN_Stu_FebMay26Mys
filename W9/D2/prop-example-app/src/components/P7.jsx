function UserCard({user}){
    return(
        <div className="card">
            <p>Name: {user.name}</p>
            <p>Role: {user.role}</p>
        </div>
    );
}
function SkillsList({ skills }){
    return(
        <ul>
            {skills.map((skill)=>(
                <li key={skill}>{skill}</li>

        
            ))}
        </ul>
    )
}
export function ObjectAndArrayProps(){
    const user = {
        name: 'Chiru',
        role: 'Developer',
    };
    const skills = ['React','TailwindCSS','Vite'];
    return(
        <>
        <h2>Passing Objects and Arrays as Props</h2>
        <UserCard user={user} />
        <SkillsList skills = {skills} />
        </>
    );
}