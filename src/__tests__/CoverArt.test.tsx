import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import CoverArt from "@/components/CoverArt"; // Use alias for cleaner imports
import placeholderImage from "../assets/placeholder.svg"; // Import the placeholder image

describe("CoverArt Component", () => {
  it("renders CoverArt with a valid album art URL", () => {
    const testImageUrl = "https://example.com/album-cover.jpg";
    render(<CoverArt albumArtUrl={testImageUrl} />);
    
    const imgElement = screen.getByAltText("Album Cover");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", testImageUrl);
  });

  it("renders CoverArt with a placeholder if no image is provided", () => {
    render(<CoverArt albumArtUrl={null} />);
    
    const imgElement = screen.getByAltText("Album Cover");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", placeholderImage);
  });

  it("matches snapshot with a provided album art URL", () => {
    const testImageUrl = "https://example.com/album-cover.jpg";
    const { asFragment } = render(<CoverArt albumArtUrl={testImageUrl} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot with the placeholder image", () => {
    const { asFragment } = render(<CoverArt albumArtUrl={null} />);
    expect(asFragment()).toMatchSnapshot();
  });
});