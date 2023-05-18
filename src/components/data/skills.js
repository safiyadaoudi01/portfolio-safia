import php from '../../assets/icons/php.png'
import java from '../../assets/icons/java.png'
import python from '../../assets/icons/python.png'
import kotlin from '../../assets/icons/kotlin.png'
export const SkillsData = [
  {
    type: "Front-End",
    list: [
      {
        name: "ReactJS",
        icon: <i class="devicon-react-original colored"></i>
        },
      {
        name: "HTML5",
        icon: <i class="devicon-html5-plain colored"></i>
        },
      {
        name: "JavaScript",
        icon: <i class="devicon-javascript-plain colored"></i>
      },
      
    ],
  },
  {
    type: "Back-End",
    list: [
      {
        name: "JAVA",
        icon: <img src={java} alt="CV Icon" class="option-icon"/>
        },
      {
        name: "PHP",
        icon: <img src={php} alt="CV Icon" class="option-icon"/>
        },
      {
          name: "Kotlin",
          icon: <img src={kotlin} alt="CV Icon" class="option-icon"/>
          },
      {
        name: "Python",
        icon: <img src={python} alt="CV Icon" class="option-icon"/>
      },
      
    ],
  },
  {
    type: "Autres",
    list: [
      {
        name: "Firebase",
        icon: <i class="devicon-firebase-plain colored"></i>
      },
      {
        name: "Bootstrap",
        icon: <i class="devicon-bootstrap-plain colored"></i>
      },
      
    ],
  },
];