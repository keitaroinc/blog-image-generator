import React, { Fragment, useContext, useEffect, useState } from "react";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { Heading } from "../Heading/Heading";
import { CreateTemplate } from "../CreateTemplate/CreateTemplate";
import { ManageTemplates } from "../ManageTemplates/ManageTemplates";
import templatesData from "../../config/templates.json";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";

interface CanvasTemplatesProps { }

export const CanvasTemplates: React.FunctionComponent<CanvasTemplatesProps> = (
  props
) => {
  const {
    canvasTemplates,
    setCanvasTemplates,
    setCanvasRefs,
    setCanvasHeadlineValues,
    setCanvasBorderValues,
    setCanvasIconValues,
    setCanvasBackgroundValues,
    setCanvasGradientValues,
    setCanvasLogoValues,
  } = useContext(CanvasPreviewContextValues);

  useEffect(() => {
    let storageTemplateData = localStorage.getItem("templates");
    if (storageTemplateData === null) {
      localStorage.setItem("templates", JSON.stringify(templatesData));
      setCanvasTemplates(templatesData.templatesArr);
    } else {
      setCanvasTemplates(JSON.parse(storageTemplateData).templatesArr);
    }
  }, []);

  const handleSelectTemplate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "Default") {
      setCanvasRefs(templatesData.default.canvasRefs);
      setCanvasHeadlineValues(templatesData.default.canvasHeadlineValues);
      setCanvasBackgroundValues(templatesData.default.canvasBackgroundValues);
      setCanvasBorderValues(templatesData.default.canvasBorderValues);
      setCanvasIconValues(templatesData.default.canvasIconValues);
      setCanvasLogoValues(templatesData.default.canvasLogoValues);
      setCanvasGradientValues(templatesData.default.canvasGradientValues);
    } else {
      let filteredTemplate = templatesData.templatesArr.filter(
        (template) => template.templateName === e.target.value
      );
      if (filteredTemplate.length > 0) {
        setCanvasRefs(filteredTemplate[0].canvasRefs);
        setCanvasHeadlineValues(filteredTemplate[0].canvasHeadlineValues);
        setCanvasBackgroundValues(filteredTemplate[0].canvasBackgroundValues);
        setCanvasBorderValues(filteredTemplate[0].canvasBorderValues);
        setCanvasIconValues(filteredTemplate[0].canvasIconValues);
        setCanvasLogoValues(filteredTemplate[0].canvasLogoValues);
        setCanvasGradientValues(filteredTemplate[0].canvasGradientValues);
      }
    }
  };

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
            onChange={(e) => handleSelectTemplate(e)}
          >
            <option value="Default">Default</option>
            {canvasTemplates.length > 0 ? (
              canvasTemplates.map((template: any) => (
                <option
                  key={template.templateName}
                  value={template.templateName}
                >
                  {template.templateName}
                </option>
              ))
            ) : (
              <option value={"default"}>No templates available</option>
            )}
          </select>
          <label htmlFor="floatingSelect">Select Template</label>
        </div>
      </div>
    </Fragment>
  );
};
