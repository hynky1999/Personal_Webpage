import { Project, Skill } from "../interfaces";

export const skills: Record<string, Skill[]> = {
  'Machine Learning': [
    {
      name: 'MLops', proficiency: 70, commentary: `
      Since, I am Software Engineer, I have a great experience with CI/CD pipelines, mostly using Gitlab CI and Docker. For tracking I mostly
      used Weights and Biases, but I am familiar with MLflow as well. For data processing I usually create a custom pipeline depending on the framework or Apache Spark. 

    ` },
    {
      name: 'Deep Learning', proficiency: 85, commentary: `
      I have a great experience with Tensorflow and Pytorch. I have used
      Pytorch in various projects, while the Tensorflow/Keras usage was just for
      a Deep Learning course. Apart from that I am well familiar with Pytorch-Lightning and Huggingface libraries. Other than that,
      I have also great experrience with scikit-learn and other for classical ML.
    `
    },
    // Add more skills as needed
  ],
  'Web Development': [
    { name: 'Frontend', proficiency: 40, commentary: 
    `
      Unsuprisngly, I am familar with core of the web development, including HTML, CSS and Javascript. Considering the current
      trends, I at one points use React/Vue.js/Blazor, but I am definitely not the expert in the first two. The only framework,
      out of these 3 I enjoy using is React, which I used for this website. Blazor is terribly slow and horrible to use. Vue.js
      is not bad, but I am not a fan of the syntax.
    `
    },
    { name: 'Backend', proficiency: 65, commentary: `
    I used to work with Django/Flask, but my hate for python has grown so much, that I switched to Node.js.
    That allows me to use Typescript, which I am a big fan of. I typically use Express.js, but I guess I could use Nest.js as well.
    Doesn't matter that much in Sass world.
    `
    },

    // Repeat for other categories
  ],
  'Other': [
    {
      name: 'Linux', proficiency: 80, commentary: `
    I have been using Linux for over 5 years. While I am by no means a kernel hacker, I am very familiar with the system and I able
    operatre it with ease, including the shell scripting.
    `},
    { name: 'AWS/Azure', proficiency: 40, commentary: 
    `
      I am mostly familiar with AWS, but I have also some experience with Azure. I have used AWS for deployment of 2 projects, including
      this website. I used a AWS SageMaker for training of my models, nowdays I mostly use lambda.
      This is the area, I would like to improve the most. I aim to learn terraform and kubernetes in the near future.
    `
    },
  ]
};

export const projects: Project[] = [
    {
        name: 'Edulastic',
        description: `I helped develop a backend for Edulastic with Snapwiz team. I was solely responsible for the creaation of
      the math evalution engine, which was used for validation of the student's answers. I also helped with the development of the
      other parts of the backend, including the API controllers`,
        technologies: ['Python', 'Antlr', 'Django', 'Postgresql'],
        links: {
            website: 'https://www.edulastic.com/',
        },
        image_url: '/images/snapwiz/edulastic.png',
    },
    {
        name: 'CmonCrawl',
        description: `Cmoncrawl is a tool for interaction and extraction from CommonCrawl, which I developed for my bachelor thesis. Since
        I develoeped it with distributivity and realiability in mind, I managed to process over 30M+ pages in a matter of hours, employing over 60 cores
        on Slurm cluster.
      `,
        technologies: ['Python', 'BeautifulSoup', 'Slurm', 'Apache Artemis', 'Docker'],
        links: {
            github: 'https://github.com/hynky1999/CmonCrawl',
            website: 'https://pypi.org/project/CmonCrawl/'
        },
        image_url: '/images/cmoncrawl/cmoncrawl.jpg',
    },
    {
        name: 'Washing Manager',
        description: `Washing Manager is a reservation system for washing machines, which I developed for a dormitory.
        It is a fullstack application written in Blazor, withe help of ASP.NET Core and PostgreSQL. It tought me
        that Blazor is not production ready and that internalization and dates are incredibly hard to get right.
        `,
        technologies: ['C#', 'Blazor', 'ASP.NET Core', 'PostgreSQL', 'Docker'],
        links: {
            github: 'https://github.com/hynky1999/WashingManager',
        },
        image_url: '/images/washing-manager/wm.png',
    },
    {
        name: 'Czech News Classifier',
        description: `Czech News Classifier is a project I developed for my bachelor thesis. It is a web application, which classifies
      czech news into 25 topics, guesses author's gender, day of the week and publication server. It is was trained on over 1M News articles
      using state-of-the-art NLP techniques. The project was trained using Pytorch-Lightning and Huggingface libraries. For logging and
      tracking I used Weights and Biases. The project was deployed using Gradio.`,
        technologies: ['python', 'Pytorch', 'Pytorch-Lightning', 'Huggingface', 'Weights and Biases', 'Gradio', 'Hydra'],
        links: {
            github: 'https://github.com/hynky1999/Bakalarka-code',
            website: 'https://huggingface.co/spaces/hynky/News-Classification'
        },
        image_url: '/images/class/class.png',
    },
    {
        name: 'CZE-NEC',
        description: `Czech News Dataset (CZE-NEC) is dataset consiting over 1.6M labeled czech news articles.
        To my knowledge this it the most complete news articles dataset while also one of the largest czech NLP datasets.
        Due to regulations, I am not allowed to share the dataset, but I am allowed to share the code I used to create it.
        Thus you can download it yourself :)`
        ,
        technologies: ['Python', 'CmonCrawl', 'Docker'],
        links: {
            github: 'https://github.com/hynky1999/Bakalarka-code',
            website: 'https://huggingface.co/spaces/hynky/News-Classification'
        },
        image_url: '/images/cze-nec/cze_nec.png',
    },
    {
        name: 'TranslateIT',
        description: `TranslateIT, is very simple chrome extension, which I created because I couldn't find any good.
        It can translate selected text using DeepL. It also supports hotkeys and importantnly is incredibly fast and easy to use.
        It also support TTS in the target language. It is written in Typescript and uses React for the UI.
        `,
        technologies: ['Typescript', 'React', 'Chrome-extension'],
        links: {
            github: 'https://github.com/hynky1999/TranslateIT',
            website: 'Waiting for approval'
        },
        image_url: '/images/translateit/translateit.png',
    },
]
