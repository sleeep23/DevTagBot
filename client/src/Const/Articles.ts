import { ArrayProps } from "../Types/TokenTypes";

export const Articles: ArrayProps = {
  type: "array",
  children: [
    {
      type: "object",
      children: [
        {
          type: "objectKeyValue",
          key: {
            type: "string",
            value: "title",
          },
          value: {
            type: "string",
            value: "Title 1",
          },
        },
        {
          type: "objectKeyValue",
          key: {
            type: "string",
            value: "link",
          },
          value: {
            type: "string",
            value: "Link 1",
          },
        },
        {
          type: "objectKeyValue",
          key: {
            type: "string",
            value: "author",
          },
          value: {
            type: "string",
            value: "Author 1",
          },
        },
        {
          type: "objectKeyValue",
          key: {
            type: "string",
            value: "overlayLink",
          },
          value: {
            type: "string",
            value: "OverlayLink 1",
          },
        },
      ],
    },
  ],
};
