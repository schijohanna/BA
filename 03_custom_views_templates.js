// In this file you can create your own custom view templates
const custom_views = {};

custom_views.multi_choice_customized = function(config) {
      const forced_choice_customized = magpieViews.view_generator(
          "forced_choice",
          // config information
          {
              trials: part_one_trial_info.forced_choice.length,
              name: 'rebuilt_FC',
              data: part_one_trial_info.forced_choice
          },
          // custom generator functions
          {
            answer_container_generator: function (config, CT) {
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
      return forced_choice_customized;
};

custom_views.multi_image_selection_custiomized = function(config) {
      const image_selection_customized = magpieViews.view_generator(
          "image_selection",
          image_selection: function(config, CT) {
              $(".magpie-view-stimulus-container").addClass("magpie-nodisplay");
              return    `<div class='magpie-view-answer-container'>
                              <p class='magpie-view-question'>${config.data[CT].question}</p>
                              <label for="img1" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture1}></label>
                              <input type="radio" name="answer" id="img1" value="${config.data[CT].option1}" />
                              <label for="img2" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture2}></label>
                              <input type="radio" name="answer" id="img2" value="${config.data[CT].option2}" />
                              <label for="img3" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture3}></label>
                              <input type="radio" name="answer" id="img3" value="${config.data[CT].option3}" />
                          </div>`;
          }
      };
      )
      return image_selection_customized;
};
