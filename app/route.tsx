import { ImageResponse } from "next/og";
import Content from "./content";
import Frame, { frameOptions } from "./frame";

export async function GET() {
  const response = new ImageResponse(
    (
      <Frame>
        <Content />
      </Frame>
    ),
    frameOptions
  );

  response.headers.set("Cache-Control", "public, max-age=60, s-maxage=60");

  return response;
}
