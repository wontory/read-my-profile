import { ImageResponse } from "next/og";
import Content from "./content";
import Frame, { frameOptions } from "./frame";

export async function GET() {
  return new ImageResponse(
    (
      <Frame>
        <Content />
      </Frame>
    ),
    frameOptions
  );
}
