import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {sponsor} from './documents/sponsor'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import {hero} from './objects/hero'
import {designers} from './objects/designers'
import {container} from './objects/container'
import {mailchimpOptIn} from './objects/mailchimpOptIn'
import {sponsors} from './objects/sponsors'
import {imageCollection} from './objects/imageCollection'
import {mapEmbed} from './objects/mapEmbed'
import {pageLayout} from './objects/pageLayout'
import {people} from './objects/people'
import {video} from './objects/video'
import {resendContactForm} from './objects/resendContactForm'
import {accordion} from './objects/accordion'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  sponsor,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  hero,
  link,
  designers,
  pageLayout,
  container,
  mailchimpOptIn,
  sponsors,
  imageCollection,
  mapEmbed,
  people,
  video,
  resendContactForm,
  accordion,
]
