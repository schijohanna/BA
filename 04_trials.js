// In this file you can specify the trial data for your experiment
// practice trails: 24 trails
//structure:
    //picture;
    //item;
    //phase: 1/2;
    //expected: "female"/"male"/"neuter";
    //number_of_items: 1,5,15,30 ;
    //condition: "conjunction"/"disjunction.shape"/"disjuction.colour";
const textbox_input_trials = [
    {
        item: 1,
        phase: 1,
        stereotype: "female",
        role_noun: "Babysitter",
        question: "Babysitter werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ______ möchte sich deshalb einen neuen Job suchen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 1
    },
    {
        item: 2,
        phase: 1,
        stereotype: "female",
        role_noun: "Baletttänzer",
        question: "Die Balletttänzer der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ______ verletzt sich dabei am Bein. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 1
    },
    {
        item: 3,
        phase: 1,
        stereotype: "female",
        role_noun: "Kassierer",
        question: "Der Arbeitsalltag von Kassierern ist sehr anstrengend. <br /> ______ muss jeden Morgen um fünf Uhr aufstehen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 1
    },
    {
        item: 4,
        phase: 1,
        stereotype: "female",
        role_noun: "Ernährungsberater",
        question: " Ernährungsberater empfehlen die Einnahme von Vitaminpräparaten. <br />_____ hält Vitamin D im Winter besonders wichtig. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 1
    },
    {
        item: 5,
        phase: 1,
        stereotype: "female",
        role_noun: "Floristen",
        question: "Wenn die Jahreszeiten wechseln, müssen Floristen die ganze Gärtnerei neu dekorieren. <br /> _____ liebt vor allem die Herbstdekoration. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 1
    },
    {
        item: 6,
        phase: 1,
        stereotype: "female",
        role_noun: "Flugbegleiter",
        question: "Im Gegensatz zu allen Fluggästen mögen Flugbegleiter keinen Tomatensaft.<br /> _____ bevorzugt Orangensaft während einer langen Flugreise. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 1
    },
    {
        item: 7,
        phase: 1,
        stereotype: "female",
        role_noun: "Friseure",
        question: "Bei den ganzen neuen Trends kommen Friseure kaum noch hinterher.<br /> _____ schneidet am liebsten klassische Frisuren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 1
    },
    {
        item: 8,
        phase: 1,
        stereotype: "female",
        role_noun: "Haushälter",
        question: "Viele Haushälter kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> _____ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 1
    },
    {
        item: 9,
        phase: 1,
        stereotype: "female",
        role_noun: "Kindergärtner",
        question: "Nach dem Feierabend genießen die Kindergärtner die Ruhe von ihren kleinen Schützlingen.<br /> _____ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 1
    },
    {
        item: 10,
        phase: 1,
        stereotype: "female",
        role_noun: "Grundschullehrer",
        question: "Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen Grundschullehrer gerne verschiedene Medien.<br /> _____ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 1
    },
    {
        item: 11,
        phase: 1,
        stereotype: "female",
        role_noun: "Autoren von Liebesromanen",
        question: "Autoren von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> _____ lässt Geschichten deshalb stets mit einem Happy End enden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 1
    },
    {
        item: 12,
        phase: 1,
        stereotype: "female",
        role_noun: "Schneider",
        question: "Die Fast-Fashion Industrie sorgt dafür, dass Schneider kaum noch Aufträge bekommen. <br /> _____ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 1
    },
];

const image_selection_trials = [
    {
        item: 1,
        phase: 2,
        stereotype: "",
        role_noun: "",
        grammatical_gender: "",
        question: "Welches der Bilder würdest du am ehesten mit der beschriebenen Situation assoziieren?",
        picture1: '',
        picture2: '',
        picture3: '',
        option1: 'male',
        option2: 'female',
        option3: 'mixed'
    }
];

const forced_choice_trials = [
    {
        item: 1,
        phase: 3,
        stereotype:"",
        role_noun: "",
        question: "Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    }
];
