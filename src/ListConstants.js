import men from "../public/team/men.png";
import women from "../public/team/women.png";
import AT_ASSESMENT from "../public/services/AT/AT_ASSESMENT.webp";
import AT_ADV_ASSESMENT from "../public/services/AT/AT_ADV_ASSESMENT.webp";
import AT_REVIEW from "../public/services/AT/AT_REVIEW.webp";
import AT_SESSION from "../public/services/AT/AT_SESSION.webp";
import ST_ASSESMENT from "../public/services/ST/ST_ASSESMENT.webp";
import ST_REVIEW from "../public/services/ST/ST_REVIEW.webp";
import ST_SESSION from "../public/services/ST/ST_SESSION.webp";
import PH_REVIEW from "../public/services/PH/PH_REVIEW.webp";
import PH_SESSION1 from "../public/services/PH/PH_SESSION1.webp";
import PH_SESSION2 from "../public/services/PH/PH_SESSION2.webp";
import SE_SESSION from "../public/services/SE/SE_SESSION.webp";
import SE_REVIEW from "../public/services/SE/SE_REVIEW.webp";
import SE_ASSESMENT from "../public/services/SE/SE_ASSESMENT.webp";
import FOLLOW_UP from "../public/services/NUTRITION/FOLLOW_UP.webp";
import CONSULTATION from "../public/services/NUTRITION/CONSULTATION.webp";
import YOGA from "../public/services/SPECIAL/YOGA.webp";
import IEP from "../public/services/SPECIAL/IEP.webp";
import DSE from "../public/services/SPECIAL/DSE.webp";
import PEC from "../public/services/SPECIAL/PEC.webp";
import SRP from "../public/services/SPECIAL/SRP.webp";
import FEI from "../public/services/SPECIAL/FEI.webp";
import SDP from "../public/services/SPECIAL/SDP.webp";
import TLP from "../public/services/SPECIAL/TLP.webp";
import GPT from "../public/services/SPECIAL/GPT.webp";
import HRP from "../public/services/SPECIAL/HRP.webp";
import HAP from "../public/services/SPECIAL/HAP.webp";
import SOONZE_THERAPY from "../public/services/SPECIAL/SOONZE_THERAPY.webp";
import VR from "../public/services/SPECIAL/VR.webp";


export const SERVICE_CATEGORIES = [
    { id: "OT", label: "OCCUPATIONAL THERAPY" },
    { id: "ST", label: "SPEECH THERAPY" },
    { id: "PT", label: "PHYSIOTHERAPY" },
    { id: "SE", label: "SPECIAL EDUCATION" },
    { id: "NUTRITIONS", label: "NUTRITIONS" },
    { id: "SS", label: "SPECIALIZED SERVICES" }
];

export const SERVICES = {
    OT: {
        OTAssesment: {
            title: "Assessment",
            image: AT_ASSESMENT,
            description: "A basic occupational therapy assessment outlines the child's development components such as gross motor skills, fine motor skills, coordination and balance, praxis, cognition, social skills, and ADL skills, along with specialized assessments such as sensory profile and WEE Fim. Assessments are problem-oriented in nature and usually diagnostic. It helps conclude the child's condition and current level of functional performance."
        },
        OTAdvanceAssesment: {
            title: "Advanced Assessment",
            image: AT_ADV_ASSESMENT,
            description: "Advanced occupational therapy evaluation is done as a part of the re-evaluation process or for children with a specific diagnosis, or when children attain basic occupational therapy skills. Advanced assessment evaluates children's advanced gross motor skills and praxis skills, dynamic balance and coordination, higher cognitive functions, executive functions, and any other specialized instruments the problem might suggest."
        },
        OTReview: {
            title: "Review",
            image: AT_REVIEW,
            description: "Occupational therapy reviews are conducted weekly or monthly based on session frequency. The therapist provides highlights on the child's development, a review of previous interventions and strategies, the efficacy of these interventions, new problem evaluations, and revision of strategies. OT reviews promote functional independence and track sensory integration progress."
        },
        OTSessions: {
            title: "Sessions",
            image: AT_SESSION,
            description: "Occupational therapy sessions vary based on the child's diagnosis. They include sensory integration (SI) sessions, ADL and skill development sessions, neurodevelopment sessions, and a mix of any form of OT therapy. Sessions typically last 45 minutes in a structured environment, ending with a home program that follows the session."
        }
    },

    ST: {
        SpeechTherapyAssessment: {
            title: "Assessment",
            image: ST_ASSESMENT,
            description: "Speech therapists conduct basic speech development evaluations through observation and interaction. Speech therapy assessment includes speech milestones, language development, vocabulary, voice, intonation, and communication skills. The assessment provides a diagnosis and defines the goals and interventions required for the child."
        },
        SpeechTherapyReview: {
            title: "Review",
            image: ST_REVIEW,
            description: "Speech therapy reviews are designed for children with minimal speech delays or attentional difficulties. Reviews focus on evaluating strategies, briefing the child's performance, and suggesting new approaches. Reviews help maintain communication skills and ensure therapy progress, even when home programs are followed."
        },
        SpeechTherapySessions: {
            title: "Sessions",
            image: ST_SESSION,
            description: "Speech therapy sessions use a play-based method to develop verbal and non-verbal communication. Sessions last 45 minutes in structured or unstructured environments, followed by a home program to reinforce learning."
        }
    },

    SE: {
        SpecialEducationAssessment: {
            title: "Assessment",
            image: SE_ASSESMENT,
            description: "Special education assessments focus on academic skills such as reading, writing, mathematics, and language. They also address various supplementary skills to determine the child's learning process. A diagnosis and personalized educational plan are often outcomes of these assessments."
        },
        SpecialEducationReview: {
            title: "Review",
            image: SE_REVIEW,
            description: "Special education reviews focus on identifying learning barriers and facilitators to create personalized strategies and interventions. The review assesses previous methods, evaluates current outcomes, and recommends new interventions to improve learning and performance."
        },
        SpecialEducationSessions: {
            title: "Sessions",
            image: SE_SESSION,
            description: "Special education sessions focus on practical academic outcomes. They involve repetition and practice to reinforce learning, with home programs designed to generalize skills. Sessions may also include recommendations for school modifications and teaching methods."
        }
    },

    NUTRITIONS: {
        NutritionEvaluation: {
            title: "Consultation/Evaluation",
            image: CONSULTATION,
            description: "Nutritional evaluation identifies the child's age, height, and weight relative to normative growth charts. The nutritionist assesses feeding habits and provides a personalized nutrition plan, complete with a diet chart to ensure sustainable growth and performance."
        },
        NutritionFollowUp: {
            title: "Follow-Up",
            image: FOLLOW_UP,
            description: "A nutrition follow-up recalibrates a child's nutritional plan by re-evaluating their age, height, and weight to monitor growth. The nutritionist adjusts the diet plan to meet the child's changing needs."
        }
    },

    PT: {
        PTAssessment: {
            title: "Assessment",
            image: PH_REVIEW,
            description: "Physiotherapy assessment and evaluation consist of assessing the physical components such as motor, balance, coordination, and associated factors that promote the above components. Evaluation is done for all physical conditions and neurodevelopmental conditions across all age groups. Standardized assessments provide a comprehensive view of the problem, with a physiotherapy report and diagnosis if applicable."
        },
        PTSessionsOrthoNeuro: {
            title: "Sessions (Ortho/Neuro)",
            image: PH_SESSION1,
            description: "Orthopedic physiotherapy sessions focus on the client's physical skills, such as range of motion (ROM), muscle strengthening, and pain management techniques using physical modalities. Neurologic physiotherapy sessions focus on impairments related to neurological deficits from stroke or pediatric/adult neurologic conditions. Vestibular rehabilitation may also be a part of the rehabilitation program."
        },
        PTSessionsPrePostNatal: {
            title: "Sessions (Prenatal/Postnatal)",
            image: PH_SESSION2,
            description: "Prenatal physiotherapy focuses on pelvic training and overall physical wellness of the mother. Postnatal physiotherapy helps in recovering core muscles and pelvic floor training, which promotes post-delivery pelvic recovery. A postnatal weight loss program helps mothers regain a positive body image, resume physical activity, and promote healthy weight loss."
        }
    },

    SS: {
        SensoryYogaOverview: {
            title: "Sensory Yoga",
            image: YOGA,
            description: "Sensory Yoga is designed for children with sensory challenges. It combines traditional yoga practices with sensory integration strategies to enhance physical fitness and brain development."
        },
        IEPOverview: {
            title: "Individualized Educational Plan",
            image: IEP,
            description: "Individualized Educational Plans are highly personalized sessions that integrate input from speech therapists, occupational therapists, and special educators. IEP sessions are designed to meet specific functional goals."
        },
        DevelopmentalScreening: {
            title: "Developmental Screening and Evaluation",
            image: DSE,
            description: "Children can be screened for developmental milestones to identify delays or gain insight into their developmental curve. This screening evaluates motor, cognitive, emotional, social, and communication skills, followed by a developmental report."
        },
        ParentalEducation: {
            title: "Parental Education and Counseling",
            image: PEC,
            description: "Aimed at promoting healthy child development, this program educates parents post-diagnosis or before therapy to understand and accept their child's diagnosis. It offers an overview of therapy interventions and helps parents acknowledge their child's progress."
        },
        SchoolReadiness: {
            title: "School Readiness Program",
            image: SRP,
            description: "Our school readiness program smooths the home-to-school transition for children, especially those born during the Covid pandemic. It focuses on school modeling and pre-academic skills for children aged 2-4 years."
        },
        FeedingEvaluation: {
            title: "Feeding Evaluation and Intervention",
            image: FEI,
            description: "Feeding evaluation identifies issues like picky eating or oral sensory challenges. Feeding interventions are tailored through sensory, behavioral, and motor approaches, with assistive devices introduced when necessary."
        },
        GroupPlayTherapy: {
            title: "Group Play Therapy",
            image: GPT,
            description: "Play therapy is a versatile form of therapy designed to promote social, emotional, and communication skills through peer-based activities. Programs are customized to children's cognitive and social levels."
        },
        ScreenDetox: {
            title: "Screen Detox Program",
            image: SDP,
            description: "Our screen detox program provides a personalized approach to reducing screen time"
        },


        TherapeuticListening: {
            title: "Therapeutic Listening Program",
            image: TLP,
            description:
                "The Therapeutic Listening program uses modulated sound/music to stimulate the brain. This auditory integration training is effective for children with autism, ADHD, and other developmental delays."
        },

        HandwritingRemediation: {
            title: "Handwriting Remediation Program",
            image: HRP,
            description:
                "This program is designed to correct specific handwriting challenges in children, focusing on pencil grip and sensory/motor training. It is effective for children with autism, ADHD, and other developmental challenges."
        },

        HandwritingAcceleration: {
            title: "Handwriting Acceleration Program",
            image: HAP,
            description:
                "This program is aimed at children and adults with basic handwriting skills, with the goal of improving speed and legibility. It integrates strength training and cognitive techniques to enhance writing efficiency."
        },

        SnoezelenTherapy: {
            title: "Snoezelen Therapy",
            image: SOONZE_THERAPY,
            description:
                "Snoezelen therapy uses a multisensory environment to stimulate and regulate sensory systems. This therapy is helpful for individuals with autism, ADHD, and other developmental delays, as well as for managing stress and anxiety."
        },

        VirtualReality: {
            title: "Virtual Reality",
            image: VR,
            description:
                "Our clinic uses Meta Quest virtual reality systems to enhance learning and speed up skill acquisition. VR is particularly effective for children with ASD, ADHD, and various learning challenges."
        }
    }
};

    export const OUR_TEAM = [
        {
            image: men,
            name: "Gnana Oli",
            role: "Physiotherapist"
        },
        {
            image: women,
            name: "Vimala S",
            role: "Special Educator"
        },
        {
            image: women,
            name: "Valli R",
            role: "IEP specialist"
        },
        {
            image: women,
            name: "Hiranmayi",
            role: "Speech Therapist"
        },
        {
            image: women,
            name: "Lakshmi S",
            role: "Admin/Accounts"
        },
    ];


