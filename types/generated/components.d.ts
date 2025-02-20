import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturesSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_features_social_links';
  info: {
    displayName: 'socialLink';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FieldScheduleSchedule extends Struct.ComponentSchema {
  collectionName: 'components_field_schedule_schedules';
  info: {
    displayName: 'schedule';
    icon: 'bulletList';
  };
  attributes: {
    day: Schema.Attribute.Enumeration<
      ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    > &
      Schema.Attribute.Required;
    end_hour: Schema.Attribute.Time;
    start_hour: Schema.Attribute.Time;
  };
}

export interface LayoutCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_layout_cta_buttons';
  info: {
    displayName: 'ctaButton';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    logoText: Schema.Attribute.Component<'layout.logo-text', true>;
    socialLink: Schema.Attribute.Component<'features.social-link', true>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
    icon: 'feather';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'layout.cta-button', false>;
    logoText: Schema.Attribute.Component<'layout.logo-text', false>;
  };
}

export interface LayoutLogoText extends Struct.ComponentSchema {
  collectionName: 'components_layout_logo_texts';
  info: {
    displayName: 'logoText';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'features.social-link': FeaturesSocialLink;
      'field-schedule.schedule': FieldScheduleSchedule;
      'layout.cta-button': LayoutCtaButton;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.logo-text': LayoutLogoText;
    }
  }
}
