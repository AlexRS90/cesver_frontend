import pedagogia from './styles/images/PEDAGOGIA.png'
import contaduria from './styles/images/CONTADURIA.png'
import derecho from './styles/images/DERECHO.png'
import ciencias from './styles/images/CIENCIAS.png'

const ABOUT = [
  {
    title: 'MISIÓN',
    info: 'Formar profesionistas capaces de enfrentar los retos que actualmente la sociedad requiere, a través de los conocimientos adquiridos, teniendo la capacidad de crear y tomar decisiones que fortalezcan las debilidades que obstaculizan el ejercicio de su profesión.',
    image: 'mision',
  },
  {
    title: 'VISIÓN',
    info: 'Satisfacer la creciente demanda educativa, permitiendo el igreso a toda aquella persona que desee estudiar una licenciatura o postgrado brindando una educación que esté al alcance de todos los niveles económicos privilegiando la calidad y exelencia académica, constituyéndonos como una institución innovadora, competitiva y prestigiada a nivel local y nacional por su compromiso con la educación superior.',
    image: 'vision',
  },
  {
    title: "OBJETIVO",
    info: 'Formar profesionistas capaces de transformar su entorno social con una actitud crítica y creativa que les permita vincularse con los diferentes sectores productivos de la sociedad, contribuyendo al desarrollo económico político y social de México.',
    image: 'objetivo',
  },
];

const EDUCACION = [
  {
    imagen: pedagogia,
    rvoe: 'ES068/2003',
    nombre: 'pedagogía',
    url: 'pedagogia',
    maestria: false,
    info: {
      slogan: 'Al finalizar los estudios correspondientes a su formación profesional, el pedagogo será capaz de:',
      bullets: [
        'Desarrollar proyectos educativos que permitan mejorar las actividades académicas en las instituciones donde realice su labor.',
        'Diseñar y evaluar programas de estudios de los distintos niveles educativos así como realizar propuestas de mejoramiento curricular.',
        'Intervenir en las actividades de orientación escolar mediante el diseño, aplicación y/o asesoramiento de programas pertenecientes a ésta área.',
        'Elaborar materiales didácticos y desarrollar estrategias docentes para eficientizar el proceso educativo.',
        'Detectar necesidades educativas a través de la investigación implementando proyectos de mejoramiento organizacional.',
        'Intervenir en los procesos administrativos de las instituciones educativas para eficientizar las actividades requeridas en el área.',
        'Desarrollar programas de capacitación para maximizar el desempeño pedagógico-social del recurso humano institucional.',
      ],
    },
  },
  {
    imagen: contaduria,
    rvoe: 'ES066/2003',
    nombre: 'contaduría pública',
    url: 'contaduria-publica',
    maestria: false,
    info: {
      slogan: 'El egresado de la Licenciatura en Contaduría al terminar el proceso de enseñanza-aprendizaje habrá adquirido los conocimientos suficientes y el dominio de esquemas, técnicas, instrumentos, mecanismos, procesos y procedimientos vinculados con la Contaduría y las disposiciones legales que lo regulan. La capacitación y el adiestramiento recibidos le permitirán:',
      bullets: [
        'Organizar y planear su trabajo hacia resultados.',
        'Tomar decisiones.',
        'Aplicar creativamente y con amplio criterio en la práctica los conocimientos teóricos adquiridos.',
        'Diseñar sistemas de información.',
        'Ejercer y delegar autoridad.',
        'Apoyarse en la informática para realizar sus funciones.',
      ],
    },
  },
  {
    imagen: derecho,
    rvoe: 'ES071/2003',
    nombre: 'derecho',
    url: 'derecho',
    maestria: false,
    info: {
      slogan: 'El profesionista egresado , estará capacitado para:',
      bullets: [
        'Desarrollar proyectos educativos que permitan mejorar las actividades académicas en las instituciones donde realice su labor.',
        'Diseñar y evaluar programas de estudios de los distintos niveles educativos así como realizar propuestas de mejoramiento curricular.',
        'Intervenir en las actividades de orientación escolar mediante el diseño, aplicación y/o asesoramiento de programas pertenecientes a ésta área.',
        'Elaborar materiales didácticos y desarrollar estrategias docentes para eficientizar el proceso educativo.',
        'Detectar necesidades educativas a través de la investigación implementando proyectos de mejoramiento organizacional.',
        'Intervenir en los procesos administrativos de las instituciones educativas para eficientizar las actividades requeridas en el área.',
        'Desarrollar programas de capacitación para maximizar el desempeño pedagógico-social del recurso humano institucional.',
      ],
    },
  },
  {
    imagen: ciencias,
    rvoe: 'ES069/2003',
    nombre: 'ciencias de la educación',
    url: 'ciencias-de-la-educacion',
    maestria: false,
    info: {
      slogan: 'Al concluir sus estudios el egresado será capaz de:',
      bullets: [
        'Utilizar la investigación educativa como instrumento fundamental para obtener la detección de necesidades en sus diversos ámbitos de desempeño.',
        'Formular soluciones a los problemas educativos en las organizaciones en las que desempeñe su labor.',
        'Aplicar la computación como herramienta de la tecnología educativa.',
        'Diseñar, aplicar y evaluar programas y proyectos educativos en sus diversos ámbitos de desempeño.',
        'Aplicar los conocimientos psicopedagógicos enla orientación educativa y el diseño de proyectos educativos.',
        'Diseñar materiales didácticos y herramientas detecnología educativa.',
        'Aplicar los conocimientos del área administrativa en el proceso de mejora de la persona humana en la empresa e instituciones educativas.',
        'Diseñar proyectos educativos en el campo de la docencia y el diseño curricular.',
        'Capacitar para diseñar, aplicar y evaluar métodos y técnicas innovadores en el proceso enseñanza – aprendizaje.',
        'Propiciar el desarrollo armónico del potencial del ser humano en todas sus dimensiones.',
      ],
    }
  },
  {
    imagen: derecho,
    rvoe: 'ES002/2017',
    nombre: 'derecho procesal penal acusatorio',
    url: 'derecho-procesal-penal-acusatorio',
    maestria: true,
    info: {
      slogan: 'Esta dirigida a todos aquellos profesionistas dedicados a la docencia o funciones técnico pedagógicas, en los niveles de educación básica, media superior y superior, en proyectos de educación no formal e instituciones educativas en general. Podrán desarrollar competencias para diagnosticar y mejorar los procesos educativos, e identificar las innovaciones pertinentes para lograr calidad en los resultados educativos, a partir de la instrumentación de proyectos escolares y de una planeación estratégica.',
      bullets: [],
    },
  },
  {
    imagen: ciencias,
    rvoe: 'ES107/2004',
    nombre: 'ciencias de la educación',
    url: 'maestria-ciencias-de-la-educacion',
    maestria: true,
    info: {
      slogan: 'Esta dirigida a todos aquellos profesionistas dedicados al derecho y carreras afines, que pretendan profundizar en las relaciones jurídico-empresariales con capacidad de liderazgo e interesados en aplicar sus conocimientos en el ámbito de la empresa, la docencia y la investigación. Podrán desarrollar competencias para la solución de problemas inherentes a la práctica de derecho empresarial y sus implicaciones internacionales, para participar de manera activa en la organización, planeación, dirección y evaluación jurídica, de empresas constituidas o en proceso de conformación, a fin de conservar losrecursos patrimoniales tangibles eintangibles, dando la mayor seguridad jurídica.',
      bullets: [],
    },
  },
];

export {
  ABOUT,
  EDUCACION,
};