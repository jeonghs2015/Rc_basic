import React, {useState} from 'react'

export default function AppMentors() {
    const [person, setPerson] = useState({
        name: 'ellie',
        title: 'Developer',
        mentors: [
            {
                name: 'Jake',
                title: 'Frontend Developer',
            },
            {
                name: 'Scott',
                title: 'Server Developer',
            },
        ],
    })
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>
        {person.name}'s mentor : 
      </p>
      <ul>
        {person.mentors.map((mentor, index) => (
            <li key={index}>
                {mentor.name} ({mentor.title})
            </li>
        ))}
      </ul>
      <button onClick={() => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
                if(mentor.name === prev){
                    return {...mentor, name : current};
                }
                return mentor;
            })
        }))
        
        }}
      >
      멘토의 이름 바꾸기
      </button>
    </div>
  )
}
