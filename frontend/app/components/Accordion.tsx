"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Define the type based on the schema
type AccordionBlock = {
  _type: "accordion";
  _key?: string;
  heading: string;
  subheading?: string;
  description?: string;
  items: Array<{
    question: string;
    answer: string;
    _key: string;
  }>;
  styling?: {
    type?: 'single' | 'multiple';
    collapsible?: boolean;
    defaultOpen?: number;
    size?: 'small' | 'medium' | 'large';
    variant?: 'default' | 'bordered' | 'ghost';
  };
};

type AccordionProps = {
  block: AccordionBlock;
  index: number;
  isInContainer?: boolean;
};

// Create component aliases to avoid TypeScript issues
const Root = AccordionPrimitive.Root as any;
const Item = AccordionPrimitive.Item as any;
const Header = AccordionPrimitive.Header as any;
const Trigger = AccordionPrimitive.Trigger as any;
const Content = AccordionPrimitive.Content as any;

export default function Accordion({ block, isInContainer = false }: AccordionProps) {
  const type = block.styling?.type || 'single';
  const collapsible = block.styling?.collapsible ?? true;
  const defaultOpen = block.styling?.defaultOpen;
  const size = block.styling?.size || 'medium';
  const variant = block.styling?.variant || 'default';

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return {
          trigger: 'text-sm py-3 px-4',
          content: 'text-sm px-4 pt-3 pb-4',
        };
      case 'large':
        return {
          trigger: 'text-lg py-5 px-6',
          content: 'text-lg px-6 pt-4 pb-6',
        };
      case 'medium':
      default:
        return {
          trigger: 'text-base py-4 px-5',
          content: 'text-base px-5 pt-3 pb-5',
        };
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'bordered':
        return {
          root: 'border border-taupe',
          item: 'border-b border-taupe/50 last:border-b-0',
          trigger: 'bg-light hover:bg-taupe/20 focus:bg-taupe/20',
          content: 'bg-light',
        };
      case 'ghost':
        return {
          root: 'space-y-2',
          item: 'border border-taupe/50',
          trigger: 'bg-light hover:bg-taupe/20 focus:bg-taupe/20',
          content: 'bg-light',
        };
      case 'default':
      default:
        return {
          root: 'bg-light border border-taupe',
          item: 'border-b border-taupe/50 last:border-b-0',
          trigger: 'bg-light hover:bg-taupe/20 focus:bg-taupe/20',
          content: 'bg-light',
        };
    }
  };

  const sizeClasses = getSizeClasses();
  const variantClasses = getVariantClasses();

  const defaultValue = defaultOpen !== undefined ? `item-${defaultOpen}` : undefined;
  const defaultMultiple = defaultOpen !== undefined ? [`item-${defaultOpen}`] : [];

  return (
    <div className={isInContainer ? "w-full h-full" : "container mx-auto my-12"}>
      <div className={`max-w-3xl ${isInContainer ? 'w-full' : 'mx-auto'}`}>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-maroon mb-3">
            {block.heading}
          </h2>
          {block.subheading && (
            <p className="text-lg text-dark mb-2">
              {block.subheading}
            </p>
          )}
          {block.description && (
            <p className="text-taupe leading-relaxed">
              {block.description}
            </p>
          )}
        </div>

        {type === 'single' ? (
          <Root
            type="single"
            collapsible={collapsible}
            defaultValue={defaultValue}
            className={`w-full ${variantClasses.root}`}
          >
            {block.items.map((item, index) => (
              <Item
                key={item._key || index}
                value={`item-${index}`}
                className={variantClasses.item}
              >
                <Header className="flex">
                  <Trigger
                    className={`flex flex-1 items-center justify-between text-left transition-all duration-200 focus:outline-none group ${sizeClasses.trigger} ${variantClasses.trigger} font-medium text-maroon`}
                  >
                    <span>{item.question}</span>
                    <ChevronDownIcon className="h-4 w-4 shrink-0 text-taupe transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Trigger>
                </Header>
                <Content
                  className={`overflow-hidden text-dark transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${variantClasses.content}`}
                >
                  <div className={sizeClasses.content}>
                    <p className="leading-relaxed whitespace-pre-wrap">
                      {item.answer}
                    </p>
                  </div>
                </Content>
              </Item>
            ))}
          </Root>
        ) : (
          <Root
            type="multiple"
            defaultValue={defaultMultiple}
            className={`w-full ${variantClasses.root}`}
          >
            {block.items.map((item, index) => (
              <Item
                key={item._key || index}
                value={`item-${index}`}
                className={variantClasses.item}
              >
                <Header className="flex">
                  <Trigger
                    className={`flex flex-1 items-center justify-between text-left transition-all duration-200 focus:outline-none group ${sizeClasses.trigger} ${variantClasses.trigger} font-medium text-maroon`}
                  >
                    <span>{item.question}</span>
                    <ChevronDownIcon className="h-4 w-4 shrink-0 text-taupe transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Trigger>
                </Header>
                <Content
                  className={`overflow-hidden text-dark transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${variantClasses.content}`}
                >
                  <div className={sizeClasses.content}>
                    <p className="leading-relaxed whitespace-pre-wrap">
                      {item.answer}
                    </p>
                  </div>
                </Content>
              </Item>
            ))}
          </Root>
        )}
      </div>
    </div>
  );
}