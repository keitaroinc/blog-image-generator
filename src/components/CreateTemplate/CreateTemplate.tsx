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
    setCurrentSelectedTemplate,
    canvasHeadlineValues,
    canvasBorderValues,
    canvasIconValues,
    canvasBackgroundValues,
    canvasLogoValues,
    canvasGradientValues,
  } = useContext(CanvasPreviewContextValues);
  const [templateName, setTemplateName] = useState("");

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
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
      const updatedData = [...canvasTemplates, combinedData];
      localStorage.setItem(
        "templates",
        JSON.stringify({ templatesArr: updatedData })
      );
      setCanvasTemplates(updatedData);
      setCurrentSelectedTemplate(templateName);
      setTemplateName("");
    }
    return;
  };

  return (
    <div className="mx-1">
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#createTemplate"
      >
        <img src={plusIcon} alt="create-template" />
      </button>
      <Dialog id="createTemplate" title="Create template">
        <form onSubmit={(e) => handleSave(e)}>
          <div className="modal-body">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="templateName"
                placeholder="name@example.com"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
              />
              <label htmlFor="templateName">Template name...</label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn text-light btn-keitaro-alt"
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
