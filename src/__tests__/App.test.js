import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi,I'm ____`", () => {
    render(<App />);

    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });
    expect(topLevelHeading).toBeInTheDocument();
})

test("displays an image with alt text identifying the content of the image", () => {
    render(<App />);

    const profileImage = screen.getByAltText(/your profile image/i);
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src');
});

test("displays a second-level heading with the text `About Me`", () => {
    render(<App />);

    const aboutMeHeading = screen.getByRole("heading", { level: 2, name: /about me/i });

    expect(aboutMeHeading).toBeInTheDocument();
});


test("displays a paragraph with biography text", () => {

    render(<App />);

    const biographyParagraph = screen.getByText(/my biography\. i am a web/i);

    expect(biographyParagraph).toBeInTheDocument();
});


test("displays a link to GitHub page", () => {
    render(<App />);
    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/yourusername');
});

test("displays a link to LinkedIn page", () => {
    render(<App />);
    const linkedInlink = screen.getByRole("link", {
        name: /linkedIn/i
    });
    expect(linkedInlink).toBeInTheDocument();
    expect(linkedInlink).toHaveAttribute('href', 'https://linkedin.com/in/yourusername');
});
