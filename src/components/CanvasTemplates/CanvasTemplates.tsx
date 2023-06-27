import React, { Fragment, useContext, useEffect, useState } from "react";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { Heading } from "../Heading/Heading";
import { CreateTemplate } from "../CreateTemplate/CreateTemplate";
import { ManageTemplates } from "../ManageTemplates/ManageTemplates";
import templatesData from "../../config/templates.json";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";

interface CanvasTemplatesProps {}

export const CanvasTemplates: React.FunctionComponent<CanvasTemplatesProps> = (
  props
) => {
  const { canvasTemplates, setCanvasTemplates } = useContext(
    CanvasPreviewContextValues
  );

  useEffect(() => {
    let storageTemplateData = localStorage.getItem("templates");

    if (storageTemplateData === null) {
      localStorage.setItem("templates", JSON.stringify(templatesData));
      setCanvasTemplates(templatesData);
    } else {
      setCanvasTemplates(JSON.parse(storageTemplateData));
    }
  }, []);

  return (
    <Fragment>
      <HeaderComponent>
        <Heading title="Templates" className="py-2" />
        <div className="d-flex">
          <CreateTemplate />
          <ManageTemplates />
        </div>
      </HeaderComponent>
      <div className="list-group-item" data-testid="canvasLogo">
        <div className="form-floating my-2">
          <select
            title="Canvas Template Default Options"
            className="form-select"
            aria-label="Template Type"
          >
            {canvasTemplates &&
              canvasTemplates.templatesArr.map((template: any) => (
                <option key={template.templateName} value="default">
                  {template.templateName}
                </option>
              ))}
          </select>
          <label htmlFor="floatingSelect">Select Template</label>
        </div>
      </div>
    </Fragment>
  );
};
