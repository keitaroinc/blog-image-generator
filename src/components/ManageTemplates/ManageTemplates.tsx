import React, { useContext } from "react";
import { Dialog } from "../Dialog/Dialog";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import templatesData from "../../config/templates.json";
interface ManageTemplatesProps {}

export const ManageTemplates: React.FunctionComponent<ManageTemplatesProps> = (
  props
) => {
  const {
    canvasTemplates,
    setCanvasTemplates,
    setCurrentSelectedTemplate,
    setCanvasHeadlineValues,
    setCanvasBackgroundValues,
    setCanvasBorderValues,
    setCanvasIconValues,
    setCanvasLogoValues,
    setCanvasGradientValues,
  } = useContext(CanvasPreviewContextValues);

  const handleDeleteTemplate = (templateName: string) => {
    if (confirm("Delete selected template?") == true) {
      let filteredTemplates = canvasTemplates.filter(
        (template: { templateName: string }) =>
          template.templateName !== templateName
      );
      localStorage.setItem("templates", JSON.stringify(filteredTemplates));

      setCurrentSelectedTemplate("Default");
      setCanvasTemplates(filteredTemplates);
      setCanvasHeadlineValues(templatesData[0].canvasHeadlineValues);
      setCanvasBackgroundValues(templatesData[0].canvasBackgroundValues);
      setCanvasBorderValues(templatesData[0].canvasBorderValues);
      setCanvasIconValues(templatesData[0].canvasIconValues);
      setCanvasLogoValues(templatesData[0].canvasLogoValues);
      setCanvasGradientValues(templatesData[0].canvasGradientValues);
    }
  };

  const renderCustomTemplates = (arr: any[]) => {
    if (
      arr.filter((template: any) => template.templateType !== "default")
        .length > 0
    ) {
      return arr.map(
        (template: any) =>
          template.templateType !== "default" && (
            <li
              className="list-group-item d-flex align-items-center justify-content-between"
              key={template.templateName}
            >
              <i className="bi bi-star me-2" title="Your Templates icon"></i>
              <span className="me-auto">{template.templateName}</span>
              <a
                href={`data:text/json;charset=utf-8, ${encodeURIComponent(
                  JSON.stringify(
                    canvasTemplates.filter((item) =>
                      item.templateName.includes(template.templateName)
                    )
                  )
                )}`}
                download={`${template.templateName}-preset-big.json`}
                data-testid="downloadTemplateBtn"
                className="ms-3 btn btn-sm btn-outline-secondary"
                title="Download Template"
              >
                <i className="bi bi-download" title="Download Template"></i>
              </a>
              <button
                data-testid="deleteTemplateBtn"
                className="ms-2 btn btn-sm btn-outline-danger"
                data-bs-dismiss="modal"
                onClick={() => handleDeleteTemplate(template.templateName)}
                title="Delete Template"
              >
                <i className="bi bi-trash" title="Delete Template"></i>
              </button>
            </li>
          )
      );
    } else {
      return (
        <li className="list-group-item py-3">
          <p className="m-0">No templates have been created yet.</p>
        </li>
      );
    }
  };

  const renderDefaultTemplates = (arr: any[]) => {
    return arr.map((template: any) =>
      template.templateType === "default" ? (
        <li className="list-group-item" key={template.templateName}>
          <i
            className="bi bi-bookmark-star me-2"
            title="Your Templates icon"
          ></i>
          {template.templateName}
        </li>
      ) : null
    );
  };

  return (
    <div className="ms-auto me-1">
      <button
        type="button"
        data-testid="manageTemplateBtn"
        className="btn btn-outline-secondary"
        data-bs-toggle="modal"
        data-bs-target="#manageTemplate"
        title="Manage Templates"
      >
        <i className="bi bi-gear"></i>
      </button>
      <Dialog id="manageTemplate" title="Manage Templates" icon="gear">
        <div className="modal-body">
          <h2 className="h6 mb-0">
            <i
              className="bi bi-bookmark-star-fill me-2"
              title="Default Templates icon"
            ></i>
            <span>Default Templates</span>
          </h2>
        </div>
        <ul className="list-group list-group-flush">
          {canvasTemplates !== null &&
            canvasTemplates.length &&
            renderDefaultTemplates(canvasTemplates)}
        </ul>
        <div className="modal-body">
          <h2 className="h6 mb-0">
            <i className="bi bi-star-fill me-2" title="Your Templates Icon"></i>
            <span>Your Templates</span>
          </h2>
        </div>
        <ul className="list-group list-group-flush">
          {canvasTemplates !== null &&
            canvasTemplates.length &&
            renderCustomTemplates(canvasTemplates)}
        </ul>
        <div className="modal-footer">
          <button
            type="button"
            className="me-auto btn btn-outline-secondary"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Cancel
          </button>
        </div>
      </Dialog>
    </div>
  );
};
