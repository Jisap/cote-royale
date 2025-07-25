// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type FraganceDocumentDataSlicesSlice = never;

/**
 * Content for Fragance documents
 */
interface FraganceDocumentData {
  /**
   * Title field in *Fragance*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: fragance.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Bottle Image field in *Fragance*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: fragance.bottle_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bottle_image: prismic.ImageField<never>;

  /**
   * Feature Image field in *Fragance*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: fragance.feature_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  feature_image: prismic.ImageField<never>;

  /**
   * Description field in *Fragance*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fragance.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Price field in *Fragance*
   *
   * - **Field Type**: Number
   * - **Placeholder**: (In cents)
   * - **API ID Path**: fragance.price
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Scent Profile field in *Fragance*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: spicy
   * - **API ID Path**: fragance.scent_profile
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  scent_profile: prismic.SelectField<"spicy" | "woody" | "fresh", "filled">;

  /**
   * mood field in *Fragance*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: bold
   * - **API ID Path**: fragance.mood
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  mood: prismic.SelectField<"bold" | "grounded" | "refreshing", "filled">;

  /**
   * Slice Zone field in *Fragance*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: fragance.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FraganceDocumentDataSlicesSlice> /**
   * Meta image field in *Fragance*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: fragance.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */;
  meta_image: prismic.ImageField<never>;
}

/**
 * Fragance document from Prismic
 *
 * - **API ID**: `fragance`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FraganceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<FraganceDocumentData>,
    "fragance",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | VideoSlice
  | CallToActionSlice
  | FraganceListSlice
  | ProductFeatureSlice
  | ScrollTextSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Fallback OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.fallback_og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fallback_og_image: prismic.ImageField<never>;

  /**
   * Navigation Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  navigation_link: prismic.Repeatable<
    prismic.LinkField<string, string, unknown, prismic.FieldState, never>
  >;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | FraganceDocument
  | HomepageDocument
  | SettingsDocument;

/**
 * Primary content in *CallToAction → Default → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * EyeBrow field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.eyebrow
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrow: prismic.KeyTextField;

  /**
   * Heading field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.Repeatable<
    prismic.LinkField<
      string,
      string,
      unknown,
      prismic.FieldState,
      "Primary" | "Secondary"
    >
  >;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Item in *FraganceList → Default → Primary → Fragances*
 */
export interface FraganceListSliceDefaultPrimaryFragancesItem {
  /**
   * Fragance field in *FraganceList → Default → Primary → Fragances*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: fragance_list.default.primary.fragances[].fragance
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  fragance: prismic.ContentRelationshipField<"fragance">;
}

/**
 * Primary content in *FraganceList → Default → Primary*
 */
export interface FraganceListSliceDefaultPrimary {
  /**
   * EyeBrow field in *FraganceList → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fragance_list.default.primary.eyebrow
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrow: prismic.KeyTextField;

  /**
   * Heading field in *FraganceList → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: fragance_list.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *FraganceList → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fragance_list.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Fragances field in *FraganceList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: fragance_list.default.primary.fragances[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  fragances: prismic.GroupField<
    Simplify<FraganceListSliceDefaultPrimaryFragancesItem>
  >;
}

/**
 * Default variation for FraganceList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FraganceListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FraganceListSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FraganceList*
 */
type FraganceListSliceVariation = FraganceListSliceDefault;

/**
 * FraganceList Shared Slice
 *
 * - **API ID**: `fragance_list`
 * - **Description**: FraganceList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FraganceListSlice = prismic.SharedSlice<
  "fragance_list",
  FraganceListSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.Repeatable<
    prismic.LinkField<
      string,
      string,
      unknown,
      prismic.FieldState,
      "Primary" | "Secondary"
    >
  >;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *ProductFeature → Default → Primary*
 */
export interface ProductFeatureSliceDefaultPrimary {
  /**
   * Heading field in *ProductFeature → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: product_feature.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Description field in *ProductFeature → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_feature.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Feature Image field in *ProductFeature → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_feature.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Fragance field in *ProductFeature → Default → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: product_feature.default.primary.fragance
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  fragance: prismic.ContentRelationshipField<"fragance">;
}

/**
 * Default variation for ProductFeature Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductFeatureSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductFeatureSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProductFeature*
 */
type ProductFeatureSliceVariation = ProductFeatureSliceDefault;

/**
 * ProductFeature Shared Slice
 *
 * - **API ID**: `product_feature`
 * - **Description**: ProductFeature
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductFeatureSlice = prismic.SharedSlice<
  "product_feature",
  ProductFeatureSliceVariation
>;

/**
 * Primary content in *ScrollText → Default → Primary*
 */
export interface ScrollTextSliceDefaultPrimary {
  /**
   * EyeBrow field in *ScrollText → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: scroll_text.default.primary.eyebrow
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrow: prismic.KeyTextField;

  /**
   * Text field in *ScrollText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: scroll_text.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for ScrollText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ScrollTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ScrollTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ScrollText*
 */
type ScrollTextSliceVariation = ScrollTextSliceDefault;

/**
 * ScrollText Shared Slice
 *
 * - **API ID**: `scroll_text`
 * - **Description**: ScrollText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ScrollTextSlice = prismic.SharedSlice<
  "scroll_text",
  ScrollTextSliceVariation
>;

/**
 * Primary content in *Video → Default → Primary*
 */
export interface VideoSliceDefaultPrimary {
  /**
   * YouTube Video Id field in *Video → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: eTEsWseiDdg
   * - **API ID Path**: video.default.primary.youtube_video_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  youtube_video_id: prismic.KeyTextField;
}

/**
 * Default variation for Video Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Video*
 */
type VideoSliceVariation = VideoSliceDefault;

/**
 * Video Shared Slice
 *
 * - **API ID**: `video`
 * - **Description**: Video
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSlice = prismic.SharedSlice<"video", VideoSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FraganceDocument,
      FraganceDocumentData,
      FraganceDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      CallToActionSlice,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      FraganceListSlice,
      FraganceListSliceDefaultPrimaryFragancesItem,
      FraganceListSliceDefaultPrimary,
      FraganceListSliceVariation,
      FraganceListSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ProductFeatureSlice,
      ProductFeatureSliceDefaultPrimary,
      ProductFeatureSliceVariation,
      ProductFeatureSliceDefault,
      ScrollTextSlice,
      ScrollTextSliceDefaultPrimary,
      ScrollTextSliceVariation,
      ScrollTextSliceDefault,
      VideoSlice,
      VideoSliceDefaultPrimary,
      VideoSliceVariation,
      VideoSliceDefault,
    };
  }
}
