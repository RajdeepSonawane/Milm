export interface CareerOpportunities {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  jobTitle?: string;
  /** @wixFieldType text */
  jobDescription?: string;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType text */
  employmentType?: string;
  /** @wixFieldType date */
  applicationDeadline?: Date | string;
  /** @wixFieldType text */
  responsibilities?: string;
  /** @wixFieldType text */
  qualifications?: string;
}

export interface KeyBenefits {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  benefitName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  benefitImage?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType boolean */
  isActive?: boolean;
}

export interface OperationalFocusAreas {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  focusAreaName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  image?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType boolean */
  isActive?: boolean;
}

export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  serviceDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
  /** @wixFieldType text */
  shortSummary?: string;
  /** @wixFieldType boolean */
  isActive?: boolean;
}