// Screenshot can be any size. just make sure it is close to a 1:1 ratio - a square.

const projects = [
  {
    title: "Simple Cloud",
    description:
      'Simple Cloud is a <a href="https://aws.amazon.com/what-is-cloud-storage/">cloud storage</a> platform that allows users to store files, synchronizeiles across devices, and share files.',
    skills: ["HTML5", "CSS3", "PHP", "SQL", "JavaScript"],
    screenshot: "simplecloudnew.jpg",
    links: {
      github: "https://github.com/bryantu22/Simple-Cloud",
      preview: "https://simplecloud.us/"
    }
  },
  {
    title: "Chart the Stock Market",
    description:
      'This project is based off this <a href="https://www.freecodecamp.com/challenges/chart-the-stock-market">challenge</a>. Data is being pulled from the <a href="https://developer.tradier.com/documentation">Tradier API</a>. Initial load and searches can be slow at times as they depend on the lookup endpoint.',
    skills: ["HTML5", "CSS3", "JavaScript", "ES6", "ReactJS"],
    screenshot: "stockmarketchart.png",
    links: {
      github: "https://github.com/bryantu22/Stock",
      preview: "https://stockfeed.net"
    }
  }, 
  {
    title: "Bitcoin Speed Up",
    description:
      'Created a dynamic website across all devices using  <a href="https://getbootstrap.com/">Bootstrap</a>. The site utilizes the <a href="https://blockchain.info/api">Blockchain Data API</a> to rebroadcast transactions back into the bitcoin network; decreasing transactions confirmation time.',
    skills: ["HTML5", "CSS3", "PHP", "JavaScript"],
    screenshot: "ethrocket.png",
    links: {
      github: "https://github.com/bryantu22/Bitcoin-Speed-Up",
      preview: "https://bitcoinspeedup.herokuapp.com/"
    }
  },
  {
    title: "Portfolio",
    description:
      'This <a href="">page</a>! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ["HTML5", "CSS3", "Sass", "JavaScript", "ReactJS"],
    screenshot: "portfolio.png",
    links: {
      github: "https://github.com/bryantu22/Portfolio",
      preview: "#"
    }
  },
  {
    title: "To be Named",
    description: "Heroku based application currently being developed.",
    skills: ["JavaScript", "ReactJS", "NodeJS", "MongoDB", "CSS3"],
    screenshot: "earth.jpg",
    links: {
      github: "https://github.com/bryantu22/test2",
      preview: "https://tester15151.herokuapp.com/"
    }
  }
];

export default projects;
