import { render, screen, fireEvent } from "@testing-library/react";
import VolumeControls from "@/components/VolumeControls";
import { describe, it, expect } from "vitest";

describe("VolumeControls Component", () => {
  it("renders the volume control component", () => {
    render(<VolumeControls />);
    expect(screen.getByLabelText("Volume Control")).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument(); // Default volume
  });

  it("changes volume when slider is moved", () => {
    render(<VolumeControls />);
    
    const slider = screen.getByLabelText("Volume Control") as HTMLInputElement;
    fireEvent.change(slider, { target: { value: "80" } });

    expect(slider.value).toBe("80");
    expect(screen.getByText("80%")).toBeInTheDocument();
  });

  it("matches snapshot at default volume", () => {
    const { asFragment } = render(<VolumeControls />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot at max volume", () => {
    const { asFragment } = render(<VolumeControls />);
    
    const slider = screen.getByLabelText("Volume Control") as HTMLInputElement;
    fireEvent.change(slider, { target: { value: "100" } });

    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot at low volume", () => {
    const { asFragment } = render(<VolumeControls />);
    
    const slider = screen.getByLabelText("Volume Control") as HTMLInputElement;
    fireEvent.change(slider, { target: { value: "10" } });

    expect(asFragment()).toMatchSnapshot();
  });
});