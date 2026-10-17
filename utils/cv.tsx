import {
  extractMetadata,
  hasDateString,
  hasEmail,
  hasLink,
  hasPhone,
  hasRole,
  hasSubtitle,
  hasTitle,
  hasWebsite,
  type MDXModule,
  type WithDateString,
  type WithEmail,
  type WithLink,
  type WithPhone,
  type WithRole,
  type WithSubtitle,
  type WithTitle,
  type WithWebsite,
} from ".";

/* CV content is only needed by the CV route, so it stays out of the main bundle. */
const projectModules = import.meta.glob<MDXModule>('../content/cv/projects/*.mdx', { eager: true });
const referenceModules = import.meta.glob<MDXModule>('../content/cv/references/*.mdx', { eager: true });
const employmentModules = import.meta.glob<MDXModule>('../content/cv/employment/*.mdx', { eager: true });
const educationModules = import.meta.glob<MDXModule>('../content/cv/education/*.mdx', { eager: true });

export const getAllProjects = () =>
  extractMetadata<WithTitle & WithLink>(
    projectModules,
    (data): data is WithTitle & WithLink => hasTitle(data) && hasLink(data),
  );

export const useAllReferences = () =>
  extractMetadata<WithTitle & WithWebsite & WithPhone & WithEmail>(
    referenceModules,
    (data): data is WithTitle & WithWebsite & WithPhone & WithEmail =>
      hasTitle(data) && hasWebsite(data) && hasPhone(data) && hasEmail(data),
  );

export const useAllEmployment = () =>
  extractMetadata<
    WithTitle & WithSubtitle & WithDateString & WithRole & WithWebsite
  >(
    employmentModules,
    (
      data,
    ): data is WithTitle &
      WithSubtitle &
      WithDateString &
      WithRole &
      WithWebsite =>
      hasTitle(data) &&
      hasSubtitle(data) &&
      hasDateString(data) &&
      hasRole(data) &&
      hasWebsite(data),
  );

export const useAllEducation = () =>
  extractMetadata<WithTitle & WithDateString>(
    educationModules,
    (data): data is WithTitle & WithDateString =>
      hasTitle(data) && hasDateString(data),
  );

