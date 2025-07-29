import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`;

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`;

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`;

const personReference = /* groq */ `
  _type == "person" => {
    "firstName": firstName,
    "lastName": lastName,
    "picture": picture,
    "socials": socials[] {
      ...,
      ${linkReference}
    }
  }
`;

const sponsorReference = /* groq */ `
  _type == "sponsor" => {
    "name": name,
    "logo": logo,
    "url": url,
    "description": description,
    "tier": tier,
    "featured": featured
  }
`;

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "hero" => {
        ...,
        "videoUrl": video.asset->url,
      },
      _type == "callToAction" => {
        ${linkFields},
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
      _type == "designers" => {
        ...,
        "designers": designers[]->{
          ...,
          ${personReference}
        },
        "layout": layout
      },
      _type == "people" => {
        ...,
        "people": people[]->{
          ...,
          ${personReference}
        },
        "layout": layout
      },
      _type == "video" => {
        ...,
        "videoUrl": videoFile.asset->url,
      },
      _type == "container" => {
        ...,
        items[]{
          ...,
          _type == "callToAction" => {
            ...,
            ${linkFields}
          },
          _type == "designers" => {
            ...,
            "designers": designers[]->{
              ...,
              ${personReference}
            }
          },
          _type == "people" => {
            ...,
            "people": people[]->{
              ...,
              ${personReference}
            }
          },
          _type == "video" => {
            ...,
            "videoUrl": videoFile.asset->url,
          },
          _type == "sponsors" => {
            ...,
            "sponsors": sponsors[]->{
              ...,
              ${sponsorReference}
            }
          }
        }
      },
      _type == "mailchimpOptIn" => {
        ...
      },
      _type == "sponsors" => {
        ...,
        "sponsors": sponsors[]->{
          ...,
          ${sponsorReference}
        }
      },
      _type == "imageCollection" => {
        ...
      },
      _type == "video" => {
        ...,
        "videoUrl": videoFile.asset->url,
      },
      _type == "pageLayout" => {
        ...,
        leftColumn[]{
          ...,
          _type == "callToAction" => {
            ...,
            ${linkFields}
          },
          _type == "designers" => {
            ...,
            "designers": designers[]->{
              ...,
              ${personReference}
            }
          },
          _type == "people" => {
            ...,
            "people": people[]->{
              ...,
              ${personReference}
            }
          },
          _type == "video" => {
            ...,
            "videoUrl": videoFile.asset->url,
          },
          _type == "sponsors" => {
            ...,
            "sponsors": sponsors[]->{
              ...,
              ${sponsorReference}
            }
          }
        },
        rightColumn[]{
          ...,
          _type == "callToAction" => {
            ...,
            ${linkFields}
          },
          _type == "designers" => {
            ...,
            "designers": designers[]->{
              ...,
              ${personReference}
            }
          },
          _type == "people" => {
            ...,
            "people": people[]->{
              ...,
              ${personReference}
            }
          },
          _type == "video" => {
            ...,
            "videoUrl": videoFile.asset->url,
          },
          _type == "sponsors" => {
            ...,
            "sponsors": sponsors[]->{
              ...,
              ${sponsorReference}
            }
          }
        }
      }
    },
  }
`);

export const sitemapData = defineQuery(`
  *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`);

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`);

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${postFields}
  }
`);

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`);

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`);
