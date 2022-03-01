// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below
* Obligatory properties
    * trials: int - the number of trials this view will appear
    * name: string
*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view
    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views
*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: 'Willkommen!',
  text: `Willkommen zu unserem Experiment!
  <br />
  <br />
  Vielen Dank, dass Sie sich dazu entschieden haben, an unserem Experiment teilzunehmen und auf diese
  Weise das Projekt für unsere Bachelorarbeit zu unterstützen.
  <br />
  Bitte beachten Sie, dass eine Teilnahme nur unter folgenden Bedingungen möglich ist:
  <br />
  - Das Gerät, auf dem Sie arbeiten verfügt über eine stabile Internetverbindung.
  - Sie haben ausreichend Zeit, um das Experiment vollständig zu bearbeiten (ca. 30 Minuten).
  - Sie befinden sich in einer ruhigen und gemütlichen Umgebung, in der Ihre ungeteilte Aufmerksamkeit dem Experiment gilt.
  <br />
  <br />
  <br />
  Sobald Sie bereit sind, beginnen Sie das Experiment mithilfe eines Clicks auf den "Mit dem Experiment beginnen"-Button.`,
  buttonText: 'Mit dem Experiment beginnen'
});

// For most tasks, you need instructions views
const general_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Allgemeine Instruktionen',
  text: `Bevor es losgeht, erteilen wir Ihnen eine kurze Unterweisung und erklären, was Ihre Aufgabe im Verlauf des Experiments sein wird.
  <br />
  Im Folgenden werden Sätze auf Ihrem Bildschirm erscheinen. Der Aufbau dieser Sätze folgt stets dem gleichen Schema.
  Dabei ist der erste Satz vollständig und beschreibt eine bestimmte Situation, auf die sich wiederum der zweite Satz bezieht.
  Ihre Aufgabe ist es, den zweiten Satz zu vervollständigen, indem Sie einen Namen in das leere Feld schreiben, welcher Ihrer Vorstelleung
  nach am besten an die frei gelassene Stelle im zweiten Satz passt.
  Namenswiederholungen sind zulässig, jedoch sollte es sich bei Ihrer Wahl nur um Vornamen handeln, die zudem keine Sonderzeichen (_, *, /, 1, 2, 3...)
  enthalten.
  <br />
  <br />
  Um Sie mit dem Setup des Experiments vetraut zu machen, durchlaufen Sie zunächst ein paar Übungsrunden, bevor das eigentliche Experiment beginnt.
  Sobald Sie bereit sind, zögern Sie nicht, das Experiment mithilfe eines Clicks auf das "Mit der Übung beginnen"-Feld.`,
  buttonText: 'Mit der Übung beginnen'
});

//instruction in order to proceed to the textbox input trials

const textbox_input_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'main_instructions',
  title: 'Instruktionen',
  text: `So weit so gut!
  <br />
  <br />
  Sie haben die Übungsrunden erfolgreich absolviert und sind nun hoffentlich ausreichend auf das Experiment vorbereitet.
  Weder das Format, noch der Inhalt der weichen stark von der Übung ab.
  <br />
  Um fortzufahren, klicken Sie bitte auf das "Mit der ersten Phase beginnen"-Feld.`,
  buttonText: 'Mit der ersten Phase beginnen'
});

const forced_choice_2A_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_conjunction_2',
  title: 'Instruktionen',
  text: `Gratulation, der erste Teil des Experiments ist geschafft. Im zweiten Teil des Experiments sind Sie nun
  dazu aufgefordert, sich erneut mit den von Ihnen gewählten Namen aus der ersten Phase zu befassen.
  Genauer gesagt, ist es Ihre Aufgabe, zu beurteilen, ob die gewählten Namen für Sie persönlich eher weibliche oder
  männliche Individuen beschreiben. Dafür werden Ihnen die Namen einzeln präsentiert und sie sollen den
  eingeblendeten Namen in eine der durch Felder markierten Kategorien "weiblich" oder "männlich" einordnen.
  Falls ein Name beiden Geschlechtern zugeordnet werden kann, lassen Sie Ihr Bauchgefühl entscheiden.
  <br />
  Wenn Sie bereit sind, betätigen Sie den "Mit der zweiten Phase beginnen"-Button.`,
  buttonText: 'Mit der zweiten Phase beginnen'
});

const forced_choice_3A_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_conjunction_2',
  title: 'Instruktionen',
  text: `Gut gemacht, Sie haben den zweiten Teil des Experiments abgeschlossen und müssen nun nur noch einen letzten Teil bearbeiten.
  In dieser dritten Aufgabe sollen Sie erneut Wörter bewerten. Hierbei handelt es sich allerdings nicht um die von Ihnen gewählten Namen,
  sondern um Substantive, die Personen beschreiben (Beispiel: Kollegen). Auch hier sollen intuitiv entscheiden, ob die beschriebene Personengruppe
  für Sie eher männlich, weiblich oder neutral besetzt ist.
  <br />
  Um mit dem letzten Block zu beginnen, klicken Sie bitte auf das Feld mit der Aufschrift "Mit der dritten Phase beginnen". `,
  buttonText: 'Mit der dritten Phase beginnen'
});

//feedback after each block
//little break for participants in order to show that one block is already done
//const after_block_1 = magpieViews.view_generator("instructions", {
  //trials: 1,
  //name: 'after_block_1',
  //title: 'Take a short break!',
  //text: `Good job! You completed one block. If you feel ready to proceed click on the botton below. `,
  //buttonText: 'proceed to trials'
//});

//const after_block_2 = magpieViews.view_generator("instructions", {
  //trials: 1,
  //name: 'after_block_2',
  //title: 'Take a short break!',
  //text: `Good job! You completed one block. If you feel ready to proceed click on the botton below. `,
  //buttonText: 'proceed to trials'
//});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Zusätzliche Informationen',
  text: ' Großartig, Sie sind beinahe am Ende. Im allerletzten Schritt, bitten wir Sie darum, die folgenden Fragen zu beantworten.',

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'Danke',
  title: 'Perfekt, Sie sind nun am Ende! Vielen Dank, dass Sie sich die Zeit genommen haben, an unserem Experiment teilzunehmen. Wir wünschen Ihnen einen schönen Tag!:)',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below
* Obligatory properties
    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects
* Optional properties
    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/
    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/
* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const filler_sentences = magpieViews.view_generator('textbox_input', {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: 36,
  // name should be identical to the variable name
  name: 'filler_sentences',
  data: _.shuffle(textbox_input_trials.textbox_input)
},
//shuffle
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
);


//const forced_choice_2A = magpieViews.view_generator('forced_choice', {
//  trials: 36,
//  name: 'forced_choice_2A',
//  data: textbox_input_trials.trial_data,
//});

// Here, we initialize a forced_choice view with a custom answer container
// We added an additional title above the question
const forced_choice_3A = magpieViews.view_generator(
    "forced_choice",
    {
        // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
        trials: forced_choice_3A_trials.forced_choice.length,
        // name should be identical to the variable name
        name: 'forced_choice_3A',
        data: _.shuffle(forced_choice_3A_trials.forced_choice)
    },
    {
        answer_container_generator:  function (config, CT) {
         return `<div class='magpie-view-answer-container'>
                 <p class='magpie-view-question'>${config.data[CT].question}</p>
                 <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                 <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                 <label for='o2' class='magpie-response-buttons'>${config.data[CT].option2}</label>
                 <input type='radio' name='answer' id='o2' value=${config.data[CT].option2} />
                 <label for='o2' class='magpie-response-buttons'>${config.data[CT].option3}</label>
                 <input type='radio' name='answer' id='o3' value=${config.data[CT].option3} />
                 </div>`;
    }
    }
);

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
