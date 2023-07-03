import React, { useState, useContext } from "react";
import plusIcon from "../../assets/svg/plus.svg";
import { Dialog } from "../Dialog/Dialog";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";

interface CreateTemplateProps {}

export const CreateTemplate: React.FunctionComponent<CreateTemplateProps> = (
  props
) => {
  const {
    canvasRefs,
    canvasTemplates,
    setCanvasTemplates,
    canvasHeadlineValues,
    canvasBorderValues,
    canvasIconValues,
    canvasBackgroundValues,
    canvasLogoValues,
    canvasGradientValues,
  } = useContext(CanvasPreviewContextValues);
  const [dialogVisibility, setDialogVisibility] = useState<boolean>(false);
  const [templateName, setTemplateName] = useState("");

  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let currentTemplateData = localStorage.getItem("templates");
    if (currentTemplateData !== null && templateName !== "") {
      const combinedData = {
        templateName,
        canvasRefs,
        canvasHeadlineValues,
        canvasBorderValues,
        canvasIconValues,
        canvasBackgroundValues,
        canvasLogoValues,
        canvasGradientValues,
      };
      const updatedData = {
        templatesArr: [...canvasTemplates, combinedData],
      };
      localStorage.setItem(
        "templates",
        JSON.stringify({ templatesArr: updatedData.templatesArr })
      );
      setDialogVisibility(false);
      setCanvasTemplates(updatedData);
    }
    return;
  };

  return (
    <div className="mx-1">
      <button
        className="btn btn-success"
        id="createTemplate"
        data-testid="createTemplate"
        onClick={() => setDialogVisibility(!dialogVisibility)}
      >
        <img src={plusIcon} alt="create-template" />
      </button>
      <Dialog dialogVisibility={dialogVisibility}>
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="templateName"
              placeholder="name@example.com"
              onChange={(e) => setTemplateName(e.target.value)}
            />
            <label htmlFor="templateName">Template name...</label>
          </div>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-secondary mx-2"
              onClick={() => setDialogVisibility(false)}
            >
              Cancel
            </button>
            <button className="btn btn-success" onClick={(e) => handleSave(e)}>
              Confirm
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
