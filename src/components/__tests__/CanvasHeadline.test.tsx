// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { CanvasHeadline } from "../CanvasHeadline/CanvasHeadline";
// import { CanvasPreviewContextProvider } from "../../contexts/CanvasPreviewContext";

// describe("CanvasHeadlines.tsx tests", () => {
//   it("should be able to type into textarea input element", () => {
//     render(
//       <CanvasPreviewContextProvider>
//         <CanvasHeadline />
//       </CanvasPreviewContextProvider>
//     );
//     const textAreaElement = screen.getByPlaceholderText(
//       /Enter headline text here/i
//     ) as HTMLInputElement;
//     fireEvent.change(textAreaElement, {
//       target: { value: "Text for the headline component" },
//     });
//     expect(textAreaElement.value).toBe("Text for the headline component");
//   });
// });
