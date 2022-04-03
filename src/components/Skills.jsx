import React from 'react'
import SkillCard from './SkillCard'

// TODO: Declare variables for skillcards.
const feSkills= [
  "HTML/CSS",
  "Javascript",
  "React",
  "Tailwind",
  "Redux",
  "Angular"
];

const beSkills = [
  "Python",
  "C/C++",
  "Java"
];

const sqlSkills = [
  "MySQL",
  "PostgreSQL",
  "MongoDB"
];

const tools = [
  "Microsoft Excel",
  "Git"
];



export default function Skills() {
  return (
    <div name='skills' className='container myContainer max-w-[1000px] flex flex-col justify-center w-full h-full' id='skills'>
      <div className='flex-col'>
        <p className='headerText'>Skills</p>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8'>
        <SkillCard area="Front End" skills={feSkills} />
        <SkillCard area="Back End" skills={beSkills} />
        <SkillCard area="SQL" skills={sqlSkills} />
        <SkillCard area="Tools" skills={tools} />

      </div>
    </div>
  )
}
