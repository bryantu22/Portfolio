const statements = [
  {
    input: "Bryan.currentLocation",
    return: '"Hurst, TX"'
  },
  {
    input: "Bryan.contactInfo",
    return:
      '["<a href="mailto:bryantu22@gmail.com">bryantu22@gmail.com</a>","<a href="https://www.linkedin.com/in/bryantu22/">LinkedIn</a>", "<a href="https://github.com/bryantu22">github</a>"]'
  },
   {
   input: 'Bryan.resume',
  return: '"<a href="images/Bryan_Tu_Resume.pdf" target="_blank">bryantu.pdf</a>"'
  },
  {
    input: "Bryan.interests",
    return: '["design", "basketball", "cooking", "league of legends"]'
  },
  {
    input: "Bryan.education",
    return: '"B.S. Computer Science - University of Texas at Arlington"'
  },
  {
    input: "Bryan.skills",
    return:
      '["JavaScript", "React", "Redux", "NodeJS", "Java", "Python", "git"]'
  }
];

export default statements;
