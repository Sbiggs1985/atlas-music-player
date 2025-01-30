import { render, screen } from "@testing-library/react";
import SongTitle from "@/components/SongTitle";
import { describe, it, expect } from "vitest";

describe("SongTitle Component", () => {
  it("renders the song title and artist", () => {
    render(<SongTitle title="Painted in Blue" artist="Soul Canvas" />);

    expect(screen.getByText("Painted in Blue")).toBeInTheDocument();
    expect(screen.getByText("Soul Canvas")).toBeInTheDocument();
  });

  it("matches snapshot with a title and artist", () => {
    const { asFragment } = render(<SongTitle title="Painted in Blue" artist="Soul Canvas" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot with a different title and artist", () => {
    const { asFragment } = render(<SongTitle title="Golden Haze" artist="Velvet Waves" />);
    expect(asFragment()).toMatchSnapshot();
  });
});