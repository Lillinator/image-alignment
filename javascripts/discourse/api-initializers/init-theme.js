import { apiInitializer } from "discourse/lib/api";
import I18n from "I18n";

async function applyHighlight(element) {
  const highlights = element.querySelectorAll("mark");
  if (!highlights.length) {
    return;
  }
}

// Helper function to get raw text without translation
function getRawText(text) {
  return text.replace(/\[.*?\]/g, '');
}

export default apiInitializer("0.11.1", (api) => {
  const { iconNode } = require("discourse-common/lib/icon-library");
  const currentLocale = I18n.currentLocale();

  // Localization setup - keep only the button titles in translations
  I18n.translations[currentLocale].js.image_grid_button_title = settings.image_grid_button;
  I18n.translations[currentLocale].js.align_image_center_button_title = settings.align_center_button;
  I18n.translations[currentLocale].js.align_image_right_button_title = settings.align_image_right_button;
  I18n.translations[currentLocale].js.align_image_left_button_title = settings.align_image_left_button;

  // Toolbar Button Definitions
  api.onToolbarCreate((toolbar) => {
    const buttons = [
      {
        id: "image_grid_button",
        group: "extras",
        icon: "compress",
        title: "image_grid_button_title",
        perform: (e) => e.applySurround("[grid]\n", "\n[/grid]", "image_grid_text"),
      },
      {
        id: "align_image_left_button",
        group: "extras",
        icon: "angle-left",
        title: "align_image_left_button_title",
        perform: (e) => e.applySurround('<div data-theme-image="left">\n\n', '\n\n</div>', "align_image_left_text"),
      },
      {
        id: "align_image_right_button",
        group: "extras",
        icon: "angle-right",
        title: "align_image_right_button_title",
        perform: (e) => e.applySurround('<div data-theme-image="right">\n\n', '\n\n</div>', "align_image_right_text"),
      },
      {
        id: "align_image_center_button",
        group: "extras",
        icon: "arrows-alt-h",
        title: "align_image_left_button_title",
        perform: (e) => e.applySurround('<div data-theme-image="center">\n\n', '\n\n</div>', "align_image_center_text"),
      },
    ];

    buttons.forEach((button) => toolbar.addButton(button));
  });
});
