import { type TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y } from 'axe-playwright';

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {

  async preVisit(page) {
    await injectAxe(page);
    // Set reduced motion to avoid motion sickness
    page.emulateMedia({ reducedMotion: 'reduce' });
  },
  async postVisit(page) {
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });

    const elementHandler = await page.$('#storybook-root');
    const innerHTML = await elementHandler?.innerHTML();

    expect(innerHTML).toMatchSnapshot();
  },
};

export default config;