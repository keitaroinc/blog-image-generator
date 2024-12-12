import React, { Fragment, use, useEffect, useState } from "react";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { Heading } from "../Heading/Heading";
import { CreateTemplate } from "../CreateTemplate/CreateTemplate";
import { ManageTemplates } from "../ManageTemplates/ManageTemplates";
import templatesData from "../../config/templates.json";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";

interface CanvasTemplatesProps {}

export const CanvasTemplates: React.FunctionComponent<CanvasTemplatesProps> = (
  props,
) => {
  const {
    canvasTemplates,
    setCanvasTemplates,
    currentSelectedTemplate,
    setCurrentSelectedTemplate,
    setCanvasHeadlineValues,
    setCanvasBorderValues,
    setCanvasIconValues,
    setCanvasBackgroundValues,
    setCanvasGradientValues,
    setCanvasLogoValues,
    setCanvasAspectRatio,
    setCanvasWidth,
  } = use(CanvasPreviewContextValues);

  useEffect(() => {
    let storageTemplateData = localStorage.getItem("templates");
    if (storageTemplateData === null) {
      localStorage.setItem("templates", JSON.stringify(templatesData));
      setCanvasTemplates(templatesData);
    } else {
      setCanvasTemplates(JSON.parse(storageTemplateData));
    }
  }, []);

  const handleSelectTemplate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "Default") {
      setCurrentSelectedTemplate("Default");
      setCanvasAspectRatio(templatesData[0].canvasAspectRatio);
      setCanvasWidth(templatesData[0].canvasWidth);
      setCanvasHeadlineValues(templatesData[0].canvasHeadlineValues);
      setCanvasBackgroundValues(templatesData[0].canvasBackgroundValues);
      setCanvasBorderValues(templatesData[0].canvasBorderValues);
      // Override fileImage or fileImageURL due to limited local storage
      setCanvasIconValues({
        ...templatesData[0].canvasIconValues,
        fileImage: null,
        fileImageURL: null,
      });
      setCanvasLogoValues(templatesData[0].canvasLogoValues);
      setCanvasGradientValues(templatesData[0].canvasGradientValues);
    } else {
      let filteredTemplate = canvasTemplates.filter(
        (template) => template.templateName === e.target.value,
      );
      if (filteredTemplate.length > 0) {
        setCurrentSelectedTemplate(filteredTemplate[0].templateName);
        setCanvasAspectRatio(filteredTemplate[0].canvasAspectRatio);
        setCanvasWidth(filteredTemplate[0].canvasWidth);
        setCanvasHeadlineValues(filteredTemplate[0].canvasHeadlineValues);
        setCanvasBackgroundValues(filteredTemplate[0].canvasBackgroundValues);
        setCanvasBorderValues(filteredTemplate[0].canvasBorderValues);
        // Override fileImage or fileImageURL due to limited local storage
        setCanvasIconValues({
          ...filteredTemplate[0].canvasIconValues,
          fileImage: null,
          fileImageURL: null,
        });
        setCanvasLogoValues(filteredTemplate[0].canvasLogoValues);
        setCanvasGradientValues(filteredTemplate[0].canvasGradientValues);
      }
    }
  };

  return (
    <Fragment>
      <HeaderComponent>
        <Heading title="Templates" className="py-2" />
        {canvasTemplates.filter((item) => item.templateType !== "default")
          .length ? (
          <ManageTemplates />
        ) : null}
        <CreateTemplate />
      </HeaderComponent>
      <div className="list-group-item">
        <div className="form-floating my-2">
          <select
            title="Select Canvas Template"
            className="form-select"
            aria-label="Template Type"
            onChange={(e) => handleSelectTemplate(e)}
            value={currentSelectedTemplate}
          >
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
