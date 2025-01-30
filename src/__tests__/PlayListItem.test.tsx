import { render, screen, fireEvent } from "@testing-library/react";
import PlayListItem from "@/components/PlayListItem";
import { describe, it, expect, vi } from "vitest";

describe("PlayListItem Component", () => {
  it("renders the song title and artist correctly", () => {
    render(<PlayListItem title="Test Song" artist="Test Artist" duration={210} isSelected={false} onClick={() => {}} />);

    expect(screen.getByText("Test Song")).toBeInTheDocument();
    expect(screen.getByText("Test Artist")).toBeInTheDocument();
  });

  it("formats and displays the duration correctly", () => {
    render(<PlayListItem title="Test Song" artist="Test Artist" duration={3945} isSelected={false} onClick={() => {}} />);
    
    // Expect 1 hour, 5 minutes, and 45 seconds
    expect(screen.getByText("1:05:45")).toBeInTheDocument();
  });

  it("applies correct styles when selected", () => {
    render(<PlayListItem title="Test Song" artist="Test Artist" duration={210} isSelected={true} onClick={() => {}} />);
    
    const listItem = screen.getByRole("button");
    expect(listItem).toHaveClass("bg-blue-500 text-white");
  });

  it("applies hover styles when not selected", () => {
    render(<PlayListItem title="Test Song" artist="Test Artist" duration={210} isSelected={false} onClick={() => {}} />);
    
    const listItem = screen.getByRole("button");
    expect(listItem).toHaveClass("hover:bg-gray-100");
  });

  it("calls the onClick function when clicked", () => {
    const onClickMock = vi.fn();
    render(<PlayListItem title="Test Song" artist="Test Artist" duration={210} isSelected={false} onClick={onClickMock} />);

    const listItem = screen.getByRole("button");
    fireEvent.click(listItem);
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot when selected", () => {
    const { asFragment } = render(<PlayListItem title="Test Song" artist="Test Artist" duration={210} isSelected={true} onClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot when not selected", () => {
    const { asFragment } = render(<PlayListItem title="Test Song" artist="Test Artist" duration={210} isSelected={false} onClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});