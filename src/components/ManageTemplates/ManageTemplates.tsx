import React, { useState, useContext } from "react";
import gearIcon from "../../assets/svg/gear.svg";
import { Dialog } from "../Dialog/Dialog";
import trashIcon from "../../assets/svg/trash.svg";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { CanvasTemplates } from "../CanvasTemplates/CanvasTemplates";
interface ManageTemplatesProps { }

export const ManageTemplates: React.FunctionComponent<ManageTemplatesProps> = (
  props
) => {
  const { canvasTemplates, setCanvasTemplates } = useContext(
    CanvasPreviewContextValues
  );
  const [dialogVisibility, setDialogVisibility] = useState<boolean>(false);

  const handleDeleteTemplate = (templateName: string) => {
    if (confirm("Confirm Templete Deletion") === true) {
      let filteredTemplates = canvasTemplates.filter(
        (template: { templateName: string }) =>
          template.templateName !== templateName
      );
      console.log(filteredTemplates);
      setCanvasTemplates({
        ...canvasTemplates,
        templatesArr: filteredTemplates,
      });
      localStorage.setItem(
        "templates",
        JSON.stringify({ templatesArr: filteredTemplates })
      );
    }
  };
  const renderCanvasTemplates = (arr: any[]) => {
    let filteredDefaultTemplates = arr.filter((template: any) => template.templateName !== "CKAN Extension" && template.templateName !== "Default" && template.templateName !== "Template 2")
    if (filteredDefaultTemplates.length > 0) {
      return filteredDefaultTemplates.map((template: any) => (
        template.templateName !== "CKAN Extension" && template.templateName !== "Default" && template.templateName !== "Template 2" &&
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
          >
            <img
              src={trashIcon}
              alt="remove-gradient"
              onClick={() => handleDeleteTemplate(template.templateName)}
            />
          </button>
        </li>
      ))
    } else {
      return <li
        className="list-group-item d-flex justify-content-between py-3">
        <span className="d-flex align-items-center">
          No tamplates have been added yet.
        </span>
      </li>
    }
  };


  return (
    <div className="mx-1">
      <button
        className="btn btn-success"
        id="createTemplate"
        data-testid="manageTemplate"
        onClick={() => setDialogVisibility(!dialogVisibility)}
      >
        <img src={gearIcon} alt="create-template" />
      </button>
      <Dialog dialogVisibility={dialogVisibility} className={"p-0"}>
        <ul className="list-group">
          {canvasTemplates !== null && renderCanvasTemplates(canvasTemplates)}
        </ul>
      </Dialog>
    </div>
  );
};
