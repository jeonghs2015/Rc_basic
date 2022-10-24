import React, {useState} from 'react'

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: 'John',
    title: 'Junior Developer',
    mentor: { 
      name: 'Bob',
      title: 'Senior Developer'
    },
  })
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>
        {person.name}'s mentor is {person.mentor.name} {person.mentor.title}
      </p>
      <button onClick={() => {
        const name = prompt(`what's your mentor's name?`);
        console.log(name);
        setPerson((prev) => ({...prev, mentor:{...person.mentor, name}}));
        }}
      >
      멘토 이름 바꾸기
      </button>
      <button onClick={() => {
        const title = prompt(`what's your mentor's title?`);
        console.log(title);
        setPerson((prev) => ({...prev, mentor:{...person.mentor, title}}));
        }}
      >
      멘토 타이틀 바꾸기
      </button>
    </div>
  )
}
