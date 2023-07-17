import React, { useState, useContext } from "react";
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
        canvasHeadlineValues,
        canvasBorderValues,
        canvasIconValues,
        canvasBackgroundValues,
        canvasLogoValues,
        canvasGradientValues,
      };
      const updatedData = [...canvasTemplates, combinedData];
      localStorage.setItem("templates", JSON.stringify(updatedData));
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
        title="Create Template"
      >
        <i className="bi bi-plus" title="Create Template"></i>
      </button>
      <Dialog id="createTemplate" title="Create Template" icon="plus">
        <form onSubmit={(e) => handleSave(e)}>
          <div className="modal-body">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="templateName"
                placeholder="name@example.com"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
              />
              <label htmlFor="templateName">Template Name</label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn ms-auto btn-success"
              data-bs-dismiss="modal"
            >
              Create
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
