import React from "react";

import Cta from "@/app/components/Cta";
import DesignersBlock from "@/app/components/DesignersBlock";
import PeopleBlock from "@/app/components/PeopleBlock";
import VideoBlock from "@/app/components/VideoBlock";
import Info from "@/app/components/InfoSection";
import Hero from "@/app/components/Hero";
import Container from "@/app/components/Container";
import MailchimpOptIn from "@/app/components/MailchimpOptIn";
import ResendContactForm from "@/app/components/ResendContactForm";
import Accordion from "@/app/components/Accordion";
import Sponsors from "@/app/components/Sponsors";
import ImageCollection from "@/app/components/ImageCollection";
import { dataAttr } from "@/sanity/lib/utils";

type BlocksType = {
  [key: string]: React.FC<any>;
};

type BlockType = {
  _type: string;
  _key: string;
};

type BlockProps = {
  index: number;
  block: BlockType;
  pageId: string;
  pageType: string;
};

const Blocks: BlocksType = {
  hero: Hero,
  callToAction: Cta,
  designers: DesignersBlock,
  people: PeopleBlock,
  video: VideoBlock,
  infoSection: Info,
  container: Container,
  mailchimpOptIn: MailchimpOptIn,
  resendContactForm: ResendContactForm,
  accordion: Accordion,
  sponsors: Sponsors,
  imageCollection: ImageCollection,
};

/**
 * Used by the <PageBuilder>, this component renders a the component that matches the block type.
 */
export default function BlockRenderer({
  block,
  index,
  pageId,
  pageType,
}: BlockProps) {
  // Block does exist
  if (typeof Blocks[block._type] !== "undefined") {
    return (
      <div
        key={block._key}
        data-sanity={dataAttr({
          id: pageId,
          type: pageType,
          path: `pageBuilder[_key=="${block._key}"]`,
        }).toString()}
      >
        {React.createElement(Blocks[block._type], {
          key: block._key,
          block: block,
          index: index,
        })}
      </div>
    );
  }
  // Block doesn't exist yet
  return React.createElement(
    () => (
      <div className="w-full bg-gray-100 text-center text-gray-500 p-20 rounded">
        A &ldquo;{block._type}&rdquo; block hasn&apos;t been created
      </div>
    ),
    { key: block._key }
  );
}
