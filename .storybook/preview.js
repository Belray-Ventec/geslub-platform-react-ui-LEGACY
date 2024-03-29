import '../src/public/preview.css';
import { geslubTheme } from '../src/utils/theme'
// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  chakra: {
    theme: geslubTheme,
  },
};

export const decorators = [
  (Story) => (
    <div style={{ margin: '3em', display: 'flex', flexDirection: 'column', gap: '5px' }}>
      {Story()}
    </div>
  ),
];