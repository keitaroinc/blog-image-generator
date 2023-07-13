import React, { useState, useContext } from "react";
import gearIcon from "../../assets/svg/gear.svg";
import { Dialog } from "../Dialog/Dialog";
import trashIcon from "../../assets/svg/trash.svg";
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
    setCanvasRefs,
    setCanvasHeadlineValues,
    setCanvasBackgroundValues,
    setCanvasBorderValues,
    setCanvasIconValues,
    setCanvasLogoValues,
    setCanvasGradientValues,
  } = useContext(CanvasPreviewContextValues);

  const handleDeleteTemplate = (templateName: string) => {
    if (confirm("Confirm Templete Deletion") == true) {
      let filteredTemplates = canvasTemplates.filter(
        (template: { templateName: string }) =>
          template.templateName !== templateName
      );
      localStorage.setItem(
        "templates",
        JSON.stringify({ templatesArr: filteredTemplates })
      );

      setCurrentSelectedTemplate("Default");
      setCanvasTemplates(filteredTemplates);
      setCanvasRefs(templatesData.default.canvasRefs);
      setCanvasHeadlineValues(templatesData.default.canvasHeadlineValues);
      setCanvasBackgroundValues(templatesData.default.canvasBackgroundValues);
      setCanvasBorderValues(templatesData.default.canvasBorderValues);
      setCanvasIconValues(templatesData.default.canvasIconValues);
      setCanvasLogoValues(templatesData.default.canvasLogoValues);
      setCanvasGradientValues(templatesData.default.canvasGradientValues);
    }
  };

  const renderCustomTemplates = (arr: any[]) => {
    if (
      arr.filter(
        (template: any) =>
          template.templateName !== "CKAN Extension" &&
          template.templateName !== "Default" &&
          template.templateName !== "Template 2"
      ).length > 0
    ) {
      return arr.map(
        (template: any) =>
          template.templateName !== "CKAN Extension" &&
          template.templateName !== "Default" &&
          template.templateName !== "Template 2" && (
            <li
              className="list-group-item d-flex justify-content-between py-3"
              key={template.templateName}
            >
              <span className="d-flex align-items-center">
                {template.templateName}
              </span>
              <button
                data-testid="deleteTemplateBtn"
                className="px-2 py-1 ms-3 btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => handleDeleteTemplate(template.templateName)}
              >
                <img src={trashIcon} alt="trash can" />
              </button>
            </li>
          )
      );
    } else {
      return (
        <li className="list-group-item py-3">
          <p className="m-0">No customized tamplates have been added yet.</p>
        </li>
      );
    }
  };

  const renderDefaultTemplates = (arr: any[]) => {
    return arr.map((template: any) =>
      template.templateName === "CKAN Extension" ||
      template.templateName === "Template 2" ? (
        <li className="list-group-item py-3" key={template.templateName}>
          <p className="m-0">{template.templateName}</p>
        </li>
      ) : null
    );
  };

  return (
    <div className="ms-auto me-1">
      <button
        type="button"
        data-testid="manageTemplateBtn"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#manageTemplate"
      >
        <img src={gearIcon} alt="create-template" />
      </button>
      <Dialog id="manageTemplate" title="Manage templates">
        <div className="modal-body">
          <h2 className="fs-6">Default templates</h2>
          <ul className="list-group">
            {canvasTemplates !== null &&
              renderDefaultTemplates(canvasTemplates)}
          </ul>
          <hr />
          <h2 className="fs-6">Customized templates</h2>
          <ul className="list-group">
            {canvasTemplates !== null && renderCustomTemplates(canvasTemplates)}
          </ul>
        </div>
      </Dialog>
    </div>
  );
};
