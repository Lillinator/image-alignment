import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {

  
  const { iconNode } = require("discourse-common/lib/icon-library");

  // * toolbar buttons * //

  api.onToolbarCreate(toolbar => {
      toolbar.addButton({
          id: "image_grid_button",
          group: "extras",
          icon: "compress",
          perform: e => e.applySurround('[grid]\n\n', '\n\n[/grid]', 'image_grid_text')
      });
  });
  api.onToolbarCreate(toolbar => {
      toolbar.addButton({
          id: "align_left_button",
          group: "extras",
          icon: "angle-left",
          perform: e => e.applySurround('<div data-theme-image="left">\n\n', '\n\n</div>', 'align_left_text')
      });
  });
  api.onToolbarCreate(toolbar => {
      toolbar.addButton({
          id: "align_right_button",
          group: "extras",
          icon: "angle-right",
          perform: e => e.applySurround('<div data-theme-image="right">\n\n', '\n\n</div>', 'align_right_text')
      });
  });
  api.onToolbarCreate(toolbar => {
      toolbar.addButton({
          id: "align_center_button",
          group: "extras",
          icon: "left-right",
          perform: e => e.applySurround('<div align="center">\n\n', '\n\n</div>', 'align_center_text')
      });
  });

  // * Text translations * //

  let translations = I18n.translations[I18n.currentLocale()].js;
  if (!translations) {
    translations = {};
  }
  if (!translations.composer) {
    translations.composer = {};
  }

  translations.composer.align_left_button_title = settings.align_left_button;
  translations.composer.align_left_text = settings.align_left_text;

  translations.composer.align_right_button_title = settings.align_right_button;
  translations.composer.align_right_text = settings.align_right_text;

  translations.composer.align_center_button_title = settings.align_center_button;
  translations.composer.align_center_text = settings.align_center_text;

  translations.composer.image_grid_button_title = settings.image_grid_button;
  translations.composer.image_grid_text = settings.image_grid_text;
  
  });
In script tags, the only way to import other JS modules was using the require() syntax. While that will still 
